document.addEventListener("DOMContentLoaded",function(){let e=/^[=_0-9a-zA-Z+~'!\$&*^`|\\\#%/?{}-]+(\.[=_0-9a-zA-Z+~'!\$&*^`|\\\#%/?{}-]+)*@(([-0-9a-zA-Z]+\.)+)([a-zA-Z0-9-]{2,4})$/,t=e=>/^[a-zA-Z0-9](?:\s?[a-zA-Z0-9])*$/.test(e)&&e.length<=50,a=document.querySelector("#reg-form-name"),l=document.querySelector("#reg-form-lastname"),d=document.querySelector("#reg-form-email"),n=document.querySelector("#reg-form-tel"),i=document.querySelector("#reg-form-btn"),s=document.querySelector("#contact-form-name"),r=document.querySelector("#contact-form-email"),u=document.querySelector("#contact-btn");(0===s.value.length||0===r.value.length)&&(u.disabled=!0),(0===a.value.length||0===l.value.length||0===d.value.length||0===n.value.length)&&(i.disabled=!0);let v=()=>{d.classList.add("invalid"),i.disabled=!0},c=()=>{d.classList.remove("invalid"),i.disabled=!1},o=()=>{a.classList.add("invalid"),i.disabled=!0},m=()=>{a.classList.remove("invalid"),i.disabled=!1},L=()=>{l.classList.add("invalid"),i.disabled=!0},g=()=>{l.classList.remove("invalid"),i.disabled=!1},b=()=>{s.classList.add("invalid"),u.disabled=!0},h=()=>{s.classList.remove("invalid"),u.disabled=!1},f=()=>{r.classList.add("invalid"),u.disabled=!0},q=()=>{r.classList.remove("invalid"),u.disabled=!1},y=e=>e.replace(/[^0-9+]/g,"");a.addEventListener("input",()=>{let e=t(a.value);e?m():o()}),l.addEventListener("input",()=>{let e=t(l.value);e?g():L()}),d.addEventListener("input",()=>{let t=0===d.value.length||e.test(d.value);t?c():v()}),n.addEventListener("input",()=>{n.value=y(n.value)}),s.addEventListener("input",()=>{let e=t(s.value);e?h():b()}),r.addEventListener("input",()=>{let t=0===r.value.length||e.test(r.value);t?q():f()})});
//# sourceMappingURL=index-en.f8045934.js.map
