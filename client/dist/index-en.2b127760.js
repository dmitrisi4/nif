const e="http://13.53.206.241:4000/",t=`${e}api/order/`,s=`${e}api/contacts/`;if(document){let e;let c=document.querySelector(".modal-terms"),o=document.querySelector(".modal-reg");window&&"URLSearchParams"in window&&((e=new URLSearchParams(window.location.search)).has("terms")&&c.classList.add("scale-100"),e.has("reg")&&o.classList.add("scale-100"),e.has("reg")&&e.has("terms")&&(o.classList.add("scale-100"),c.classList.add("scale-100")));let a=()=>{let e=document.querySelector("#faq"),t=e.getBoundingClientRect().top+window.pageYOffset-90;window.scroll({top:t,behavior:"smooth"})},n=document.querySelectorAll(".faqLink"),r=document.querySelectorAll(".faqBtn");n.forEach(e=>{e.classList.add("hidden-importent")}),r.forEach(e=>{e.classList.remove("hidden-importent"),e.addEventListener("click",a)});let l=new IntersectionObserver(function(e,t){e.forEach(e=>{e&&e.isIntersecting&&e.intersectionRatio>.4?e.target.classList.add("active"):e.target.classList.remove("active")})},{rootMargin:"50% 0px",threshold:[0,.5,1]}),i=new IntersectionObserver(function(e,t){e.forEach(e=>{e&&e.isIntersecting&&("nifOnlineView"===e.target.id?(d.forEach(e=>{e.classList.add("active")}),u.forEach(e=>{e.classList.remove("active")}),m.forEach(e=>{e.classList.remove("active")})):"faqWrapper"===e.target.id?(d.forEach(e=>{e.classList.remove("active")}),u.forEach(e=>{e.classList.remove("active")}),m.forEach(e=>{e.classList.add("active")})):"contactForm"===e.target.id&&(d.forEach(e=>{e.classList.remove("active")}),u.forEach(e=>{e.classList.add("active")}),m.forEach(e=>{e.classList.remove("active")})))})},{rootMargin:"-50px 0px -55%",threshold:[0,.5,1]}),d=document.querySelectorAll(".menu-item-first"),m=document.querySelectorAll(".menu-item-second"),u=document.querySelectorAll(".menu-item-third");document.querySelectorAll(".targetSelector").forEach(e=>{e&&(e.removeAttribute("hidden"),e.classList.contains("hidden-importent")&&e.classList.remove("hidden-importent"),l.observe(e),i.observe(e))}),document.addEventListener("DOMContentLoaded",function(){let e;let a=document.querySelector(".burger-btn"),n=document.querySelector(".main-menu"),r=document.querySelector(".lang-btn"),l=document.querySelector(".lang-menu"),i=document.querySelector(".lang-comp"),d=document.querySelectorAll(".details"),m=document.querySelector(".modal-wrapper"),u=document.querySelector(".close-reg-form"),v=document.querySelectorAll(".btn-get-nif"),L=document.querySelectorAll(".btn-get-started"),y=document.querySelectorAll(".order-btn"),h=document.querySelector("#oneDay"),f=document.querySelector("#sixDay"),p=document.querySelector("#elevenDay"),g=document.querySelector(".modal-succes"),S=document.querySelector(".close-saccess-form"),q=document.querySelector(".close-saccess-btn"),w=document.querySelectorAll(".show-terms-modal"),b=document.querySelector(".close-modal-terms"),E=document.querySelector(".btn-documents-modal"),k=document.querySelector(".close-required-documents"),D=document.querySelector(".required-documents-modal");window&&"URLSearchParams"in window&&(e=new URLSearchParams(window.location.search));let A=document.querySelector("#regForm"),P=document.querySelector("#reg-form-name"),M=document.querySelector("#reg-form-lastname"),O=document.querySelector("#reg-form-social"),T=document.querySelector("#reg-form-email"),$=document.querySelector("#reg-form-tel"),x=document.querySelector("#js-choice"),R=document.querySelector("#contactForm"),U=document.querySelector("#contact-form-name"),C=document.querySelector("#contact-form-email"),F=document.querySelector("#contact-form-comment"),I=document.querySelector("#oneDayDate"),j=document.querySelector("#sixDayDate"),H=document.querySelector("#elevenDayDate");async function N(e,t){try{let s=await fetch(e,{method:"PUT",headers:{"Content-Type":"application/json"},body:t});200===s.status&&W()}catch(e){console.error("Error:",e)}}async function _(e,t){try{let s=await fetch(e,{method:"PUT",headers:{"Content-Type":"application/json"},body:t});200===s.status&&(V(),W())}catch(e){console.error("Error:",e)}}R.addEventListener("submit",e=>{e.preventDefault();let t={name:U.value,email:C.value,comment:F.value};N(s,JSON.stringify(t))}),A.addEventListener("submit",e=>{e.preventDefault();let s={name:P.value,last_name:M.value,email:T.value,phone_number:$.value,social_network:O.value,country:x.value,plan:document.querySelector("input[name=plan]:checked").value};_(t,JSON.stringify(s))});let B=()=>{let t=`${window.location.pathname}${e.toString().length?"?"+e.toString():""}`;history.pushState(null,"",t)},J=()=>{c.classList.contains("scale-0")&&(c.classList.remove("scale-0"),c.classList.add("scale-100"),document.body.style.overflow="hidden",e.set("terms","open"),B())},Y=()=>{c.classList.contains("scale-100")&&(c.classList.remove("scale-100"),c.classList.add("scale-0"),document.body.style.overflow="visible",e.delete("terms"),B())};w.forEach(e=>{e.addEventListener("click",J)}),b.addEventListener("click",Y);let V=()=>{o.classList.contains("scale-100")&&(o.classList.remove("scale-100"),o.classList.add("scale-0"),document.body.style.overflow="visible",e.delete("reg"),B())},W=()=>{g.classList.contains("scale-0")&&(g.classList.remove("scale-0"),g.classList.add("scale-100"),document.body.style.overflow="hidden")},z=()=>{g.classList.contains("scale-100")&&(g.classList.remove("scale-100"),g.classList.add("scale-0"),document.body.style.overflow="visible")},G=()=>{D.classList.contains("scale-100")&&(D.classList.remove("scale-100"),D.classList.add("scale-0"),document.body.style.overflow="visible")};E.addEventListener("click",()=>{D.classList.contains("scale-0")&&(D.classList.remove("scale-0"),D.classList.add("scale-100"),document.body.style.overflow="hidden")}),k.addEventListener("click",G);let K=()=>{o.classList.remove("scale-0"),o.classList.add("scale-100"),document.body.style.overflow="hidden",e.set("reg","open"),B()};[y,v,L].forEach(e=>{e.length>1?e.forEach(e=>{e.length>1&&e.forEach(e=>{e.addEventListener("click",function(e){e.stopPropagation(),o.classList.contains("scale-0")&&K()})}),e.addEventListener("click",function(){event.stopPropagation(),e.classList.contains("order-btn-first")?(f.checked=!1,p.checked=!1,h.checked=!0):e.classList.contains("order-btn-six")?(p.checked=!1,h.checked=!1,f.checked=!0):e.classList.contains("order-btn-eleven")&&(h.checked=!1,f.checked=!0,p.checked=!0),o.classList.contains("scale-0")&&K()})}):e.addEventListener("click",function(e){e.stopPropagation(),o.classList.contains("scale-0")&&K()})}),u.addEventListener("click",function(e){e.stopPropagation(),V()}),[S,q].forEach(e=>{e.addEventListener("click",function(e){e.stopPropagation(),z()})});let Q=()=>{n.classList.remove("opened-menu"),a.classList.remove("opened-burger"),document.body.style.overflow="visible"};a.addEventListener("click",function(e){e.stopPropagation(),n.classList.contains("opened-menu")?Q():(n.classList.add("opened-menu"),a.classList.add("opened-burger"),document.body.style.overflow="hidden")}),r.addEventListener("click",function(e){e.stopPropagation(),l.classList.contains("open-lang")?(l.classList.remove("open-lang"),r.classList.remove("opened-swither"),i.classList.remove("opened-swither")):(l.classList.add("open-lang"),r.classList.add("opened-swither"),i.classList.add("opened-swither"))}),document.addEventListener("click",function(e){l.classList.contains("open-lang")&&(l.classList.remove("open-lang"),i.classList.remove("opened-swither"),r.classList.remove("opened-swither")),n.classList.contains("opened-menu")&&Q();let t=e.target;m.contains(t)||c.contains(t)||V(),c.contains(t)&&Y(),D.contains(t)&&G()});let X=e=>`${String(e.getDate()).padStart(2,"0")}.${String(e.getMonth()+1).padStart(2,"0")}.${e.getFullYear()}`,Z=new Date;Z.setDate(Z.getDate()+1),I.innerHTML=X(Z);let ee=new Date;ee.setDate(ee.getDate()+6),j.innerHTML=X(ee);let et=new Date;et.setDate(et.getDate()+11),H.innerHTML=X(et);let es=e=>{e.addEventListener("click",t=>{e.hasAttribute("open")&&(t.preventDefault(),e.classList.add("closing"))}),e.addEventListener("animationend",t=>{"close"===t.animationName&&(e.removeAttribute("open"),e.classList.remove("closing"))})};d.forEach(e=>{es(e)})},!1)}
//# sourceMappingURL=index-en.2b127760.js.map