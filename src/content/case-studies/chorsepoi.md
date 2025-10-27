---
slug: chorsepoi
title: Building Chorsepoi - The Digital Edition of Scotland Yard
category: Case Study
description: Designing and developing Chorsepoi, an Indian digital adaptation of the classic Scotland Yard board game, to modernize gameplay, remove friction, and make strategy gaming more accessible and fast-paced.
image: /Hero_Images/chorsepoi_cover.png
rank: 3
timeline: 4 months
tools:
  - Cursor
  - Vite React
  - Next.js
  - Pixi.js
  - Figma
role: Designer & Full-Stack Developer
websiteUrl: https://chorsepoi.vercel.app
tags:
  - game-design
  - ui-development
  - real-time-systems
  - product-design
  - prototyping
---

## The Story Behind Chorsepoi

It all started when I bought the **Scotland Yard** board game as a gift for some children. We instantly loved it: a thrilling chase, lots of teamwork, and hours of fun.  
But after several rounds, a few frustrations began to surface:

- Managing **too many tickets** cluttered the game
- **Writing positions** on paper created room for mistakes or cheating
- My **2-year-old daughter** loved to “join the game” by knocking over the board
- And when I introduced it at our **Friday office game sessions**, each round took **2+ hours**, with players deeply calculating probabilities and positions every turn

While the strategic nature was exciting, the gameplay was slow, error-prone, and physically fragile.

That's when I thought:

> "What if I could bring this experience online, faster, fairer, and made for everyone?"

Thus began the **[Chorsepoi Project](https://chorsepoi.vercel.app)**: a digital reimagining of Scotland Yard, built from the ground up with an **Indian map**, modern game logic, and real-time play.

## The Goal

To create a **digital version of Scotland Yard**, optimized for speed, accessibility, and scalability, while preserving the fun, unpredictability, and teamwork that make the original so engaging.

**Key Objectives:**

- Eliminate the manual friction of managing tickets and positions
- Automate logic to prevent cheating and calculation fatigue
- Build an MVP that focuses on **core gameplay mechanics** over polished visuals
- Test the feasibility of running a **real-time, multiplayer strategy game** in the browser

## Design & Development Process

### 1. Understanding the Gameplay Challenges

Before diving into code, I analyzed the original board game experience:

- Where do players lose time?
- Which parts can be automated without losing fun?
- How do I make a fair system for both Mr. X and detectives?

I mapped out pain points (manual updates, slow turns, probability tracking) and focused on digitizing those layers while keeping the gameplay spirit alive.

### 2. Setting Up the Foundation

Using **Cursor** , I began developing the core architecture:

- **Frontend:** Built using **Vite + React**, prioritizing speed and modular UI
- **Backend:** Powered by **Next.js**, enabling efficient API and real-time updates
- **Game Engine:** Chose **Pixi.js** for rendering the map and movements: lightweight, fast, and React-compatible

> Choosing Pixi.js allowed faster iteration for an MVP while keeping the door open for future Unity-based enhancements.

<div data-carousel="chorsepoi-screens"></div>

### 3. Designing the Game Logic

The biggest task was replicating the **strategic core** of Scotland Yard:

- Defining how Mr. X moves invisibly, with certain turns revealed
- Setting up **ticket-based transport logic** (bus, taxi, train, etc.)
- Mapping valid movement paths between stations
- Building a **real-time update system** for each player’s turn

Instead of focusing on fancy visuals, I focused on **making the mechanics feel right**: accurate turns, real probabilities, and authentic tension between players.

### 4. Building the Map

Finding an Indian version of the map was a challenge.  
After extensive research, I found an **open-source repository** with station coordinates. I used Python to clean and translate the data into usable coordinates and station metadata.

The **Pixi.js renderer** visualizes the board dynamically, allowing zoom, pan, and real-time player movement, creating an immersive digital playground.

<img src="/chorsepoi/gameboard_chor.png" alt="Gameboard View of Chor"/>

## The MVP

The first playable version of **Chorsepoi** focused on functionality:

- Real-time multiplayer turn system
- Automated ticket management
- Timeline view of Chor tickets
- Basic UI for gameplay testing

Though the visuals were minimal, the experience successfully captured the **strategic tension and cooperative thrill** of the original game.

## Challenges & Learnings

- **Balancing Complexity:** Translating physical board logic to digital rules required careful iteration
- **Real-Time Sync:** Keeping multiple player states in sync was a key technical challenge
- **Simplified UI:** Focused on mechanics first, but learned that good UX can speed up understanding in complex games
- **Playtesting Insights:** Office playtests showed faster rounds, less confusion, and greater excitement

> Chorsepoi taught me how deeply **game mechanics and UX design intertwine**: small design decisions dramatically change the flow and fun of play.

## Next Steps

With the MVP stable and playable, my next focus is:

- **Online multiplayer matchmaking**
- **Performance optimization** for mobile browsers
- **Game analytics** for tracking player decisions and movement patterns
- **Expanding New maps** with city-based versions (Hyderabad, Mumbai, Delhi, Bangalore)

---

## Reflection

Chorsepoi started as a personal curiosity and evolved into a full-fledged digital product experiment.  
It combines my passion for **designing experiences** with my curiosity for **system thinking and real-time logic**.

By digitizing Scotland Yard’s essence while solving its pain points, Chorsepoi became a lesson in **balancing nostalgia with innovation**.
