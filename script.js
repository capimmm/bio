/* ------------------------------------------------------------------
   ÚNICA COISA QUE VOCÊ PRECISA CONFIGURAR (uma vez só):
-------------------------------------------------------------------- */
const CONFIG = {
  owner: "capimmm",
  repo: "bio",   // <- troque pelo nome do repositório
  branch: "main"
};

/* ------------------------------------------------------------------
   Depois disso, pra adicionar/remover/editar um card, você só mexe
   nas pastas links/ e textos/ do repositório. Nada aqui precisa mudar.

   FORMATO SIMPLES (3 linhas) em textos/<slug>.txt:
     linha 1: título
     linha 2: resumo curto
     linha 3 em diante: texto completo

   FORMATO COMPLETO (com cor / imagem / som), também em textos/<slug>.txt:
     titulo: GitHub
     resumo: repositórios dos projetos
     cor: #9b6bff
     imagem: imagens/github.jpg
     som: sons/github.mp3
     ---
     Texto completo aqui, pode ter várias linhas.

   Todos os campos do formato completo são opcionais, menos "titulo".
   "imagem" e "som" são caminhos relativos dentro do repositório
   (ex: pasta imagens/ e sons/, que já vêm criadas no projeto).
-------------------------------------------------------------------- */

const ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.94c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.9-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .28.18.61.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" fill="currentColor"/></svg>`,
  discord: `<svg viewBox="0 0 24 24" fill="none"><path d="M18.9 6.4a15.5 15.5 0 0 0-3.6-1.1l-.2.4c1.3.3 2 .8 2.7 1.3-1.3-.6-2.6-.9-3.8-.9s-2.5.3-3.8.9c.7-.5 1.5-1 2.7-1.3l-.2-.4a15.5 15.5 0 0 0-3.6 1.1C4.6 9.1 4 12 4.2 14.8a15.6 15.6 0 0 0 4.4 2.1l.5-.8c-.8-.3-1.5-.7-2.2-1.1l.4-.3c2 1 4.2 1.5 6.7 1.5s4.7-.5 6.7-1.5l.4.3c-.7.4-1.4.8-2.2 1.1l.5.8a15.6 15.6 0 0 0 4.4-2.1c.3-3.3-.6-6.1-3.9-8.4zM9.7 13.4c-.7 0-1.3-.7-1.3-1.5s.6-1.5 1.3-1.5 1.3.7 1.3 1.5-.6 1.5-1.3 1.5zm4.6 0c-.7 0-1.3-.7-1.3-1.5s.6-1.5 1.3-1.5 1.3.7 1.3 1.5-.6 1.5-1.3 1.5z" fill="currentColor"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="none"><rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" stroke-width="1.6"/><path d="M10.5 9.3v5.4l4.7-2.7-4.7-2.7z" fill="currentColor"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 4l7 9.2L4.4 20H6l5.9-5.7L16.8 20H20l-7.4-9.7L19 4h-1.6l-5.4 5.2L7.2 4H4z" fill="currentColor"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 4l7 9.2L4.4 20H6l5.9-5.7L16.8 20H20l-7.4-9.7L19 4h-1.6l-5.4 5.2L7.2 4H4z" fill="currentColor"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="none"><path d="M14 3v10.6a2.6 2.6 0 1 1-2-2.53" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M14 3c.4 2.4 2 4 4.4 4.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  spotify: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M7 10.5c3-1 7-.6 9.5.9M7.5 13.3c2.5-.8 5.8-.5 8 .8M8 16c2-.6 4.5-.4 6 .6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  twitch: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 3l-1.5 4v11h4V21l3-3h4l4-4V3H5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24" fill="none"><path d="M21 4L3 11.5l6 2 2 6 3-4 4.5 3.5L21 4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="none"><path d="M6 18l-1.5 3L8 19.5A9 9 0 1 0 4 12c0 1.6.4 3 1.2 4.3L6 18z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" stroke-width="1.6"/><circle cx="8" cy="8.5" r="1" fill="currentColor"/><path d="M8 11v6M8 11v0M13 17v-3.5c0-1.2.8-2 2-2s2 .8 2 2V17M13 17v-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  znyk: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  default: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 15l6-6M8.5 9.5L7 8a3.5 3.5 0 1 1 5-5l1.5 1.5M15.5 14.5L17 16a3.5 3.5 0 1 1-5 5l-1.5-1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};

function pickIcon(slug){
  const key = slug.toLowerCase();
  const match = Object.keys(ICONS).find(k => k !== "default" && key.includes(k));
  return ICONS[match || "default"];
}

function humanize(slug){
  return slug
    .replace(/^\d+[-_]/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

/* ---------- busca a lista de cards direto no GitHub ---------- */

async function fetchLinkSlugs(){
  const url = `https://api.github.com/repos/${CONFIG.owner}/${CONFIG.repo}/contents/links?ref=${CONFIG.branch}`;
  const res = await fetch(url);
  if(!res.ok) throw new Error("Não consegui listar a pasta links/ no GitHub.");
  const data = await res.json();
  return data
    .filter(f => f.type === "file" && f.name.toLowerCase().endsWith(".html"))
    .map(f => f.name.replace(/\.html$/i, ""))
    .sort();
}

/* aceita tanto o formato simples (3 linhas) quanto o formato completo
   com "chave: valor" + "---" + texto */
function parseCardText(raw, slug){
  const lines = raw.split(/\r?\n/);
  const keyLine = /^([a-zA-ZÀ-ÿ]+)\s*:\s*(.*)$/;
  const meta = {};
  let i = 0;

  while(i < lines.length){
    const line = lines[i];
    if(line.trim() === "---"){ i++; break; }
    const m = line.match(keyLine);
    if(m){ meta[m[1].trim().toLowerCase()] = m[2].trim(); i++; }
    else break;
  }

  if(Object.keys(meta).length > 0){
    return {
      title: meta.titulo || meta["título"] || humanize(slug),
      sub: meta.resumo || meta.subtitulo || meta["subtítulo"] || "",
      color: meta.cor || meta.color || "",
      image: meta.imagem || meta.foto || "",
      sound: meta.som || meta.audio || meta["áudio"] || "",
      desc: lines.slice(i).join("\n").trim() || meta.resumo || ""
    };
  }

  const title = (lines[0] || "").trim() || humanize(slug);
  const sub = (lines[1] || "").trim();
  const desc = lines.slice(2).join("\n").trim() || sub;
  return { title, sub, desc, color: "", image: "", sound: "" };
}

async function fetchCardText(slug){
  try{
    const res = await fetch(`textos/${slug}.txt`, { cache: "no-store" });
    if(!res.ok) throw new Error("sem texto");
    const raw = await res.text();
    return parseCardText(raw, slug);
  }catch(e){
    return { title: humanize(slug), sub: "", desc: "", color: "", image: "", sound: "" };
  }
}

/* ---------- tilt 3D fluido (cards e avatar) ---------- */

function attachTilt(el, { max = 10, scale = 1.02, shine } = {}){
  let raf = null;

  function onMove(e){
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * max * 2;
    const ry = (px - 0.5) * max * 2;

    if(raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      el.classList.add("is-tilting");
      el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
      if(shine){
        shine.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.16), transparent 60%)`;
      }
    });
  }

  function onLeave(){
    el.classList.remove("is-tilting");
    el.style.transform = "";
    if(shine) shine.style.background = "transparent";
  }

  el.addEventListener("pointermove", onMove);
  el.addEventListener("pointerleave", onLeave);
}

/* ---------- monta a página ---------- */

const cardsEl = document.getElementById("cards");
const overlay = document.getElementById("overlay");
const panel = document.getElementById("panel");
const panelClose = document.getElementById("panelClose");
const panelTitle = document.getElementById("panelTitle");
const panelText = document.getElementById("panelText");
const panelVisit = document.getElementById("panelVisit");
const panelIcon = document.getElementById("panelIcon");
const panelImage = document.getElementById("panelImage");
const panelSound = document.getElementById("panelSound");
const panelSoundPlay = document.getElementById("panelSoundPlay");
const panelSoundPause = document.getElementById("panelSoundPause");

let currentAudio = null;

function renderCard(card){
  const btn = document.createElement("button");
  btn.className = "card";
  if(card.color) btn.style.setProperty("--card-color", card.color);

  const iconContent = card.image
    ? `<img src="${card.image}" alt="">`
    : card.icon;

  btn.innerHTML = `
    <span class="card-icon">${iconContent}</span>
    <span class="card-body">
      <p class="card-title">
        ${card.title}
        ${card.sound ? `<span class="card-sound-tag"><svg viewBox="0 0 24 24" fill="none"><path d="M5 9v6h4l5 4V5L9 9H5z" fill="currentColor"/></svg></span>` : ""}
      </p>
      <p class="card-sub">${card.sub}</p>
    </span>
    <svg class="card-arrow" width="18" height="18" viewBox="0 0 16 16" fill="none">
      <path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="card-shine"></span>
  `;

  btn.addEventListener("click", () => openCard(card));
  cardsEl.appendChild(btn);

  attachTilt(btn, { max: 9, scale: 1.015, shine: btn.querySelector(".card-shine") });
}

function renderMessage(text){
  cardsEl.innerHTML = `<p class="cards-message">${text}</p>`;
}

async function buildCards(){
  renderMessage("Carregando links...");

  if(CONFIG.repo === "SEU-REPOSITORIO"){
    renderMessage("Falta configurar o repositório no topo do script.js (CONFIG.repo).");
    return;
  }

  let slugs;
  try{
    slugs = await fetchLinkSlugs();
  }catch(e){
    renderMessage("Não consegui carregar os links agora. Tenta recarregar a página em alguns segundos.");
    return;
  }

  if(slugs.length === 0){
    renderMessage("Nenhum link encontrado na pasta links/ ainda.");
    return;
  }

  cardsEl.innerHTML = "";

  for(const slug of slugs){
    const text = await fetchCardText(slug);
    renderCard({
      slug,
      title: text.title,
      sub: text.sub,
      desc: text.desc,
      color: text.color,
      image: text.image,
      sound: text.sound,
      icon: pickIcon(slug)
    });
  }
}

function stopCurrentAudio(){
  if(currentAudio){
    currentAudio.pause();
    currentAudio = null;
  }
  panelSoundPlay.hidden = false;
  panelSoundPause.hidden = true;
}

function openCard(card){
  stopCurrentAudio();

  panel.style.setProperty("--card-color", card.color || "var(--lime)");
  panelTitle.textContent = card.title;
  panelVisit.href = `links/${card.slug}.html`;
  panelText.textContent = card.desc || card.sub || "";

  if(card.image){
    panelIcon.innerHTML = "";
    panelImage.src = card.image;
    panelImage.hidden = false;
  }else{
    panelImage.hidden = true;
    panelIcon.innerHTML = card.icon;
  }

  if(card.sound){
    panelSound.hidden = false;
    panelSound.onclick = () => {
      if(currentAudio && !currentAudio.paused){
        stopCurrentAudio();
        return;
      }
      currentAudio = new Audio(card.sound);
      currentAudio.play().catch(() => {});
      currentAudio.addEventListener("ended", stopCurrentAudio);
      panelSoundPlay.hidden = true;
      panelSoundPause.hidden = false;
    };
  }else{
    panelSound.hidden = true;
    panelSound.onclick = null;
  }

  overlay.classList.add("active");
}

function closePanel(){
  overlay.classList.remove("active");
  stopCurrentAudio();
}

panelClose.addEventListener("click", closePanel);
overlay.addEventListener("click", (e) => { if(e.target === overlay) closePanel(); });
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closePanel(); });

/* glow que segue o mouse */
const glow = document.getElementById("glow");
window.addEventListener("pointermove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* tilt 3D do avatar + efeito "fica maior e quadrado" no hover */
const avatarEl = document.getElementById("avatar");
attachTilt(avatarEl, {
  max: 14,
  scale: 1.16,
  shine: document.querySelector(".avatar-shine")
});
avatarEl.addEventListener("pointerenter", () => avatarEl.classList.add("avatar-hover"));
avatarEl.addEventListener("pointerleave", () => avatarEl.classList.remove("avatar-hover"));

/* ---------- cursor com glitch verde ---------- */
const cursorGlitch = document.getElementById("cursorGlitch");
if(cursorGlitch && window.matchMedia("(pointer: fine)").matches){
  window.addEventListener("pointermove", (e) => {
    cursorGlitch.style.left = e.clientX + "px";
    cursorGlitch.style.top = e.clientY + "px";
    cursorGlitch.classList.add("is-active");
  }, { passive: true });
  document.addEventListener("pointerleave", () => cursorGlitch.classList.remove("is-active"));
}

/* ------------------------------------------------------------------
   fundo em vídeo + hotbar de mídia
   Coloque (opcional):
     assets/background.mp4  -> vídeo de fundo
     assets/music.mp3       -> música de fundo
   Se nenhum dos dois existir, a hotbar fica escondida e o fundo
   continua sendo o gradiente padrão. Se os dois existirem, tocam e
   pausam sempre juntos (sincronizados).
-------------------------------------------------------------------- */

async function fileExists(path){
  try{
    const res = await fetch(path, { method: "HEAD", cache: "no-store" });
    return res.ok;
  }catch(e){
    return false;
  }
}

function buildWaveform(el, bars = 46){
  el.innerHTML = "";
  for(let i = 0; i < bars; i++){
    const bar = document.createElement("span");
    const h = 25 + Math.round(Math.sin(i * 0.7) * 20 + Math.random() * 35);
    bar.style.height = `${Math.max(15, Math.min(100, h))}%`;
    bar.style.animationDelay = `${(i % 12) * -0.09}s`;
    el.appendChild(bar);
  }
}

async function setupMedia(){
  const bgWrap = document.getElementById("bgVideoWrap");
  const bgVideo = document.getElementById("bgVideo");
  const bgAudio = document.getElementById("bgAudio");
  const hotbar = document.getElementById("hotbar");
  const hotbarWave = document.getElementById("hotbarWave");
  const hotbarSeek = document.getElementById("hotbarSeek");
  const hotbarPlay = document.getElementById("hotbarPlay");
  const iconPlay = document.getElementById("hotbarIconPlay");
  const iconPause = document.getElementById("hotbarIconPause");
  const hotbarRepeat = document.getElementById("hotbarRepeat");
  const hotbarPrev = document.getElementById("hotbarPrev");
  const hotbarNext = document.getElementById("hotbarNext");
  const hotbarShuffle = document.getElementById("hotbarShuffle");

  const hasVideo = await fileExists("assets/background.mp4");
  const hasAudio = await fileExists("assets/music.mp3");

  if(!hasVideo && !hasAudio) return; // nada configurado, mantém tudo escondido

  // referência principal do "tempo" da hotbar: música se existir, senão o vídeo
  const master = hasAudio ? bgAudio : bgVideo;

  if(hasVideo){
    bgVideo.src = "assets/background.mp4";
    bgVideo.muted = true; // o som sempre vem da música/áudio, o vídeo é só visual
    bgWrap.hidden = false;
  }
  if(hasAudio){
    bgAudio.src = "assets/music.mp3";
  }

  buildWaveform(hotbarWave);
  hotbar.hidden = false;

  let seeking = false;

  function updateSeek(){
    if(seeking || !master.duration) return;
    hotbarSeek.value = (master.currentTime / master.duration) * 100;
  }

  function setPlayingUI(isPlaying){
    iconPlay.hidden = isPlaying;
    iconPause.hidden = !isPlaying;
    hotbar.classList.toggle("is-playing", isPlaying);
    document.body.classList.toggle("video-playing", hasVideo && isPlaying);
  }

  // vídeo e música tocam/pausam sempre juntos
  function playBoth(){
    if(hasAudio) bgAudio.play().catch(() => {});
    if(hasVideo) bgVideo.play().catch(() => {});
  }
  function pauseBoth(){
    if(hasAudio) bgAudio.pause();
    if(hasVideo) bgVideo.pause();
  }

  master.addEventListener("timeupdate", updateSeek);
  master.addEventListener("play", () => setPlayingUI(true));
  master.addEventListener("pause", () => setPlayingUI(false));

  hotbarPlay.addEventListener("click", () => {
    if(master.paused) playBoth();
    else pauseBoth();
  });

  hotbarSeek.addEventListener("input", () => { seeking = true; });
  hotbarSeek.addEventListener("change", () => {
    const ratio = hotbarSeek.value / 100;
    if(hasAudio && bgAudio.duration) bgAudio.currentTime = ratio * bgAudio.duration;
    if(hasVideo && bgVideo.duration) bgVideo.currentTime = ratio * bgVideo.duration;
    seeking = false;
  });

  hotbarPrev.addEventListener("click", () => {
    if(hasAudio) bgAudio.currentTime = Math.max(0, bgAudio.currentTime - 10);
    if(hasVideo) bgVideo.currentTime = Math.max(0, bgVideo.currentTime - 10);
  });

  hotbarNext.addEventListener("click", () => {
    if(hasAudio) bgAudio.currentTime = Math.min(bgAudio.duration || 0, bgAudio.currentTime + 10);
    if(hasVideo) bgVideo.currentTime = Math.min(bgVideo.duration || 0, bgVideo.currentTime + 10);
  });

  hotbarShuffle.addEventListener("click", () => {
    if(hasAudio) bgAudio.currentTime = 0;
    if(hasVideo) bgVideo.currentTime = 0;
  });

  hotbarRepeat.addEventListener("click", () => {
    bgAudio.loop = !bgAudio.loop;
    bgVideo.loop = !bgVideo.loop;
    hotbarRepeat.setAttribute("aria-pressed", String(bgAudio.loop));
  });

  bgAudio.volume = 0.6;
  bgVideo.volume = 0;

  // tenta já começar tocando os dois juntos assim que entra no site.
  // navegadores bloqueiam áudio com som sem interação do usuário — nesse
  // caso o vídeo já começa (mudo) e a música entra automaticamente assim
  // que a pessoa interagir pela primeira vez com a página.
  playBoth();

  const tryUnlock = () => {
    if(hasAudio && bgAudio.paused){
      bgAudio.play().catch(() => {});
    }
    document.removeEventListener("pointerdown", tryUnlock);
    document.removeEventListener("keydown", tryUnlock);
    document.removeEventListener("touchstart", tryUnlock);
  };
  document.addEventListener("pointerdown", tryUnlock, { once: true });
  document.addEventListener("keydown", tryUnlock, { once: true });
  document.addEventListener("touchstart", tryUnlock, { once: true });
}

buildCards();
setupMedia();
