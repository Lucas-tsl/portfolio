# Portfolio

Portfolio personnel moderne développé avec Next.js 15, React 19, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- **Page d'accueil** : Présentation avec navigation vers les sections principales
- **Section Projets** : Récupération dynamique des dépôts GitHub via l'API GitHub
- **Page CV** : CV avec bouton de téléchargement
- **Mode sombre** : Support natif du mode sombre avec Tailwind CSS
- **Server Actions** : Gestion des données côté serveur pour les performances optimales
- **Optimisé pour Vercel** : Configuration prête pour le déploiement

## 🛠️ Technologies

- **Framework** : Next.js 15 (App Router)
- **UI** : React 19
- **Langage** : TypeScript
- **Styling** : Tailwind CSS v4
- **Déploiement** : Vercel

## 📦 Installation et Développement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Lancer la version production
npm start

# Linter le code
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Structure du projet

```
portfolio/
├── app/
│   ├── actions/          # Server Actions
│   │   ├── github.ts     # Récupération des repos GitHub
│   │   └── cv.ts         # Action de téléchargement CV
│   ├── cv/               # Page CV
│   │   ├── page.tsx
│   │   └── download-button.tsx
│   ├── projets/          # Page Projets
│   │   └── page.tsx
│   ├── layout.tsx        # Layout principal
│   ├── page.tsx          # Page d'accueil
│   └── globals.css       # Styles globaux
├── public/               # Fichiers statiques
│   └── cv.txt           # CV téléchargeable
├── next.config.ts       # Configuration Next.js
└── vercel.json          # Configuration Vercel
```

## 🎨 Fonctionnalités techniques

### Server Components
Toutes les pages principales utilisent les Server Components de Next.js pour des performances optimales.

### Server Actions
- `getGitHubRepos()` : Récupère les dépôts GitHub de l'utilisateur
- `downloadCV()` : Gère le téléchargement du CV

### Mode sombre
Le mode sombre est configuré nativement avec Tailwind CSS et s'adapte automatiquement aux préférences système de l'utilisateur.

### API GitHub
Les projets sont récupérés dynamiquement depuis l'API GitHub avec mise en cache (revalidation toutes les heures).

## 🚢 Déploiement sur Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Connectez votre dépôt GitHub à Vercel
2. Vercel détectera automatiquement Next.js grâce au fichier `vercel.json`
3. Le déploiement se fera automatiquement à chaque push

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 Personnalisation

Pour personnaliser le portfolio :

1. **Modifier le nom d'utilisateur GitHub** : Changez `Lucas-tsl` dans `/app/actions/github.ts`
2. **Ajouter votre CV** : Remplacez `/public/cv.txt` par votre CV (PDF recommandé)
3. **Personnaliser le contenu** : Modifiez les fichiers dans `/app` selon vos besoins

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind CSS v4](https://tailwindcss.com/docs) - utility-first CSS framework.
