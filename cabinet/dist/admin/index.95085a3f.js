document.addEventListener("DOMContentLoaded",function(){let e=/^[=_0-9a-zA-Z+~'!\$&*^`|\\\#%/?{}-]+(\.[=_0-9a-zA-Z+~'!\$&*^`|\\\#%/?{}-]+)*@(([-0-9a-zA-Z]+\.)+)([a-zA-Z0-9-]{2,4})$/,t=e=>/^[a-zA-Z0-9](?:\s?[a-zA-Z0-9])*$/.test(e)&&e.length<=50,l=document.getElementById("registration-email"),a=document.getElementById("registration-password"),d=document.getElementById("registration-user-btn"),i=document.querySelector("#form-edit-order"),n=document.querySelector("#reg-form-name"),s=document.querySelector("#reg-form-lastname"),r=document.querySelector("#reg-form-email"),u=document.querySelector("#reg-form-tel"),o=document.querySelector("#reg-form-btn"),v=document.querySelector("#contact-form-name"),c=document.querySelector("#contact-form-email"),m=document.querySelector("#contact-btn");(0===v.value.length||0===c.value.length)&&(m.disabled=!0),(0===n.value.length||0===s.value.length||0===r.value.length||0===u.value.length)&&(o.disabled=!0);let g=i.plan,L=null;for(let e=0;e<g.length;e++)g[e].addEventListener("change",function(){L&&(o.disabled=!1),this!==L&&(L=this,o.disabled=!1)});let b=()=>{l.classList.add("invalid"),d.disabled=!0},h=()=>{l.classList.remove("invalid"),d.disabled=!1},E=()=>{a.classList.add("invalid"),d.disabled=!0},y=()=>{a.classList.remove("invalid"),d.disabled=!1},f=()=>{r.classList.add("invalid"),o.disabled=!0},p=()=>{r.classList.remove("invalid"),o.disabled=!1},q=()=>{n.classList.add("invalid"),o.disabled=!0},S=()=>{n.classList.remove("invalid"),o.disabled=!1},z=()=>{s.classList.add("invalid"),o.disabled=!0},A=()=>{s.classList.remove("invalid"),o.disabled=!1},Z=()=>{v.classList.add("invalid"),m.disabled=!0},$=()=>{v.classList.remove("invalid"),m.disabled=!1},B=()=>{c.classList.add("invalid"),m.disabled=!0},I=()=>{c.classList.remove("invalid"),m.disabled=!1},_=e=>e.replace(/[^0-9+]/g,"");l.addEventListener("input",()=>{let t=0===l.value.length||e.test(l.value);t?h():b()}),a.addEventListener("input",()=>{a.value.length<6?E():y()}),n.addEventListener("input",()=>{let e=t(n.value);e?S():q()}),s.addEventListener("input",()=>{let e=t(s.value);e?A():z()}),r.addEventListener("input",()=>{let t=0===r.value.length||e.test(r.value);t?p():f()}),u.addEventListener("input",()=>{u.value=_(u.value)}),v.addEventListener("input",()=>{let e=t(v.value);e?$():Z()}),c.addEventListener("input",()=>{let t=0===c.value.length||e.test(c.value);t?I():B()})});
//# sourceMappingURL=index.95085a3f.js.map
