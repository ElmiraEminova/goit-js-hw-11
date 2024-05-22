import{i as c,S as f}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h=o=>o.reduce((s,{tags:t,webformatURL:a,largeImageURL:e,likes:r,views:i,comments:d,downloads:u})=>s+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${a}" alt="${t}" >
    </a>
    <div class="info">
        <div class="info-item">
            <h3 class="title">Likes</h3>
            <p class="info">${r}</p>
        </div>
        <div class="info-item">
            <h3 class="title">Views</h3>
            <p class="info">${i}</p>
        </div>
        <div class="info-item">
            <h3 class="title">Comments</h3>
            <p class="info">${d}</p>
        </div>
        <div class="info-item">
            <h3 class="title">Downloads</h3>
            <p class="info">${u}</p>
        </div>
    </div>
</li>
    `,""),m="44000737-c23aa9eb5fa4f7b392d266f4c",p="https://pixabay.com/api/",y=o=>{const s=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${p}/?${s}`).then(t=>{if(!t.ok)throw new Error("Sorry, there are no image matching your search query. Please try again!");return t.json()})},n=document.querySelector(".gallery"),g=document.querySelector(".search-form"),l=document.querySelector(".loader");function L(o){o.preventDefault();const s=o.target.elements.searchKeyword.value.trim();if(n.innerHTML="",s==="")return c.error({message:"Sorry, there are no images matching your search query. Please try again!"});n.innerHTML="",l.classList.remove("is-hidden"),y(s).then(t=>{t.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML=h(t.hits),new f(".gallery a",{captionsData:"alt",captionsDelay:250})}).catch(t=>console.log(t)).finally(()=>{o.target.reset(),l.classList.add("is-hidden")})}g.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
