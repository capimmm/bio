# site bio

## estrutura

```
index.html      -> página principal
style.css       -> visual (fundo preto, acento lima, glass, efeitos 3D)
script.js       -> busca os cards direto no GitHub (você não mexe mais aqui)
links/          -> uma página HTML por card, cada uma redireciona pra uma URL
textos/         -> um .txt por card, com título/resumo/texto (+ cor/imagem/som)
imagens/        -> fotos usadas nos cards (opcional)
sons/           -> áudios usados nos cards (opcional)
assets/         -> vídeo/música de fundo do site inteiro (opcional)
```

## configuração inicial (só uma vez)

Abra `script.js` e edite só isto, no topo do arquivo:

```js
const CONFIG = {
  owner: "capimmm",
  repo: "SEU-REPOSITORIO",   // <- nome do repositório no GitHub
  branch: "main",
  musicTitle: "música de fundo"   // <- texto exibido na hotbar
};
```

Depois disso **você nunca mais precisa abrir o script.js**. Todo card novo
é feito só mexendo nas pastas `links/` e `textos/` (e `imagens/`/`sons/`
se quiser) direto pelo GitHub, sem precisar de git no computador.

## como adicionar um card novo

1. em `links/`, crie `seuslug.html` com o redirecionamento:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta http-equiv="refresh" content="0;url=https://SUA-URL-AQUI">
<title>Redirecionando...</title>
</head>
<body style="background:#000;color:#a6e22e;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
  <p>Redirecionando...</p>
  <script>window.location.replace("https://SUA-URL-AQUI");</script>
</body>
</html>
```

2. em `textos/`, crie `seuslug.txt` (mesmo nome, sem `.html`).

**Formato simples** (3 linhas, só texto):
```
Título do card
Resumo curto que aparece na lista
Texto completo que aparece quando o card é aberto.
```

**Formato completo** (com cor, imagem e som — todos opcionais):
```
titulo: Título do card
resumo: resumo curto que aparece na lista
cor: #9b6bff
imagem: imagens/seuslug.jpg
som: sons/seuslug.mp3
---
Texto completo que aparece quando o card é aberto. Pode ter mais de uma
linha e até parágrafos.
```

- `cor`: qualquer cor CSS (`#9b6bff`, `purple`, `rgb(...)`). Tinge o ícone,
  a borda no hover e o brilho do card. Se não usar, fica no lima padrão.
- `imagem`: caminho pra uma foto dentro de `imagens/`. Se usar, ela
  substitui o ícone no card e aparece grande no painel ao abrir.
- `som`: caminho pra um áudio dentro de `sons/`. Se usar, aparece um
  botão de tocar/pausar no painel do card (não toca sozinho).

3. pronto, recarregue o site e o card já aparece. Nada mais precisa mudar.

**Importante:** o nome do arquivo em `links/` e `textos/` tem que ser
exatamente igual (o "slug"), só muda a extensão.

## ícone automático

Se o nome do arquivo contiver `github`, `discord`, `instagram`, `youtube`,
`twitter`/`x`, `tiktok`, `spotify`, `twitch`, `telegram`, `whatsapp`,
`linkedin`, `email` ou `znyk`, o ícone correspondente é usado sozinho.
Qualquer outro nome usa um ícone genérico — a menos que você defina uma
`imagem` no texto do card, que sempre tem prioridade sobre o ícone.

## ordem dos cards

Alfabética pelo nome do arquivo. Pra controlar, prefixe com números:
`01-github.html` / `01-github.txt`, `02-discord.html` / `02-discord.txt`.
O prefixo some do título mostrado.

## efeitos 3D

Os cards e a foto de perfil já vêm com um efeito de inclinação 3D que
segue o mouse (tilt), com um brilho sutil e retorno suave/elástico ao
soltar. Isso é automático, não precisa configurar nada — só funciona
melhor em telas com mouse; no celular o tilt fica desativado e os cards
continuam com o hover normal.

Passar o mouse por cima da foto de perfil também faz ela crescer, ficar
mais "quadrada" (de círculo pra squircle) e ganhar uma borda brilhante —
tudo automático, sem configuração.

## cursor com glitch verde

Em telas com mouse, aparece um pequeno efeito de glitch verde seguindo o
cursor (três quadrados verdes que se deslocam de forma irregular). É só
decorativo, não substitui o cursor do sistema, e some sozinho em telas de
toque (celular/tablet).

## fundo em vídeo e música (opcional)

Se você colocar os arquivos abaixo na pasta `assets/`, o site ativa
sozinho:

- `assets/background.mp4` -> vira o fundo do site inteiro (com uma camada
  escura por cima pra manter os cards legíveis)
- `assets/music.mp3` -> música de fundo

Quando pelo menos um dos dois existe, aparece uma **hotbar** compacta no
canto inferior esquerdo, no estilo "tocando agora": ícone + nome da
faixa (defina em `CONFIG.musicTitle`), indicador de equalizer, botões de
voltar 10s / tocar-pausar / avançar 10s, barra de progresso com os
tempos, e um controle de volume fino embaixo.

**Vídeo e música são sincronizados**: o botão de play/pause central toca
ou pausa os dois ao mesmo tempo. O vídeo já entra tocando (mudo, é só
decoração) e o site tenta tocar a música automaticamente assim que a
página carrega; se o navegador bloquear esse autoplay com som (a maioria
bloqueia por padrão), a música entra sozinha assim que a pessoa interagir
pela primeira vez com a página — um clique ou toque em qualquer lugar já
resolve, sem precisar apertar o play manualmente. Isso é uma regra dos
próprios navegadores, não dá pra pular essa etapa.

Enquanto o vídeo está rolando, os cards ficam translúcidos pra deixar o
vídeo aparecer por trás.

Se nenhum dos dois arquivos existir, a hotbar fica escondida e o site usa
o fundo padrão em gradiente, sem quebrar nada.

## hotbar recolhe sozinha + QR code de apoio (Pix)

Se a pessoa passar 5 segundos sem interagir com a hotbar (sem clicar,
arrastar ou passar o mouse por cima), ela recolhe automaticamente pra um
botãozinho redondo mostrando só o equalizer se mexendo, e acima dele
aparece um cartão com QR code convidando pra um apoio via Pix.

O QR code (`assets/pix-qr.png`) já foi gerado a partir do seu link de
cobrança do Nubank e testado — ele decodifica exatamente para:
`https://nubank.com.br/cobrar/7c4vss/6a963c13-e747-413e-b583-7ae4cdad4886`

Se quiser trocar o link (ex: gerar um novo cobrança no app do Nubank),
é só gerar um novo QR code (qualquer gerador confiável) e substituir o
arquivo `assets/pix-qr.png`, mantendo o mesmo nome.

Clicar no botãozinho recolhido (ou passar o mouse/mexer em qualquer
controle) expande a hotbar de novo e reinicia o contador de 5 segundos.

## trocar a foto de perfil

Coloque uma imagem chamada `avatar.png` na raiz do projeto. Se não
existir, o círculo do avatar fica só com o gradiente e o anel giratório.

## como publicar no GitHub Pages

1. crie um repositório (ex: `capimmm/bio`) — o nome dele vai em
   `CONFIG.repo` no `script.js`
2. suba essa pasta inteira pra raiz do repositório
3. Settings → Pages → Source → branch `main`, pasta `/ (root)`
4. o site fica em `https://capimmm.github.io/bio/`
   (ou `https://capimmm.github.io/` se o repositório se chamar
   `capimmm.github.io`)

## observação sobre a API do GitHub

A listagem de cards usa a API pública do GitHub sem autenticação, limite
de 60 requisições por hora por visitante — de sobra pra um site pessoal.
