# 📚 Guide de documentation technique

Ce guide vous explique comment créer et organiser la documentation technique pour les tests ROS, IA, Électronique et Mécanique de l'équipe TRC - Team ROBOSTIM.

## 📁 Structure de la documentation

### Organisation des dossiers
```
docs/
├── tests/
│   ├── ros/                    # Tests ROS
│   │   ├── test1.md
│   │   ├── test2.md
│   │   └── README.md
│   ├── ia/                     # Tests Intelligence Artificielle
│   │   ├── test1.md
│   │   ├── test2.md
│   │   └── README.md
│   ├── electronique/           # Tests Électronique
│   │   ├── test1.md
│   │   ├── test2.md
│   │   └── README.md
│   └── mecanique/              # Tests Mécanique
│       ├── test1.md
│       ├── test2.md
│       └── README.md
├── guides/
│   ├── installation-ros.md
│   ├── configuration-ia.md
│   └── protocoles-tests.md
└── templates/
    ├── test-template.md
    └── guide-template.md
```

## 🧪 Template pour les tests

### Template de base pour un test
Créez le fichier `docs/templates/test-template.md` :

```markdown
# 🧪 [Nom du Test] - [Catégorie]

## 📋 Informations générales

| Propriété | Valeur |
|-----------|--------|
| **Catégorie** | [ROS/IA/Électronique/Mécanique] |
| **Date** | [Date du test] |
| **Auteur** | [Nom de l'auteur] |
| **Version** | [Version du test] |
| **Statut** | [En cours/Réussi/Échec] |

## 🎯 Objectif du test

[Description de l'objectif du test]

## 📋 Prérequis

### Matériel requis
- [ ] [Liste du matériel nécessaire]
- [ ] [Équipements spécifiques]

### Logiciel requis
- [ ] [Liste des logiciels]
- [ ] [Versions requises]

### Connaissances préalables
- [ ] [Compétences nécessaires]
- [ ] [Formation requise]

## 🔧 Configuration

### Installation
```bash
# Commandes d'installation
sudo apt update
sudo apt install [package]
```

### Configuration
```bash
# Configuration spécifique
export ROS_DISTRO=noetic
source /opt/ros/noetic/setup.bash
```

## 📝 Procédure de test

### Étape 1 : Préparation
1. [Action 1]
2. [Action 2]
3. [Action 3]

### Étape 2 : Exécution
1. [Action 1]
2. [Action 2]
3. [Action 3]

### Étape 3 : Vérification
1. [Action 1]
2. [Action 2]
3. [Action 3]

## 📊 Résultats attendus

### Critères de réussite
- [ ] [Critère 1]
- [ ] [Critère 2]
- [ ] [Critère 3]

### Métriques de performance
| Métrique | Valeur attendue | Valeur obtenue | Statut |
|----------|------------------|----------------|--------|
| [Métrique 1] | [Valeur] | [Valeur] | ✅/❌ |
| [Métrique 2] | [Valeur] | [Valeur] | ✅/❌ |

## 📈 Résultats obtenus

### Données collectées
```
[Logs ou données du test]
```

### Analyse des résultats
[Analyse détaillée des résultats]

## 🐛 Problèmes rencontrés

### Problème 1
- **Description** : [Description du problème]
- **Solution** : [Solution appliquée]
- **Statut** : [Résolu/En cours/Non résolu]

### Problème 2
- **Description** : [Description du problème]
- **Solution** : [Solution appliquée]
- **Statut** : [Résolu/En cours/Non résolu]

## 📸 Captures d'écran

### Interface utilisateur
*[Image à ajouter : Interface utilisateur du test]*

### Résultats visuels
*[Image à ajouter : Résultats visuels du test]*

## 📝 Notes et observations

- [Note importante 1]
- [Note importante 2]
- [Observation 1]

## 🔄 Améliorations futures

- [ ] [Amélioration 1]
- [ ] [Amélioration 2]
- [ ] [Amélioration 3]

## 📚 Références

- [Lien 1](https://example.com)
- [Lien 2](https://example.com)
- [Documentation 1](https://example.com)

## 👥 Équipe impliquée

- **Responsable** : [Nom]
- **Testeur** : [Nom]
- **Superviseur** : [Nom]

---
*Test créé le [Date] par [Auteur]*
```

## 🏗️ Création rapide de tests

### Script d'automatisation
Créez le fichier `scripts/create-test.js` :

```javascript
// scripts/create-test.js
const fs = require('fs');
const path = require('path');

function createTest(category, testName, author) {
  const template = `# 🧪 ${testName} - ${category}

## 📋 Informations générales

| Propriété | Valeur |
|-----------|--------|
| **Catégorie** | ${category} |
| **Date** | ${new Date().toLocaleDateString()} |
| **Auteur** | ${author} |
| **Version** | 1.0 |
| **Statut** | En cours |

## 🎯 Objectif du test

[Description de l'objectif du test]

## 📋 Prérequis

### Matériel requis
- [ ] [Liste du matériel nécessaire]

### Logiciel requis
- [ ] [Liste des logiciels]

## 📝 Procédure de test

### Étape 1 : Préparation
1. [Action 1]
2. [Action 2]

### Étape 2 : Exécution
1. [Action 1]
2. [Action 2]

### Étape 3 : Vérification
1. [Action 1]
2. [Action 2]

## 📊 Résultats attendus

### Critères de réussite
- [ ] [Critère 1]
- [ ] [Critère 2]

## 📈 Résultats obtenus

[À remplir après le test]

## 🐛 Problèmes rencontrés

[À remplir si nécessaire]

## 📝 Notes et observations

[À remplir après le test]

---
*Test créé le ${new Date().toLocaleDateString()} par ${author}*
`;

  const categoryDir = path.join('docs', 'tests', category.toLowerCase());
  const filePath = path.join(categoryDir, `${testName.toLowerCase().replace(/\s+/g, '-')}.md`);
  
  // Créer le dossier s'il n'existe pas
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }
  
  // Écrire le fichier
  fs.writeFileSync(filePath, template);
  console.log(`✅ Test créé : ${filePath}`);
}

// Utilisation
const args = process.argv.slice(2);
if (args.length < 3) {
  console.log('Usage: node create-test.js <category> <testName> <author>');
  console.log('Example: node create-test.js ROS "Test Navigation" "Giscard"');
  process.exit(1);
}

createTest(args[0], args[1], args[2]);
```

### Script de création rapide
Ajoutez dans `package.json` :

```json
{
  "scripts": {
    "create-test": "node scripts/create-test.js",
    "create-ros-test": "node scripts/create-test.js ROS",
    "create-ia-test": "node scripts/create-test.js IA",
    "create-electronique-test": "node scripts/create-electronique-test.js",
    "create-mecanique-test": "node scripts/create-mecanique-test.js"
  }
}
```

## 📖 Guides spécialisés

### Guide ROS
Créez `docs/guides/installation-ros.md` :

```markdown
# 🤖 Installation et configuration ROS

## 📋 Prérequis système

### Ubuntu 20.04 LTS
```bash
# Vérifier la version
lsb_release -a

# Mettre à jour le système
sudo apt update && sudo apt upgrade -y
```

## 🔧 Installation ROS Noetic

### Installation complète
```bash
# Ajouter le repository ROS
sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'

# Ajouter la clé
sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654

# Mettre à jour
sudo apt update

# Installation ROS Noetic
sudo apt install ros-noetic-desktop-full

# Initialiser rosdep
sudo rosdep init
rosdep update

# Configuration de l'environnement
echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## 🧪 Tests de validation

### Test 1 : Vérification de l'installation
```bash
# Vérifier ROS
rosversion -d

# Tester roscore
roscore &
rosnode list
```

### Test 2 : Communication entre nœuds
```bash
# Lancer un nœud de test
rostopic pub /chatter std_msgs/String "data: 'Hello ROS'"
```

## 📚 Documentation complète

- [ROS Wiki](http://wiki.ros.org/)
- [Tutorials ROS](http://wiki.ros.org/ROS/Tutorials)
- [Documentation TRC](docs/tests/ros/)
```

## 🎯 Création facile de nouvelles pages

### Méthode 1 : Script automatisé
```bash
# Créer un test ROS
npm run create-ros-test "Test Navigation" "Giscard"

# Créer un test IA
npm run create-ia-test "Test Reconnaissance" "Martine"

# Créer un test Électronique
npm run create-electronique-test "Test Capteurs" "Juste"
```

### Méthode 2 : Copie de template
1. Copiez `docs/templates/test-template.md`
2. Renommez-le selon votre test
3. Remplissez les informations

### Méthode 3 : Interface web
Créez `src/pages/create-test.js` :

```javascript
// src/pages/create-test.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function CreateTest() {
  const [formData, setFormData] = useState({
    category: '',
    testName: '',
    author: '',
    objective: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de création du test
    console.log('Création du test:', formData);
  };

  return (
    <Layout title="Créer un nouveau test">
      <div className="container margin-vert--lg">
        <h1>🧪 Créer un nouveau test</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="margin-bottom--md">
            <label htmlFor="category">Catégorie :</label>
            <select 
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option value="">Sélectionner une catégorie</option>
              <option value="ROS">ROS</option>
              <option value="IA">Intelligence Artificielle</option>
              <option value="Électronique">Électronique</option>
              <option value="Mécanique">Mécanique</option>
            </select>
          </div>
          
          <div className="margin-bottom--md">
            <label htmlFor="testName">Nom du test :</label>
            <input
              type="text"
              id="testName"
              value={formData.testName}
              onChange={(e) => setFormData({...formData, testName: e.target.value})}
              placeholder="Ex: Test Navigation"
            />
          </div>
          
          <div className="margin-bottom--md">
            <label htmlFor="author">Auteur :</label>
            <input
              type="text"
              id="author"
              value={formData.author}
              onChange={(e) => setFormData({...formData, author: e.target.value})}
              placeholder="Ex: Giscard"
            />
          </div>
          
          <div className="margin-bottom--md">
            <label htmlFor="objective">Objectif :</label>
            <textarea
              id="objective"
              value={formData.objective}
              onChange={(e) => setFormData({...formData, objective: e.target.value})}
              placeholder="Description de l'objectif du test"
              rows="4"
            />
          </div>
          
          <button type="submit" className="button button--primary">
            Créer le test
          </button>
        </form>
      </div>
    </Layout>
  );
}
```

## 📊 Organisation des tests

### Structure par catégorie
```
docs/tests/
├── ros/
│   ├── README.md              # Index des tests ROS
│   ├── test-navigation.md     # Test de navigation
│   ├── test-slam.md          # Test SLAM
│   └── test-communication.md  # Test de communication
├── ia/
│   ├── README.md              # Index des tests IA
│   ├── test-reconnaissance.md # Test de reconnaissance
│   └── test-decision.md       # Test de prise de décision
├── electronique/
│   ├── README.md              # Index des tests Électronique
│   ├── test-capteurs.md       # Test des capteurs
│   └── test-communication.md  # Test de communication
└── mecanique/
    ├── README.md              # Index des tests Mécanique
    ├── test-mouvement.md      # Test de mouvement
    └── test-stabilite.md      # Test de stabilité
```

### Index automatique
Créez `docs/tests/README.md` :

```markdown
# 🧪 Tests TRC - Team ROBOSTIM

## 📋 Index des tests

### 🤖 Tests ROS
- [Test Navigation](ros/test-navigation.md)
- [Test SLAM](ros/test-slam.md)
- [Test Communication](ros/test-communication.md)

### 🧠 Tests Intelligence Artificielle
- [Test Reconnaissance](ia/test-reconnaissance.md)
- [Test Prise de décision](ia/test-decision.md)

### ⚡ Tests Électronique
- [Test Capteurs](electronique/test-capteurs.md)
- [Test Communication](electronique/test-communication.md)

### 🔧 Tests Mécanique
- [Test Mouvement](mecanique/test-mouvement.md)
- [Test Stabilité](mecanique/test-stabilite.md)

## 🚀 Créer un nouveau test

### Méthode rapide
```bash
npm run create-test "ROS" "Test Navigation" "Giscard"
```

### Méthode manuelle
1. Copiez le template depuis `docs/templates/test-template.md`
2. Renommez le fichier selon votre test
3. Remplissez les informations
4. Ajoutez le lien dans l'index approprié

## 📚 Guides techniques

- [Installation ROS](#installation-ros) - Guide d'installation ROS
- [Configuration IA](#configuration-ia) - Guide de configuration IA
- [Protocoles de tests](#protocoles-tests) - Protocoles de tests
```

## 🎯 Avantages de cette structure

- ✅ **Organisation claire** : Tests par catégorie
- ✅ **Templates réutilisables** : Création rapide
- ✅ **Scripts d'automatisation** : Génération automatique
- ✅ **Interface web** : Création via formulaire
- ✅ **Index automatique** : Navigation facile
- ✅ **Documentation complète** : Guides techniques

Avec cette structure, vous pourrez facilement créer des tests comme "test1", "test2", etc. dans chaque catégorie, et ils seront automatiquement organisés et accessibles ! 🎉📚✨
