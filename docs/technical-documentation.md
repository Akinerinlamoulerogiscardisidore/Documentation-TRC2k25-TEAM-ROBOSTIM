# 📚 Guide de documentation technique

Ce guide vous explique comment créer et publier facilement des documentations techniques pour vos tests ROS, IA, Électronique et Mécanique.

## 📋 Structure des documentations techniques

### 1. **Tests ROS (Robot Operating System)**
- Tests de navigation
- Tests de perception
- Tests de contrôle
- Tests d'intégration

### 2. **Tests IA (Intelligence Artificielle)**
- Tests de machine learning
- Tests de vision par ordinateur
- Tests de traitement du langage naturel
- Tests de réseaux de neurones

### 3. **Tests Électronique**
- Tests de circuits
- Tests de capteurs
- Tests de communication
- Tests de puissance

### 4. **Tests Mécanique**
- Tests de résistance
- Tests de précision
- Tests de durabilité
- Tests de performance

## 🛠️ Création facile de documentation

### 1. **Template de base pour un test**
Créez le fichier `docs/tests/template-test.md` :

```markdown
# 🔧 [Nom du Test] - [Catégorie]

## 📋 Informations générales
- **Date** : [Date du test]
- **Responsable** : [Nom du responsable]
- **Équipe** : [Pôle concerné]
- **Version** : [Version du système]

## 🎯 Objectif
[Description de l'objectif du test]

## 📝 Prérequis
- [Liste des prérequis]
- [Matériel nécessaire]
- [Logiciels requis]

## 🔧 Procédure
### Étape 1 : [Nom de l'étape]
[Description détaillée]

### Étape 2 : [Nom de l'étape]
[Description détaillée]

## 📊 Résultats
[Tableau des résultats]

## 📈 Analyse
[Analyse des résultats]

## 🚨 Problèmes rencontrés
[Liste des problèmes et solutions]

## ✅ Conclusion
[Résumé et recommandations]
```

### 2. **Template pour documentation technique**
Créez le fichier `docs/technical/template-technical.md` :

```markdown
# 📖 [Titre de la documentation] - [Domaine]

## 🌟 Vue d'ensemble
[Description générale]

## 🏗️ Architecture
[Schémas et diagrammes]

## 🔧 Configuration
[Instructions de configuration]

## 📚 API Reference
[Documentation des APIs]

## 🧪 Exemples d'utilisation
[Code examples]

## ❓ FAQ
[Questions fréquentes]
```

## 📁 Organisation des fichiers

### Structure recommandée
```
docs/
├── tests/
│   ├── ros/
│   │   ├── navigation/
│   │   ├── perception/
│   │   └── control/
│   ├── ai/
│   │   ├── machine-learning/
│   │   ├── computer-vision/
│   │   └── nlp/
│   ├── electronics/
│   │   ├── circuits/
│   ├── sensors/
│   └── communication/
│   └── mechanical/
│       ├── resistance/
│       ├── precision/
│       └── durability/
├── technical/
│   ├── ros-documentation/
│   ├── ai-documentation/
│   ├── electronics-documentation/
│   └── mechanical-documentation/
└── guides/
    ├── how-to-create-tests.md
    ├── how-to-document-technical.md
    └── publishing-guide.md
```

## 🚀 Publication facile

### 1. **Script de création automatique**
Créez le fichier `scripts/create-test.js` :

```javascript
// scripts/create-test.js
const fs = require('fs');
const path = require('path');

function createTestDocument(category, testName, author) {
  const date = new Date().toISOString().split('T')[0];
  const template = `# 🔧 ${testName} - ${category}

## 📋 Informations générales
- **Date** : ${date}
- **Responsable** : ${author}
- **Équipe** : ${category}
- **Version** : 1.0

## 🎯 Objectif
[Description de l'objectif du test]

## 📝 Prérequis
- [Liste des prérequis]
- [Matériel nécessaire]
- [Logiciels requis]

## 🔧 Procédure
### Étape 1 : [Nom de l'étape]
[Description détaillée]

### Étape 2 : [Nom de l'étape]
[Description détaillée]

## 📊 Résultats
[Tableau des résultats]

## 📈 Analyse
[Analyse des résultats]

## 🚨 Problèmes rencontrés
[Liste des problèmes et solutions]

## ✅ Conclusion
[Résumé et recommandations]
`;

  const fileName = `${testName.toLowerCase().replace(/\s+/g, '-')}.md`;
  const filePath = path.join('docs', 'tests', category.toLowerCase(), fileName);
  
  // Créer le dossier s'il n'existe pas
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(filePath, template);
  console.log(`✅ Test créé : ${filePath}`);
}

// Utilisation
const category = process.argv[2];
const testName = process.argv[3];
const author = process.argv[4] || 'TRC Team';

if (!category || !testName) {
  console.log('Usage: node scripts/create-test.js <category> <test-name> [author]');
  console.log('Categories: ros, ai, electronics, mechanical');
  process.exit(1);
}

createTestDocument(category, testName, author);
```

### 2. **Script de création de documentation technique**
Créez le fichier `scripts/create-technical.js` :

```javascript
// scripts/create-technical.js
const fs = require('fs');
const path = require('path');

function createTechnicalDocument(domain, title, author) {
  const date = new Date().toISOString().split('T')[0];
  const template = `# 📖 ${title} - ${domain}

## 🌟 Vue d'ensemble
[Description générale du système ou de la technologie]

## 🏗️ Architecture
[Schémas et diagrammes de l'architecture]

## 🔧 Configuration
[Instructions de configuration et d'installation]

## 📚 API Reference
[Documentation des APIs et interfaces]

## 🧪 Exemples d'utilisation
[Code examples et cas d'usage]

## 📊 Tests et validation
[Procédures de test et validation]

## 🚨 Dépannage
[Problèmes courants et solutions]

## ❓ FAQ
[Questions fréquentes et réponses]

## 📚 Références
[Liens et ressources utiles]
`;

  const fileName = `${title.toLowerCase().replace(/\s+/g, '-')}.md`;
  const filePath = path.join('docs', 'technical', domain.toLowerCase(), fileName);
  
  // Créer le dossier s'il n'existe pas
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(filePath, template);
  console.log(`✅ Documentation technique créée : ${filePath}`);
}

// Utilisation
const domain = process.argv[2];
const title = process.argv[3];
const author = process.argv[4] || 'TRC Team';

if (!domain || !title) {
  console.log('Usage: node scripts/create-technical.js <domain> <title> [author]');
  console.log('Domains: ros, ai, electronics, mechanical');
  process.exit(1);
}

createTechnicalDocument(domain, title, author);
```

## 📝 Ajout des scripts dans package.json

```json
{
  "scripts": {
    "create-test": "node scripts/create-test.js",
    "create-technical": "node scripts/create-technical.js",
    "docs:serve": "docusaurus start",
    "docs:build": "docusaurus build",
    "docs:deploy": "docusaurus deploy"
  }
}
```

## 🎯 Utilisation facile

### 1. **Créer un test ROS**
```bash
npm run create-test ros "Test de navigation autonome" "Giscard"
```

### 2. **Créer un test IA**
```bash
npm run create-test ai "Test de reconnaissance d'objets" "Merveille"
```

### 3. **Créer un test Électronique**
```bash
npm run create-test electronics "Test de capteur ultrasonique" "Juste"
```

### 4. **Créer un test Mécanique**
```bash
npm run create-test mechanical "Test de résistance des joints" "Martine"
```

### 5. **Créer une documentation technique**
```bash
npm run create-technical ros "Documentation ROS Navigation Stack" "Giscard"
```

## 📊 Système de navigation

### 1. **Page d'index des tests**
Créez le fichier `docs/tests/index.md` :

```markdown
# 🧪 Tests TRC - Team ROBOSTIM

## 🔍 Navigation par catégorie

### 🤖 Tests ROS
- [Navigation autonome](ros/navigation/)
- [Perception](ros/perception/)
- [Contrôle](ros/control/)

### 🧠 Tests IA
- [Machine Learning](ai/machine-learning/)
- [Computer Vision](ai/computer-vision/)
- [NLP](ai/nlp/)

### ⚡ Tests Électronique
- [Circuits](electronics/circuits/)
- [Capteurs](electronics/sensors/)
- [Communication](electronics/communication/)

### 🔧 Tests Mécanique
- [Résistance](mechanical/resistance/)
- [Précision](mechanical/precision/)
- [Durabilité](mechanical/durability/)
```

### 2. **Page d'index technique**
Créez le fichier `docs/technical/index.md` :

```markdown
# 📖 Documentation technique TRC

## 🏗️ Architecture des systèmes

### 🤖 ROS Documentation
- [Navigation Stack](ros-documentation/navigation-stack.md)
- [Perception Pipeline](ros-documentation/perception-pipeline.md)
- [Control Systems](ros-documentation/control-systems.md)

### 🧠 IA Documentation
- [ML Models](ai-documentation/ml-models.md)
- [Computer Vision](ai-documentation/computer-vision.md)
- [NLP Systems](ai-documentation/nlp-systems.md)

### ⚡ Électronique Documentation
- [Circuit Design](electronics-documentation/circuit-design.md)
- [Sensor Integration](electronics-documentation/sensor-integration.md)
- [Communication Protocols](electronics-documentation/communication-protocols.md)

### 🔧 Mécanique Documentation
- [Mechanical Design](mechanical-documentation/mechanical-design.md)
- [Precision Engineering](mechanical-documentation/precision-engineering.md)
- [Durability Testing](mechanical-documentation/durability-testing.md)
```

## 🚀 Publication automatique

### 1. **Workflow GitHub Actions**
Créez le fichier `.github/workflows/docs.yml` :

```yaml
name: Build and Deploy Documentation

on:
  push:
    branches: [ main ]
    paths: [ 'docs/**' ]
  pull_request:
    branches: [ main ]
    paths: [ 'docs/**' ]

jobs:
  build-docs:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build documentation
      run: npm run docs:build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

## 📈 Avantages de ce système

### 1. **Création facile**
- Scripts automatisés pour créer des documents
- Templates prêts à utiliser
- Structure organisée automatiquement

### 2. **Publication simple**
- Git push automatique
- Déploiement automatique sur GitHub Pages
- Mise à jour en temps réel

### 3. **Organisation claire**
- Structure par catégorie
- Navigation intuitive
- Recherche facilitée

### 4. **Collaboration**
- Version control avec Git
- Historique des modifications
- Review process avec GitHub

## 🎯 Exemple d'utilisation

### Créer un test de navigation ROS
```bash
npm run create-test ros "Test de navigation en environnement dynamique" "Giscard"
```

### Créer une documentation technique IA
```bash
npm run create-technical ai "Documentation YOLO Object Detection" "Merveille"
```

### Publier les changements
```bash
git add .
git commit -m "Ajout test navigation ROS"
git push origin main
```

Votre documentation sera automatiquement publiée sur GitHub Pages !

---
*Guide mis à jour : Octobre 2025*
