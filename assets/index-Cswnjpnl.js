const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./grupos-pesquisa-57ZWRPgz.js","./grupos-pesquisa-DUZtbPye.css"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`modulepreload`,t=function(e,t){return new URL(e,t).href},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``;if(a)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let l=document.createElement(`link`);if(l.rel=o?`stylesheet`:e,o||(l.as=`script`),l.crossOrigin=``,l.href=i,c&&l.setAttribute(`nonce`,c),document.head.appendChild(l),o)return new Promise((e,t)=>{l.addEventListener(`load`,e),l.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[])t.status===`rejected`&&s(t.reason);return r().catch(s)})},i=[{id:`grupos-pesquisa`,label:`Grupos de Pesquisa`,description:`Vínculos entre membros do PPGMUS e grupos de pesquisa do DGP/CNPq.`,loader:()=>r(()=>import(`./grupos-pesquisa-57ZWRPgz.js`),__vite__mapDeps([0,1]),import.meta.url)}],a=document.querySelector(`#app`);a.innerHTML=`
  <header id="app-header">
    <h1>PPGMUS UFMG</h1>
    <nav id="nav">
      <button class="nav-btn" data-view="">Início</button>
      ${i.map(e=>`<button class="nav-btn" data-view="${e.id}">${e.label}</button>`).join(``)}
    </nav>
  </header>
  <main id="view-container">
    <div id="loading"><div class="spinner"></div><span>Carregando…</span></div>
    <div id="view-mount"></div>
  </main>
`;var o=document.getElementById(`loading`),s=document.getElementById(`view-mount`),c=document.querySelectorAll(`.nav-btn`),l=null;function u(e){c.forEach(t=>t.classList.toggle(`active`,t.dataset.view===e))}async function d(e){if(l&&=(l(),null),s.innerHTML=``,!e){u(``),s.innerHTML=`
      <section id="landing">
        <h2>Visualizações PPGMUS</h2>
        <p>Dados de produção e vínculos dos membros do Programa de Pós-Graduação em Música da UFMG.</p>
        <div class="vis-cards">
          ${i.map(e=>`
            <div class="vis-card" data-view="${e.id}">
              <h3>${e.label}</h3>
              <p>${e.description}</p>
            </div>`).join(``)}
        </div>
      </section>`,s.querySelectorAll(`.vis-card`).forEach(e=>{e.addEventListener(`click`,()=>d(e.dataset.view))});return}let t=i.find(t=>t.id===e);if(!t)return d(``);u(e),o.classList.add(`visible`);try{let e=await t.loader();o.classList.remove(`visible`),e.mount&&(l=e.mount(s)||null)}catch(e){o.classList.remove(`visible`),s.innerHTML=`<p style="padding:2rem;color:#f87171">Erro ao carregar visualização: ${e.message}</p>`,console.error(e)}}function f(){d(location.hash.replace(`#`,``)||``)}window.addEventListener(`hashchange`,f),c.forEach(e=>{e.addEventListener(`click`,()=>{location.hash=e.dataset.view})}),f();