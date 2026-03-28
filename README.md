# Sky Hopper

Clone do jogo **Sky Hopper** (skyhopgame.com), pronto para hospedar no **GitHub Pages** sem precisar instalar nada.

## Como hospedar no GitHub Pages

1. Crie um repositório no GitHub (pode ser público ou privado).
2. Faça upload de todos os arquivos desta pasta para o repositório.
3. Nas configurações do repositório, vá em **Settings → Pages**.
4. Em **Source**, selecione o branch `main` (ou `master`) e a pasta `/ (root)`.
5. Clique em **Save**. O jogo ficará disponível em `https://SEU_USUARIO.github.io/NOME_DO_REPO/`.

## Como jogar

- **Clique / toque** na tela para fazer o pássaro voar.
- Passe pelos canos sem bater para aumentar sua pontuação.
- Escolha seu personagem no menu inicial.
- Digite um nickname para aparecer no leaderboard local.

## Modo secreto

- **Toque simples** no botão ⚙ Settings → abre as configurações normais (som, LQ mode).
- **Duplo toque rápido** no botão ⚙ Settings → abre o **menu secreto** com os modos especiais:
  - **Forcing** — força uma pontuação e tempo específicos.
  - **Multiple force** — várias rodadas com pontuações diferentes.
  - **Leaderboard force** — simula uma posição específica no leaderboard.

## Estrutura de arquivos

```
index.html          — Página principal do jogo
css/style.css       — Estilos visuais
js/game.js          — Lógica do jogo
images/             — Sprites, backgrounds e ícones
sounds/             — Sons especiais
sfx-*.wav           — Efeitos sonoros
music-*.wav         — Músicas de fundo
site.webmanifest    — Configuração PWA (instalável no celular)
favicon.ico         — Ícone do site
```

## Notas

- O jogo funciona 100% offline após o carregamento (exceto leaderboard online e API mode).
- Compatível com desktop e mobile.
- Pode ser instalado como PWA (Progressive Web App) no celular.
