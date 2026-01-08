# 🚀 Guide de Déploiement sur GitHub Pages

Ce guide vous explique comment publier votre site Docusaurus sur GitHub Pages en quelques étapes simples.

## 📋 Prérequis

- Un compte GitHub
- Le repository GitHub créé : `TekBot-Robotics-Challenge/2025-Team-Club_de_Robotique_et_Automatisation-Docs`
- Git installé sur votre machine

## ⚙️ Configuration (Déjà faite !)

La configuration est déjà prête :
- ✅ `docusaurus.config.js` configuré pour GitHub Pages
- ✅ Workflow GitHub Actions créé (`.github/workflows/deploy.yml`)
- ✅ Scripts npm configurés

## 🚀 Étapes de Déploiement

### Étape 1 : Initialiser Git (si pas déjà fait)

```bash
# Dans le dossier du projet
cd Documentation-TRC2k25-TEAM-ROBOSTIM

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit: Site TRC - Team ROBOSTIM"
```

### Étape 2 : Connecter au Repository GitHub

```bash
# Ajouter le repository distant (remplacez par votre URL si différente)
git remote add origin https://github.com/TekBot-Robotics-Challenge/2025-Team-Club_de_Robotique_et_Automatisation-Docs.git

# Vérifier la connexion
git remote -v
```

### Étape 3 : Activer GitHub Pages

1. Allez sur votre repository GitHub : https://github.com/TekBot-Robotics-Challenge/2025-Team-Club_de_Robotique_et_Automatisation-Docs
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source**, sélectionnez **GitHub Actions**
5. Sauvegardez

### Étape 4 : Pousser le Code

```bash
# Pousser vers la branche main
git branch -M main
git push -u origin main
```

### Étape 5 : Vérifier le Déploiement

1. Allez dans l'onglet **Actions** de votre repository GitHub
2. Vous devriez voir le workflow "Deploy to GitHub Pages" en cours d'exécution
3. Attendez que le déploiement se termine (environ 2-3 minutes)
4. Une fois terminé, votre site sera disponible à :
   **https://tekbot-robotics-challenge.github.io/2025-Team-Club_de_Robotique_et_Automatisation-Docs/**

## 🔄 Déploiements Automatiques

Désormais, **chaque fois que vous poussez du code sur la branche `main`**, le site sera automatiquement reconstruit et redéployé !

```bash
# Faire des modifications
# ... modifier vos fichiers ...

# Ajouter les changements
git add .

# Commit
git commit -m "Description de vos modifications"

# Push (déclenche automatiquement le déploiement)
git push origin main
```

## 🛠️ Déploiement Manuel (Alternative)

Si vous préférez déployer manuellement :

```bash
# Construire le site
npm run build

# Déployer (nécessite gh-pages installé)
npm install --save-dev gh-pages
npm run deploy
```

## 📝 Vérification

### Vérifier que tout fonctionne :

1. ✅ Le workflow GitHub Actions s'exécute sans erreur
2. ✅ Le site est accessible à l'URL GitHub Pages
3. ✅ Toutes les pages se chargent correctement
4. ✅ Les images s'affichent
5. ✅ La navigation fonctionne

## 🐛 Dépannage

### Problème : Le workflow ne se déclenche pas

**Solution :**
- Vérifiez que vous avez bien poussé sur la branche `main` ou `master`
- Vérifiez que le fichier `.github/workflows/deploy.yml` existe
- Vérifiez les permissions du repository (Settings > Actions > General)

### Problème : Erreur de build

**Solution :**
- Vérifiez les logs dans l'onglet Actions
- Testez localement avec `npm run build`
- Vérifiez qu'il n'y a pas d'erreurs de syntaxe

### Problème : Le site ne s'affiche pas

**Solution :**
- Vérifiez que GitHub Pages est activé (Settings > Pages)
- Vérifiez que la source est bien "GitHub Actions"
- Attendez quelques minutes (le déploiement peut prendre du temps)
- Vérifiez l'URL dans Settings > Pages

### Problème : Les chemins ne fonctionnent pas

**Solution :**
- Vérifiez que `baseUrl` dans `docusaurus.config.js` correspond au nom du repository
- Le `baseUrl` doit être `/nom-du-repository/` (avec le slash final)

## 📊 Monitoring

- **Actions** : Voir l'historique des déploiements
- **Pages** : Voir les statistiques de visite (si activé)
- **Settings > Pages** : Voir l'URL et le statut du déploiement

## 🎉 C'est tout !

Votre site est maintenant en ligne sur GitHub Pages ! 🚀

**URL de votre site :**
https://tekbot-robotics-challenge.github.io/2025-Team-Club_de_Robotique_et_Automatisation-Docs/

---

*Besoin d'aide ? Consultez la [documentation Docusaurus](https://docusaurus.io/docs/deployment) ou ouvrez une issue sur GitHub.*
