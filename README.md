# Portfolio John Doe (React + Bootstrap)

**Live demo** : https://dev-lea.github.io/john-doe-portfolio/

Portfolio réalisé en React (Create React App) pour présenter le profil de John Doe.  
Le site respecte les maquettes Desktop / Tablette / Mobile et les consignes CEF (SEO, accessibilité, responsive, GitHub).

---

## Fonctionnalités
-  Home : Hero pleine page (H1/H2 centrés) + **modale GitHub** (fetch 1x via `useEffect`)
-  Compétences : progress bars Bootstrap
-  Services : 3 cards, **hover** = fond `#efefef` + ombre
-  Portfolio : 6 cards, **bouton qui s’éclaircit** au survol
-  Contact : 5 champs obligatoires (nom, email, téléphone, sujet, message) + Google Map
-  Mentions légales : Accordion + **noindex** (+ `robots.txt`)
-  Header/Footer sur toutes les pages, liens actifs & hover, liens externes `target="_blank" rel="noreferrer nofollow"`

---

## Stack
- React (Create React App)
- React Router
- Bootstrap 5 + React-Bootstrap
- SASS (SCSS)

---

## Prérequis
- Node.js ≥ 18
- Git

---

## Démarrer en local
```bash
git clone https://github.com/dev-lea/john-doe-portfolio.git
cd john-doe-portfolio
npm install
npm start

