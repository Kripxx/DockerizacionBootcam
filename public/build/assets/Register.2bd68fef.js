import{u as p,r as f,j as a,a as e,H as g,L as h}from"./app.e02f5fee.js";import{G as w}from"./GuestLayout.5a89556c.js";import{I as o}from"./InputError.d40967d8.js";import{I as l}from"./InputLabel.f0a45683.js";import{P as N}from"./PrimaryButton.3ceb3ec6.js";import{T as n}from"./TextInput.13dd406c.js";import"./ApplicationLogo.0a44ae0f.js";function j(){const{data:r,setData:i,post:u,processing:d,errors:t,reset:c}=p({name:"",email:"",password:"",password_confirmation:""});f.exports.useEffect(()=>()=>{c("password","password_confirmation")},[]);const m=s=>{i(s.target.name,s.target.type==="checkbox"?s.target.checked:s.target.value)};return a(w,{children:[e(g,{title:"Register"}),a("form",{onSubmit:s=>{s.preventDefault(),u(route("register"))},children:[a("div",{children:[e(l,{forInput:"name",value:"Name"}),e(n,{type:"text",name:"name",value:r.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,handleChange:m,required:!0}),e(o,{message:t.name,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(l,{forInput:"email",value:"Email"}),e(n,{type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:m,required:!0}),e(o,{message:t.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(l,{forInput:"password",value:"Password"}),e(n,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:m,required:!0}),e(o,{message:t.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(l,{forInput:"password_confirmation",value:"Confirm Password"}),e(n,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",handleChange:m,required:!0}),e(o,{message:t.password_confirmation,className:"mt-2"})]}),a("div",{className:"flex items-center justify-end mt-4",children:[e(h,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900",children:"Already registered?"}),e(N,{className:"ml-4",processing:d,children:"Register"})]})]})]})}export{j as default};
