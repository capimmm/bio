# site bio

## estrutura

```
index.html      -> página principal (os cards)
style.css       -> visual (fundo preto, acento lima #a6e22e, glass)
script.js       -> monta os cards e conecta com links/ e textos/
links/          -> uma página por card, cada uma redireciona pra uma URL
textos/         -> um .txt por card, com o texto que aparece ao abrir
```

Cada card no site tem um "slug" (ex: `github`, `discord`, `znyk`).
Esse slug liga três coisas:

1. o objeto dentro de `CARDS` em `script.js`
2. o arquivo `links/<slug>.html` (pra onde o botão "Visitar" manda)
3. o arquivo `textos/<slug>.txt` (o texto que aparece no card aberto)

## como funciona o clique

Ao clicar num card, o site abre um painel, faz um `fetch("textos/<slug>.txt")`
pra pegar o texto e mostra ele ali. O botão "Visitar" do painel aponta pra
`links/<slug>.html`, que é uma página simples que só redireciona pro link de
verdade (assim você troca a URL final sem mexer no site principal).

## como adicionar um card novo

1. copie `links/exemplo.html` para `links/seuslug.html` e troque a URL no
   `meta http-equiv="refresh"` e no `window.location.replace(...)`
2. copie `textos/exemplo.txt` para `textos/seuslug.txt` e escreva o texto
3. abra `script.js` e adicione um objeto na lista `CARDS`, por exemplo:

```js
{
  slug: "youtube",
  title: "YouTube",
  sub: "vídeos e devlogs",
  icon: `<svg viewBox="0 0 24 24" fill="none">...</svg>`
}
```

o `icon` é um SVG simples (pode copiar o padrão de algum card já existente
e trocar o desenho — evite usar o logo oficial das marcas pra não ter
problema de direito de imagem, um ícone genérico já resolve).

## como publicar no GitHub Pages

1. crie um repositório (ex: `capimmm/bio`) ou use um já existente
2. suba essa pasta inteira pra raiz do repositório
3. no repositório: Settings → Pages → Source → escolha a branch (`main`) e
   a pasta `/ (root)`
4. o site fica disponível em `https://capimmm.github.io/bio/`
   (se você usar o repositório `capimmm.github.io` direto, fica em
   `https://capimmm.github.io/`)

## trocar a foto de perfil

Coloque uma imagem chamada `avatar.png` na raiz do projeto (mesmo nível do
`index.html`). Se o arquivo não existir, o círculo do avatar fica só com o
gradiente, sem quebrar nada.
