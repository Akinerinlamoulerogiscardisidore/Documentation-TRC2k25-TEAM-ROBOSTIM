# 🚀 Guide de Déploiement Automatique sur GitHub Pages

Ce guide vous explique comment déployer automatiquement votre site Docusaurus sur GitHub Pages.

## 📋 Prérequis

- Un compte GitHub
- Votre projet déjà sur GitHub
- Node.js installé localement

## 🔧 Configuration du Déploiement

### 1. Mise à jour de la configuration Docusaurus

Le fichier `docusaurus.config.js` a été mis à jour avec :

```javascript
module.exports = {
  title: 'TRC Challenge - Team ROBOSTIM',
  url: 'https://votre-nom-utilisateur.github.io',
  baseUrl: '/TRC_Robostim/',
  organizationName: 'votre-nom-utilisateur',
  projectName: 'TRC_Robostim',
  // ... reste de la configuration
};
```

**⚠️ Important :** Remplacez `votre-nom-utilisateur` par votre vrai nom d'utilisateur GitHub.

### 2. Workflow GitHub Actions

Le fichier `.github/workflows/deploy.yml` a été créé pour automatiser le déploiement.

## 🚀 Étapes de Déploiement

### Étape 1 : Préparer votre repository GitHub

1. **Créer un nouveau repository** sur GitHub :
   - Nom : `TRC_Robostim`
   - Visibilité : Public (requis pour GitHub Pages gratuit)
   - Ne pas initialiser avec README (vous avez déjà des fichiers)

2. **Pousser votre code** vers GitHub :
   ```bash
   git remote add origin https://github.com/votre-nom-utilisateur/TRC_Robostim.git
   git branch -M main
   git push -u origin main
   ```

### Étape 2 : Configurer GitHub Pages

1. **Aller dans les paramètres du repository** :
   - Cliquer sur "Settings" dans votre repository
   - Aller dans la section "Pages" (dans le menu de gauche)

2. **Configurer la source** :
   - Source : "GitHub Actions"
   - Cliquer sur "Save"

### Étape 3 : Activer les permissions

1. **Aller dans Settings > Actions > General**
2. **Dans "Workflow permissions"** :
   - Sélectionner "Read and write permissions"
   - Cocher "Allow GitHub Actions to create and approve pull requests"
3. **Cliquer sur "Save"**

### Étape 4 : Déclencher le déploiement

1. **Faire un commit et push** :
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. **Vérifier le déploiement** :
   - Aller dans l'onglet "Actions" de votre repository
   - Vérifier que le workflow "Deploy to GitHub Pages" s'exécute
   - Attendre la fin de l'exécution (environ 2-3 minutes)

## 🌐 Accéder à votre site

Une fois le déploiement terminé, votre site sera accessible à :
```
https://votre-nom-utilisateur.github.io/TRC_Robostim/
```

## 🔄 Déploiement Automatique

Désormais, à chaque fois que vous poussez du code sur la branche `main` :

1. **GitHub Actions** se déclenche automatiquement
2. **Le site est construit** avec `npm run build`
3. **Le site est déployé** sur GitHub Pages
4. **Votre site est mis à jour** automatiquement

## 🛠️ Commandes Utiles

### Déploiement manuel
```bash
# Construire le site localement
npm run build

# Tester le build localement
npm run serve
```

### Vérifier la configuration
```bash
# Vérifier que tout fonctionne
npm start
```

## 🐛 Résolution de Problèmes

### Problème : Le site ne se déploie pas
- Vérifier que GitHub Pages est activé dans les paramètres
- Vérifier que les permissions Actions sont correctes
- Vérifier les logs dans l'onglet "Actions"

### Problème : Le site ne s'affiche pas correctement
- Vérifier que l'URL et le baseUrl dans `docusaurus.config.js` sont corrects
- Vérifier que le nom du repository correspond

### Problème : Erreurs de build
- Vérifier que tous les fichiers sont committés
- Vérifier que les dépendances sont installées
- Vérifier les logs d'erreur dans GitHub Actions

## 📝 Notes Importantes

1. **Premier déploiement** : Peut prendre 5-10 minutes
2. **Déploiements suivants** : 2-3 minutes
3. **Cache** : GitHub Actions utilise le cache npm pour accélérer les builds
4. **Branche** : Seule la branche `main` déclenche le déploiement

## 🎉 Félicitations !

Votre site est maintenant déployé automatiquement sur GitHub Pages ! 

Chaque modification que vous poussez sur GitHub sera automatiquement déployée sur votre site web.
