const e="http://localhost:4000/",t=`${e}api/order/`,s=`${e}api/contacts/`;if(document){let e;let o=document.querySelector(".modal-terms"),c=document.querySelector(".modal-reg");window&&"URLSearchParams"in window&&((e=new URLSearchParams(window.location.search)).has("terms")&&o.classList.add("scale-100"),e.has("reg")&&c.classList.add("scale-100"),e.has("reg")&&e.has("terms")&&(c.classList.add("scale-100"),o.classList.add("scale-100")));let a=()=>{let e=document.querySelector("#faq"),t=e.getBoundingClientRect().top+window.pageYOffset-90;window.scroll({top:t,behavior:"smooth"})},n=document.querySelectorAll(".faqLink"),r=document.querySelectorAll(".faqBtn");n.forEach(e=>{e.classList.add("hidden-importent")}),r.forEach(e=>{e.classList.remove("hidden-importent"),e.addEventListener("click",a)});let l=new IntersectionObserver(function(e,t){e.forEach(e=>{e&&e.isIntersecting&&e.intersectionRatio>.4?e.target.classList.add("active"):e.target.classList.remove("active")})},{rootMargin:"50% 0px",threshold:[0,.5,1]}),i=new IntersectionObserver(function(e,t){e.forEach(e=>{e&&e.isIntersecting&&("nifOnlineView"===e.target.id?(d.forEach(e=>{e.classList.add("active")}),u.forEach(e=>{e.classList.remove("active")}),m.forEach(e=>{e.classList.remove("active")})):"faqWrapper"===e.target.id?(d.forEach(e=>{e.classList.remove("active")}),u.forEach(e=>{e.classList.remove("active")}),m.forEach(e=>{e.classList.add("active")})):"contactForm"===e.target.id&&(d.forEach(e=>{e.classList.remove("active")}),u.forEach(e=>{e.classList.add("active")}),m.forEach(e=>{e.classList.remove("active")})))})},{rootMargin:"-50px 0px -55%",threshold:[0,.5,1]}),d=document.querySelectorAll(".menu-item-first"),m=document.querySelectorAll(".menu-item-second"),u=document.querySelectorAll(".menu-item-third");document.querySelectorAll(".targetSelector").forEach(e=>{e&&(e.removeAttribute("hidden"),e.classList.contains("hidden-importent")&&e.classList.remove("hidden-importent"),l.observe(e),i.observe(e))}),document.addEventListener("DOMContentLoaded",function(){let e;let a=document.querySelector(".burger-btn"),n=document.querySelector(".main-menu"),r=document.querySelector(".lang-btn"),l=document.querySelector(".lang-menu"),i=document.querySelector(".lang-comp"),d=document.querySelectorAll(".details"),m=document.querySelector(".modal-wrapper"),u=document.querySelector(".close-reg-form"),v=document.querySelectorAll(".btn-get-nif"),L=document.querySelector(".btn-get-started"),h=document.querySelectorAll(".order-btn"),y=document.querySelector("#oneDay"),p=document.querySelector("#sixDay"),f=document.querySelector("#elevenDay"),g=document.querySelector(".modal-succes"),S=document.querySelector(".close-saccess-form"),q=document.querySelector(".close-saccess-btn"),w=document.querySelectorAll(".show-terms-modal"),b=document.querySelector(".close-modal-terms");window&&"URLSearchParams"in window&&(e=new URLSearchParams(window.location.search));let E=document.querySelector("#regForm"),k=document.querySelector("#reg-form-name"),D=document.querySelector("#reg-form-lastname"),A=document.querySelector("#reg-form-social"),P=document.querySelector("#reg-form-email"),M=document.querySelector("#reg-form-tel"),O=document.querySelector("#js-choice"),T=document.querySelector("#contactForm"),$=document.querySelector("#contact-form-name"),x=document.querySelector("#contact-form-email"),R=document.querySelector("#contact-form-comment"),U=document.querySelector("#oneDayDate"),C=document.querySelector("#sixDayDate"),F=document.querySelector("#elevenDayDate");async function I(e,t){try{let s=await fetch(e,{method:"PUT",headers:{"Content-Type":"application/json"},body:t});200===s.status&&J()}catch(e){console.error("Error:",e)}}async function j(e,t){try{let s=await fetch(e,{method:"PUT",headers:{"Content-Type":"application/json"},body:t});200===s.status&&(B(),J())}catch(e){console.error("Error:",e)}}T.addEventListener("submit",e=>{e.preventDefault();let t={name:$.value,email:x.value,comment:R.value};I(s,JSON.stringify(t))}),E.addEventListener("submit",e=>{e.preventDefault();let s={name:k.value,last_name:D.value,email:P.value,phone_number:M.value,social_network:A.value,country:O.value,plan:document.querySelector("input[name=plan]:checked").value};j(t,JSON.stringify(s))});let H=()=>{let t=`${window.location.pathname}${e.toString().length?"?"+e.toString():""}`;history.pushState(null,"",t)},N=()=>{o.classList.contains("scale-0")&&(o.classList.remove("scale-0"),o.classList.add("scale-100"),document.body.style.overflow="hidden",e.set("terms","open"),H())},_=()=>{o.classList.contains("scale-100")&&(o.classList.remove("scale-100"),o.classList.add("scale-0"),document.body.style.overflow="visible",e.delete("terms"),H())};w.forEach(e=>{e.addEventListener("click",N)}),b.addEventListener("click",_);let B=()=>{c.classList.contains("scale-100")&&(c.classList.remove("scale-100"),c.classList.add("scale-0"),document.body.style.overflow="visible",e.delete("reg"),H())},J=()=>{g.classList.contains("scale-0")&&(g.classList.remove("scale-0"),g.classList.add("scale-100"),document.body.style.overflow="hidden")},Y=()=>{g.classList.contains("scale-100")&&(g.classList.remove("scale-100"),g.classList.add("scale-0"),document.body.style.overflow="visible")};[h,v,L].forEach(t=>{t.length>1?t.forEach(t=>{t.addEventListener("click",function(){event.stopPropagation(),t.classList.contains("order-btn-first")?(p.checked=!1,f.checked=!1,y.checked=!0):t.classList.contains("order-btn-six")?(f.checked=!1,y.checked=!1,p.checked=!0):t.classList.contains("order-btn-eleven")&&(y.checked=!1,p.checked=!0,f.checked=!0),c.classList.contains("scale-0")&&(c.classList.remove("scale-0"),c.classList.add("scale-100"),document.body.style.overflow="hidden",e.set("reg","open"),H())})}):t.addEventListener("click",function(e){e.stopPropagation(),c.classList.contains("scale-0")&&(c.classList.remove("scale-0"),c.classList.add("scale-100"))})}),u.addEventListener("click",function(e){e.stopPropagation(),B()}),[S,q].forEach(e=>{e.addEventListener("click",function(e){e.stopPropagation(),Y()})});let V=()=>{n.classList.remove("opened-menu"),a.classList.remove("opened-burger"),document.body.style.overflow="visible"};a.addEventListener("click",function(e){e.stopPropagation(),n.classList.contains("opened-menu")?V():(n.classList.add("opened-menu"),a.classList.add("opened-burger"),document.body.style.overflow="hidden")}),r.addEventListener("click",function(e){e.stopPropagation(),l.classList.contains("open-lang")?(l.classList.remove("open-lang"),r.classList.remove("opened-swither"),i.classList.remove("opened-swither")):(l.classList.add("open-lang"),r.classList.add("opened-swither"),i.classList.add("opened-swither"))}),document.addEventListener("click",function(e){l.classList.contains("open-lang")&&(l.classList.remove("open-lang"),i.classList.remove("opened-swither"),r.classList.remove("opened-swither")),n.classList.contains("opened-menu")&&V();let t=e.target;m.contains(t)||o.contains(t)||B(),o.contains(t)&&_()});let W=e=>`${String(e.getDate()).padStart(2,"0")}.${String(e.getMonth()+1).padStart(2,"0")}.${e.getFullYear()}`,z=new Date;z.setDate(z.getDate()+1),U.innerHTML=W(z);let G=new Date;G.setDate(G.getDate()+6),C.innerHTML=W(G);let K=new Date;K.setDate(K.getDate()+11),F.innerHTML=W(K);let Q=e=>{e.addEventListener("click",t=>{e.hasAttribute("open")&&(t.preventDefault(),e.classList.add("closing"))}),e.addEventListener("animationend",t=>{"close"===t.animationName&&(e.removeAttribute("open"),e.classList.remove("closing"))})};d.forEach(e=>{Q(e)})},!1)}
//# sourceMappingURL=index-en.5e4cb4d1.js.map
