const e="http://localhost:4000/",t=`${e}api/order/`,c=`${e}api/contacts/`;if(document){let e=new IntersectionObserver(function(e,t){e.forEach(e=>{e&&e.isIntersecting&&e.intersectionRatio>.4?e.target.classList.add("active"):e.target.classList.remove("active")})},{rootMargin:"50% 0px",threshold:[0,.5,1]}),o=new IntersectionObserver(function(e,t){e.forEach(e=>{e&&e.isIntersecting&&("nifOnlineView"===e.target.id?(s.classList.add("active"),a.classList.remove("active"),n.classList.remove("active")):"faqWrapper"===e.target.id?(s.classList.remove("active"),a.classList.remove("active"),n.classList.add("active")):"contactForm"===e.target.id&&(a.classList.add("active"),s.classList.remove("active"),n.classList.remove("active")))})},{rootMargin:"-50px 0px -55%",threshold:[0,.5,1]}),s=document.querySelector(".menu-item-first"),n=document.querySelector(".menu-item-second"),a=document.querySelector(".menu-item-third");document.querySelectorAll(".targetSelector").forEach(t=>{t&&(e.observe(t),o.observe(t))}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".burger-btn"),o=document.querySelector(".main-menu"),s=document.querySelector(".lang-btn"),n=document.querySelector(".lang-menu"),a=document.querySelector(".lang-comp"),r=document.querySelector(".modal-reg"),l=document.querySelector(".modal-wrapper"),i=document.querySelector(".close-reg-form"),d=document.querySelectorAll(".btn-get-nif"),u=document.querySelector(".btn-get-started"),m=document.querySelectorAll(".order-btn"),v=document.querySelector("#oneDay"),y=document.querySelector("#sixDay"),L=document.querySelector("#elevenDay"),p=document.querySelector(".modal-succes"),g=document.querySelector(".close-saccess-form"),f=document.querySelector(".close-saccess-btn"),h=document.querySelector("#regForm"),S=document.querySelector("#reg-form-name"),q=document.querySelector("#reg-form-lastname"),b=document.querySelector("#reg-form-social"),w=document.querySelector("#reg-form-email"),D=document.querySelector("#reg-form-tel"),k=document.querySelector("#js-choice"),E=document.querySelector("#contactForm"),P=document.querySelector("#contact-form-name"),M=document.querySelector("#contact-form-email"),T=document.querySelector("#contact-form-comment"),x=document.querySelector("#oneDayDate"),O=document.querySelector("#sixDayDate"),$=document.querySelector("#elevenDayDate");async function F(e,t){try{let c=await fetch(e,{method:"PUT",headers:{"Content-Type":"application/json"},body:t});200===c.status&&A()}catch(e){console.error("Error:",e)}}async function I(e,t){try{let c=await fetch(e,{method:"PUT",headers:{"Content-Type":"application/json"},body:t});200===c.status&&(j(),A())}catch(e){console.error("Error:",e)}}E.addEventListener("submit",e=>{e.preventDefault();let t={name:P.value,email:M.value,comment:T.value};F(c,JSON.stringify(t))}),h.addEventListener("submit",e=>{e.preventDefault();let c={name:S.value,last_name:q.value,email:w.value,phone_number:D.value,social_network:b.value,country:k.value,plan:document.querySelector("input[name=plan]:checked").value};I(t,JSON.stringify(c))});let j=()=>{r.classList.contains("scale-100")&&(r.classList.remove("scale-100"),r.classList.add("scale-0"),document.body.style.overflow="visible")},A=()=>{p.classList.contains("scale-0")&&(p.classList.remove("scale-0"),p.classList.add("scale-100"),document.body.style.overflow="hidden")},C=()=>{p.classList.contains("scale-100")&&(p.classList.remove("scale-100"),p.classList.add("scale-0"),document.body.style.overflow="visible")};[m,d,u].forEach(e=>{e.length>1?e.forEach(e=>{e.addEventListener("click",function(){event.stopPropagation(),e.classList.contains("order-btn-first")?(y.checked=!1,L.checked=!1,v.checked=!0):e.classList.contains("order-btn-six")?(L.checked=!1,v.checked=!1,y.checked=!0):e.classList.contains("order-btn-eleven")&&(v.checked=!1,y.checked=!0,L.checked=!0),r.classList.contains("scale-0")&&(r.classList.remove("scale-0"),r.classList.add("scale-100"),document.body.style.overflow="hidden")})}):e.addEventListener("click",function(e){e.stopPropagation(),r.classList.contains("scale-0")&&(r.classList.remove("scale-0"),r.classList.add("scale-100"))})}),i.addEventListener("click",function(e){e.stopPropagation(),j()}),[g,f].forEach(e=>{e.addEventListener("click",function(e){e.stopPropagation(),C()})});let H=()=>{o.classList.remove("opened-menu"),e.classList.remove("opened-burger"),document.body.style.overflow="visible"};e.addEventListener("click",function(t){t.stopPropagation(),o.classList.contains("opened-menu")?H():(o.classList.add("opened-menu"),e.classList.add("opened-burger"),document.body.style.overflow="hidden")}),s.addEventListener("click",function(e){e.stopPropagation(),n.classList.contains("open-lang")?(n.classList.remove("open-lang"),s.classList.remove("opened-swither"),a.classList.remove("opened-swither")):(n.classList.add("open-lang"),s.classList.add("opened-swither"),a.classList.add("opened-swither"))}),document.addEventListener("click",function(e){n.classList.contains("open-lang")&&(n.classList.remove("open-lang"),a.classList.remove("opened-swither"),s.classList.remove("opened-swither")),o.classList.contains("opened-menu")&&H();let t=e.target;l.contains(t)||j()});let _=e=>`${String(e.getDate()).padStart(2,"0")}.${String(e.getMonth()+1).padStart(2,"0")}.${e.getFullYear()}`,J=new Date;J.setDate(J.getDate()+1),x.innerHTML=_(J);let N=new Date;N.setDate(N.getDate()+6),O.innerHTML=_(N);let U=new Date;U.setDate(U.getDate()+11),$.innerHTML=_(U)},!1)}
//# sourceMappingURL=index-en.a1300bc0.js.map
