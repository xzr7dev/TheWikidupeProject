<div align="center">

# 📦 The WikiDupe Project

> **The community-driven Minecraft Dupe & Exploit Archive.**

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

Um arquivo comunitário, aberto e transparente focado em documentar a história, a mecânica e os status das principais falhas e exploits do Minecraft.

[🌐 Acessar o Site](https://seu-projeto.vercel.app) • [🎮 Discord do Servidor](https://discord.gg/seu-link)

</div>

---

## 🎯 Sobre o Projeto

O **The WikiDupe Project** tem como objetivo registrar a engenharia por trás dos bugs que marcaram a história do jogo. Cada dupe possui sua própria documentação individual em JSON, contendo versões afetadas, método de execução, status de patch e links educativos.

---

## 🕹️ Servidor de Anarquia Oficial

Quer testar mecânicas de Crystal PvP, dupes liberados e jogar sem frescura? Conecte no nosso servidor:

* **IP:** `anarchy.seuservidor.com`
* **Versão:** $1.21.11$

---

## 🤝 Como Contribuir (Enviar um Dupe Novo)

O projeto é **100% open source** e mantido pela comunidade! Para adicionar um dupe histórico ou uma mecânica nova:

1. Faça um **Fork** deste repositório.
2. Crie um arquivo `.json` dentro da pasta `/database` (exemplo: `donkey-portal-1-12.json`).
3. Adicione o nome do seu arquivo na lista dentro de `/database/index.json`.
4. Se for adicionar imagens, envie para a pasta `/image` respeitando o limite de **50 MB** por arquivo.
5. Abra um **Pull Request** explicando brevemente a adição!

---

### 📄 Estrutura de um arquivo `.json`

```json
{
  "id": "anvil-1-17",
  "title": "Anvil Inventory Glitch",
  "version": "1.17 - 1.17.1",
  "type": "GUI / Drop",
  "working_on_anarchy": false,
  "description": "Explicação breve de como o exploit funcionava.",
  "video_url": "[https://youtube.com/watch?v=](https://youtube.com/watch?v=)...",
  "image_url": "image/sua-imagem.png"
}