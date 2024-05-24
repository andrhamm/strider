# strider (working title)

## Overview

An unofficial \[WIP\] companion desktop app for playing the tabletop RPG [The One Ring 2e](https://freeleaguepublishing.com/shop/the-one-ring/) built on Electron.

The app will require the user to have purchased authentic digital copies of The One Ring materials (included for free when purchasing the physical materials from the official Free League store).

I am not affiliated with Free League and will not be profiting from this software. The software will not be distributed and will require the user to build the app from the source code provided here.

### Development Roadmap:

- **Alpha** (in progress)
  - Character creation tool
  - PDF viewer pane with copious quick links for all keywords
  - Smart dice rolls with [dddice](https://dddice.com/product/HSX-0001) integration for sweet 3D graphics and sound
  - Chat-bot and/or command-line style UX
  - Campaign map
  - Strider mode gameplay with smart telling & lore tables
  - Prototype for local AI Loremaster assistant
  - Logging of all actions and events with "undo" & "redo" support
- **Beta and beyond...**
  - GenAI player hero avatars
  - Save and load multiple player heroes and campaigns
  - Deeper PDF integration (generate filled character sheets from the official files)
  - Add support for more gameplay features (combat, experience, heirs, etc)
  - Cloud sync, realtime multiplayer, streamer mode
  - Support for expansion source material (Tales from the Lone Lands, Ruins of the Lost Realm, Moria!)

### Technical Stuff

- Electron, React, Typescript, Nodejs, Tailwind
- [lowdb](https://github.com/typicode/lowdb) for data persistence during prototyping phase
  - all data persistence will flow through the main process over IPC to allow for a later migration to a storage mechanism backed by OS/filesystem

## Development

An Electron application with React and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ yarn
```

### Development

```bash
$ yarn dev
```

### Build

```bash
# For windows
$ yarn build:win

# For macOS
$ yarn build:mac

# For Linux
$ yarn build:linux
```
