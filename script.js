/* ------------------------------------------------------------------
   Lista de cards. Cada card aponta pra um par de arquivos:
   - links/<slug>.html   -> página de redirecionamento (edite a URL lá dentro)
   - textos/<slug>.txt   -> texto que aparece quando o card é aberto

   Pra criar um card novo:
   1. copie links/exemplo.html -> links/novoslug.html e troque a URL
   2. copie textos/exemplo.txt -> textos/novoslug.txt e escreva o texto
   3. adicione um objeto aqui embaixo com o mesmo slug
-------------------------------------------------------------------- */

const CARDS = [
  {
    slug: "github",
    title: "GitHub",
    sub: "github.com/capimmm",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.94c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.9-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .28.18.61.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" fill="currentColor"/></svg>`
  },
  {
    slug: "discord",
    title: "Discord",
    sub: "entra no server / chama no dm",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M18.9 6.4a15.5 15.5 0 0 0-3.6-1.1l-.2.4c1.3.3 2 .8 2.7 1.3-1.3-.6-2.6-.9-3.8-.9s-2.5.3-3.8.9c.7-.5 1.5-1 2.7-1.3l-.2-.4a15.5 15.5 0 0 0-3.6 1.1C4.6 9.1 4 12 4.2 14.8a15.6 15.6 0 0 0 4.4 2.1l.5-.8c-.8-.3-1.5-.7-2.2-1.1l.4-.3c2 1 4.2 1.5 6.7 1.5s4.7-.5 6.7-1.5l.4.3c-.7.4-1.4.8-2.2 1.1l.5.8a15.6 15.6 0 0 0 4.4-2.1c.3-3.3-.6-6.1-3.9-8.4zM9.7 13.4c-.7 0-1.3-.7-1.3-1.5s.6-1.5 1.3-1.5 1.3.7 1.3 1.5-.6 1.5-1.3 1.5zm4.6 0c-.7 0-1.3-.7-1.3-1.5s.6-1.5 1.3-1.5 1.3.7 1.3 1.5-.6 1.5-1.3 1.5z" fill="currentColor"/></svg>`
  },
  {
    slug: "instagram",
    title: "Instagram",
    sub: "bastidores e prints do znyk",
    icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor"/></svg>`
  },
  {
    slug: "znyk",
    title: "znyk",
    sub: "convida o bot pro seu server",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  }
];

const cardsEl = document.getElementById("cards");
const overlay = document.getElementById("overlay");
const panelClose = document.getElementById("panelClose");
const panelTitle = document.getElementById("panelTitle");
const panelText = document.getElementById("panelText");
const panelVisit = document.getElementById("panelVisit");
const panelIcon = document.getElementById("panelIcon");

function buildCards(){
  CARDS.forEach(card => {
    const btn = document.createElement("button");
    btn.className = "card";
    btn.innerHTML = `
      <span class="card-icon">${card.icon}</span>
      <span class="card-body">
        <p class="card-title">${card.title}</p>
        <p class="card-sub">${card.sub}</p>
      </span>
      <svg class="card-arrow" width="18" height="18" viewBox="0 0 16 16" fill="none">
        <path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    btn.addEventListener("click", () => openCard(card));
    cardsEl.appendChild(btn);
  });
}

async function openCard(card){
  panelTitle.textContent = card.title;
  panelIcon.innerHTML = card.icon;
  panelVisit.href = `links/${card.slug}.html`;
  panelText.textContent = "Carregando...";
  overlay.classList.add("active");

  try{
    const res = await fetch(`textos/${card.slug}.txt`, { cache: "no-store" });
    if(!res.ok) throw new Error("sem texto");
    const txt = await res.text();
    panelText.textContent = txt.trim();
  }catch(e){
    panelText.textContent = "";
  }
}

function closePanel(){
  overlay.classList.remove("active");
}

panelClose.addEventListener("click", closePanel);
overlay.addEventListener("click", (e) => {
  if(e.target === overlay) closePanel();
});
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closePanel();
});

/* glow que segue o mouse, sutil */
const glow = document.getElementById("glow");
window.addEventListener("pointermove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

buildCards();
