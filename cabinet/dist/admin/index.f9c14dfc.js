document.addEventListener("DOMContentLoaded",function(){let e=/^[=_0-9a-zA-Z+~'!\$&*^`|\\\#%/?{}-]+(\.[=_0-9a-zA-Z+~'!\$&*^`|\\\#%/?{}-]+)*@(([-0-9a-zA-Z]+\.)+)([a-zA-Z0-9-]{2,4})$/,t=e=>/^[a-zA-Z0-9](?:\s?[a-zA-Z0-9])*$/.test(e)&&e.length<=50,l=document.getElementById("registration-email"),a=document.getElementById("registration-password"),d=document.getElementById("registration-user-btn"),i=document.querySelector("#form-edit-order"),n=document.querySelector("#reg-form-name"),s=document.querySelector("#reg-form-lastname"),r=document.querySelector("#reg-form-email"),u=document.querySelector("#reg-form-tel"),o=document.querySelector("#reg-form-btn"),v=document.querySelector("#contact-form-name"),c=document.querySelector("#contact-form-email"),m=document.querySelector("#contact-form-comment"),L=document.querySelector("#contact-btn");(0===v.value.length||0===c.value.length||0===m.value.length)&&(L.disabled=!0),(0===n.value.length||0===s.value.length||0===r.value.length||0===u.value.length)&&(o.disabled=!0);let g=i.plan,b=null;for(let e=0;e<g.length;e++)g[e].addEventListener("change",function(){b&&(o.disabled=!1),this!==b&&(b=this,o.disabled=!1)});let h=()=>{l.classList.add("invalid"),d.disabled=!0},E=()=>{l.classList.remove("invalid"),d.disabled=!1},y=()=>{a.classList.add("invalid"),d.disabled=!0},f=()=>{a.classList.remove("invalid"),d.disabled=!1},p=()=>{r.classList.add("invalid"),o.disabled=!0},q=()=>{r.classList.remove("invalid"),o.disabled=!1},S=()=>{n.classList.add("invalid"),o.disabled=!0},z=()=>{n.classList.remove("invalid"),o.disabled=!1},A=()=>{s.classList.add("invalid"),o.disabled=!0},Z=()=>{s.classList.remove("invalid"),o.disabled=!1},$=()=>{v.classList.add("invalid"),L.disabled=!0},B=()=>{v.classList.remove("invalid"),L.disabled=!1},I=()=>{c.classList.add("invalid"),L.disabled=!0},_=()=>{c.classList.remove("invalid"),L.disabled=!1},w=()=>{m.classList.add("invalid"),L.disabled=!0},C=()=>{m.classList.remove("invalid"),L.disabled=!1},D=e=>e.replace(/[^0-9+]/g,"");l.addEventListener("input",()=>{let t=0===l.value.length||e.test(l.value);t?E():h()}),a.addEventListener("input",()=>{a.value.length<6?y():f()}),n.addEventListener("input",()=>{let e=t(n.value);e?z():S()}),s.addEventListener("input",()=>{let e=t(s.value);e?Z():A()}),r.addEventListener("input",()=>{let t=0===r.value.length||e.test(r.value);t?q():p()}),u.addEventListener("input",()=>{u.value=D(u.value)}),v.addEventListener("input",()=>{let e=t(v.value);e?B():$()}),c.addEventListener("input",()=>{let t=0===c.value.length||e.test(c.value);t?_():I()}),m.addEventListener("input",()=>{let e=m.value.length<=200;e?C():w()})});
//# sourceMappingURL=index.f9c14dfc.js.map