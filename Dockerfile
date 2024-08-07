# Utiliza una imagen base de PHP con Apache, versión más reciente
FROM php:8.2-apache

# Instala las extensiones necesarias de PHP
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd pdo pdo_mysql

# Instala Node.js y NPM
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest

# Instala Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copia el contenido del proyecto al contenedor
COPY . /var/www/html

# Configura los permisos correctos
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Habilita el módulo de reescritura de Apache
RUN a2enmod rewrite

# Copia la configuración personalizada de Apache
COPY 000-default.conf /etc/apache2/sites-available/000-default.conf

# Establece el directorio de trabajo
WORKDIR /var/www/html

# Expone el puerto 80 para Apache
EXPOSE 80

# Comando de inicio
CMD ["apache2-foreground"]
