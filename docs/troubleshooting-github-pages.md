# 🔧 Guide de Dépannage - GitHub Pages

Ce guide vous aide à résoudre les problèmes de déploiement sur GitHub Pages.

## ✅ Checklist de Configuration Obligatoire

### 1. Configuration GitHub Pages (CRITIQUE)

1. **Allez sur votre repository GitHub** :
   - URL: `https://github.com/akinerinlamoulerogiscardisidore/Documentation-TRC2k25-TEAM-ROBOSTIM`

2. **Cliquez sur "Settings"** (en haut du repository)

3. **Dans le menu de gauche, cliquez sur "Pages"**

4. **Configurez la source** :
   - **Source** : Sélectionnez `GitHub Actions` (PAS "Deploy from a branch")
   - Cliquez sur **"Save"**

   ⚠️ **IMPORTANT** : Si vous voyez "Deploy from a branch", NE l'utilisez PAS. Utilisez UNIQUEMENT "GitHub Actions".

### 2. Configuration des Permissions GitHub Actions (CRITIQUE)

1. **Dans Settings, cliquez sur "Actions"** (menu de gauche)

2. **Dans "General"**, faites défiler jusqu'à **"Workflow permissions"**

3. **Sélectionnez** :
   - ✅ **"Read and write permissions"**
   - ✅ Cochez **"Allow GitHub Actions to create and approve pull requests"**

4. **Cliquez sur "Save"** (en bas de la page)

### 3. Création de l'Environnement GitHub Pages

Si vous utilisez la nouvelle configuration avec `environment: github-pages`, GitHub devrait créer automatiquement l'environnement. Si ce n'est pas le cas :

1. **Allez dans Settings > Environments**
2. Si "github-pages" n'existe pas, cliquez sur "New environment"
3. Nommez-le **"github-pages"** (exactement comme ça, en minuscules avec un tiret)
4. Cliquez sur "Configure environment"
5. **Ne cochez PAS de protection rules** pour le premier déploiement
6. Cliquez sur "Save protection rules"

## 🔍 Vérification du Déploiement

### Vérifier le Workflow

1. **Allez dans l'onglet "Actions"** de votre repository
2. Vous devriez voir le workflow **"Deploy to GitHub Pages"** s'exécuter
3. **Attendez la fin de l'exécution** (2-5 minutes)

### Vérifier les Logs en Cas d'Erreur

Si le workflow échoue :

1. **Cliquez sur le workflow qui a échoué**
2. **Cliquez sur le job "build-and-deploy"**
3. **Lisez les logs** pour identifier l'erreur

**Erreurs courantes** :

- ❌ **"Permission denied"** → Vérifiez les permissions (section 2 ci-dessus)
- ❌ **"Environment not found"** → Créez l'environnement (section 3 ci-dessus)
- ❌ **"Build failed"** → Vérifiez les erreurs de build dans les logs
- ❌ **"Page build failed"** → Vérifiez que la source est bien "GitHub Actions" (section 1)

## 🌐 Accès au Site

Une fois le déploiement réussi, votre site sera accessible à :

```
https://akinerinlamoulerogiscardisidore.github.io/Documentation-TRC2k25-TEAM-ROBOSTIM/
```

⚠️ **Note** : Le premier déploiement peut prendre **10-15 minutes**. Les déploiements suivants prennent généralement **2-5 minutes**.

## 🐛 Solutions aux Problèmes Courants

### Problème 1 : Le workflow ne se déclenche pas

**Solution** :
- Vérifiez que vous avez bien poussé sur la branche `main`
- Vérifiez que le fichier `.github/workflows/deploy.yml` existe
- Vérifiez dans Settings > Actions que GitHub Actions est activé

### Problème 2 : "Permission denied" ou "403 Forbidden"

**Solution** :
- Retournez à la section 2 ci-dessus
- Assurez-vous que les permissions sont bien configurées sur "Read and write permissions"

### Problème 3 : Le site affiche "404 Not Found"

**Solution** :
- Vérifiez que `baseUrl` dans `docusaurus.config.js` correspond exactement au nom de votre repository
- Vérifiez que GitHub Pages est bien activé (section 1)
- Attendez 10-15 minutes après le premier déploiement

### Problème 4 : Le site s'affiche mais les images/CSS ne se chargent pas

**Solution** :
- Vérifiez que `baseUrl` dans `docusaurus.config.js` se termine par un `/` (ex: `/Documentation-TRC2k25-TEAM-ROBOSTIM/`)
- Vérifiez que `url` est correct (sans slash final)

### Problème 5 : "Environment protection rules" bloque le déploiement

**Solution** :
- Allez dans Settings > Environments > github-pages
- Retirez temporairement les règles de protection
- Ou ajoutez votre compte comme reviewer

## 📞 Besoin d'Aide ?

Si le problème persiste :

1. **Copiez les logs d'erreur** du workflow GitHub Actions
2. **Vérifiez cette checklist** point par point
3. **Vérifiez que votre repository est public** (GitHub Pages gratuit nécessite un repository public)

## ✅ Configuration Finale Recommandée

Votre `docusaurus.config.js` devrait contenir :

```javascript
url: 'https://akinerinlamoulerogiscardisidore.github.io',
baseUrl: '/Documentation-TRC2k25-TEAM-ROBOSTIM/',
organizationName: 'akinerinlamoulerogiscardisidore',
projectName: 'Documentation-TRC2k25-TEAM-ROBOSTIM',
deploymentBranch: 'gh-pages',
trailingSlash: false,
```

Et votre workflow `.github/workflows/deploy.yml` devrait contenir :

```yaml
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
```

---

**Dernière mise à jour** : Après chaque modification, attendez que le workflow se termine avant de vérifier si le site fonctionne.

