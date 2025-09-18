# Your Tribe for Life Squadpage

Ontwerp en ontwikkel met een team een overzicht van jouw tribe met alle online visitekaartjes, op basis van een headless CMS en een framework.

# SCRAPBOOK SQUADPAGE 
<img width="561" height="518" alt="Screenshot 2025-09-18 at 21 14 22" src="https://github.com/user-attachments/assets/e06d5f7a-7e3f-47d8-8d1e-34d5e8248d0f" />


# Ontwerpkeuzes
Dit project is opgezet in een speelse scrapbooking-stijl. Alle afbeeldingen en SVG’s zijn volledig door ons zelf ontworpen en geïllustreerd.We hebben deze illustraties vervolgens omgezet in buttons. Op die manier krijgt de applicatie een persoonlijke en creatieve UI uitstraling. Het doel van het maken van deze website is om een overzicht te bouwen om het vinden van studenten van jaar 2 te vergemakkelijken.

<img width="707" height="572" alt="Screenshot 2025-09-18 at 21 28 28" src="https://github.com/user-attachments/assets/61b63267-6dd0-41c2-98a1-d0ed14d8a32a" />


# Functionaliteit


## Scroll animation 

De scroll animaite is gemaakt aan de hand van GSAP en met behulp van keyframes

https://github.com/user-attachments/assets/ad099365-81b2-4b6f-aa72-6cadd871c238

https://github.com/Karima002/your-tribe-for-life-squad-page-s13/blob/ccc9983cfc464db5c9fa832bd28a7d9fc7c52c6d/squadpage/src/routes/%2Bpage.svelte#L85-L90

## Navigatie 

Door de juiste data uit de API op te halen kan de student makkelijk op de gewenste klas druken om de klasgenoten met gemak te kunnen vinden.


https://github.com/user-attachments/assets/501a373b-7343-4e49-964c-e41cf3155985

https://github.com/Karima002/your-tribe-for-life-squad-page-s13/blob/521a54387c5113351faefe7abe1a7066e678e395/squadpage/src/routes/squad2f/%2Bpage.server.js#L1-L9

# Framework

Voor het bouwen van deze website hebben wij SvelteKit als framework uitgekozen. Hieronder zie je hoe je het kan installeren.

# Installatie

 Als je zelf verder wilt werken aan dit project kan je het volgende doen:

- Clone de repo
- Npm install
- local host op npm run dev

Om SvelteKit te installeren kan je de onderstaande stappen volgen.

## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

### Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
