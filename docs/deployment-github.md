# 🚀 Guide de déploiement sur GitHub

Ce guide vous explique comment publier votre site TRC - Team ROBOSTIM sur GitHub Pages pour le rendre accessible au public.

## 📋 Prérequis

### Outils nécessaires
- **Git** installé sur votre machine
- **Node.js** (version 16 ou supérieure)
- **npm** ou **yarn**
- **Compte GitHub** actif

### Vérification des outils
```bash
# Vérifier Git
git --version

# Vérifier Node.js
node --version

# Vérifier npm
npm --version
```

## 🔧 Configuration initiale

### 1. Initialiser le repository Git
```bash
# Dans le dossier de votre projet
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit: Site TRC - Team ROBOSTIM"
```

### 2. Configuration de Docusaurus pour GitHub Pages
Modifiez le fichier `docusaurus.config.js` :

```javascript
// docusaurus.config.js
const config = {
  // ... autres configurations
  url: 'https://votre-username.github.io',
  baseUrl: '/TRC_Robostim/',
  organizationName: 'votre-username',
  projectName: 'TRC_Robostim',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  
  // Configuration pour GitHub Pages
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  
  // ... reste de la configuration
};
```

### 3. Installation des dépendances de déploiement
```bash
# Installer le plugin GitHub Pages
npm install --save-dev @docusaurus/plugin-ideal-image

# Ou avec yarn
yarn add --dev @docusaurus/plugin-ideal-image
```

## 📁 Structure du repository

### Organisation des fichiers
```
TRC_Robostim/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   ├── galerie-guide.md
│   └── deployment-github.md
├── src/
│   ├── pages/
│   ├── components/
│   └── css/
├── static/
│   ├── img/
│   │   ├── team/
│   │   └── gallery/
│   └── favicon.ico
├── docusaurus.config.js
├── package.json
├── .gitignore
└── README.md
```

## 🔄 Workflow de déploiement automatique

### 1. Créer le fichier de workflow GitHub Actions
Créez le fichier `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build site
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

### 2. Configuration des permissions GitHub
1. Allez dans **Settings** de votre repository
2. Cliquez sur **Pages** dans le menu de gauche
3. Sélectionnez **GitHub Actions** comme source
4. Sauvegardez les paramètres

## 🚀 Déploiement manuel

### Méthode 1 : Via GitHub Actions (Recommandée)
```bash
# Ajouter le repository distant
git remote add origin https://github.com/votre-username/TRC_Robostim.git

# Pousser le code
git push -u origin main

# Le déploiement se fait automatiquement via GitHub Actions
```

### Méthode 2 : Déploiement local
```bash
# Construire le site
npm run build

# Installer gh-pages
npm install --save-dev gh-pages

# Ajouter le script dans package.json
"scripts": {
  "deploy": "gh-pages -d build"
}

# Déployer
npm run deploy
```

## ⚙️ Configuration avancée

### 1. Variables d'environnement
Créez un fichier `.env` pour les variables sensibles :
```env
# .env
GITHUB_TOKEN=votre_token_github
REPOSITORY_URL=https://github.com/votre-username/TRC_Robostim
```

### 2. Configuration du domaine personnalisé
Si vous avez un domaine personnalisé :

1. Créez un fichier `CNAME` dans le dossier `static/` :
```
votre-domaine.com
```

2. Ajoutez la configuration dans `docusaurus.config.js` :
```javascript
const config = {
  // ... autres configurations
  customFields: {
    customDomain: 'votre-domaine.com'
  }
};
```

### 3. Optimisation des performances
```javascript
// docusaurus.config.js
const config = {
  // ... autres configurations
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],
};
```

## 🔍 Vérification du déploiement

### 1. Vérifier le build local
```bash
# Construire le site
npm run build

# Servir localement
npm run serve

# Vérifier sur http://localhost:3000
```

### 2. Vérifier le déploiement GitHub
1. Allez sur votre repository GitHub
2. Cliquez sur l'onglet **Actions**
3. Vérifiez que le workflow s'exécute sans erreur
4. Visitez votre site sur `https://votre-username.github.io/TRC_Robostim/`

## 🛠️ Dépannage

### Problèmes courants

#### 1. Erreur de build
```bash
# Nettoyer le cache
npm run clear
rm -rf node_modules
npm install

# Reconstruire
npm run build
```

#### 2. Images ne s'affichent pas
- Vérifiez les chemins dans `static/img/`
- Assurez-vous que les images sont dans le bon dossier
- Vérifiez les permissions des fichiers

#### 3. Erreur de déploiement GitHub Actions
- Vérifiez les permissions du repository
- Assurez-vous que le token GitHub est configuré
- Vérifiez les logs dans l'onglet Actions

### Logs utiles
```bash
# Vérifier les logs de build
npm run build --verbose

# Vérifier les logs de déploiement
git log --oneline
```

## 📊 Monitoring et analytics

### 1. Google Analytics
Ajoutez dans `docusaurus.config.js` :
```javascript
const config = {
  // ... autres configurations
  plugins: [
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'GA_TRACKING_ID',
        anonymizeIP: true,
      },
    ],
  ],
};
```

### 2. Google Search Console
1. Ajoutez votre site à Google Search Console
2. Vérifiez la propriété avec un fichier HTML
3. Soumettez votre sitemap

## 🔒 Sécurité

### 1. Secrets et tokens
- Ne jamais commiter les tokens dans le code
- Utiliser les GitHub Secrets pour les variables sensibles
- Configurer les permissions appropriées

### 2. Branches protégées
1. Allez dans **Settings** > **Branches**
2. Ajoutez une règle pour la branche `main`
3. Activez "Require pull request reviews"

## 📈 Optimisation continue

### 1. Performance
- Optimisez les images (WebP, compression)
- Utilisez le lazy loading
- Minimisez les CSS et JS

### 2. SEO
- Ajoutez des meta descriptions
- Optimisez les titres de pages
- Utilisez des URLs propres

### 3. Accessibilité
- Testez avec des lecteurs d'écran
- Vérifiez les contrastes de couleurs
- Ajoutez des alt texts aux images

## 🎯 Prochaines étapes

1. **Testez localement** : `npm run build && npm run serve`
2. **Configurez GitHub** : Créez le repository et configurez les permissions
3. **Déployez** : Poussez votre code et vérifiez le déploiement
4. **Optimisez** : Ajoutez analytics et optimisez les performances
5. **Partagez** : Votre site sera accessible publiquement !

---
*Guide mis à jour : Octobre 2025*
