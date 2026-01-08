# 📚 Guide d'utilisation - Documentation technique TRC

## 🎯 Vue d'ensemble

Ce guide vous explique comment utiliser le système de documentation technique de TRC - Team ROBOSTIM pour publier facilement vos tests et documentations.

## 🚀 Utilisation rapide (5 minutes)

### 1. **Créer un nouveau test**
```bash
# Copier le modèle
cp docs/templates/test-template.md docs/Electronics/Test4.md

# Éditer le fichier
# Remplir les sections du modèle
```

### 2. **Ajouter à la navigation**
Modifier `sidebars.js` :
```javascript
items: [
  'Electronics/Overview',
  'Electronics/Test1',
  'Electronics/Test2',
  'Electronics/Test3',
  'Electronics/Test4', // Nouveau test
],
```

### 3. **Tester et publier**
```bash
# Tester localement
npm start

# Vérifier la compilation
npm run build

# Publier
git add .
git commit -m "Ajouter Test4 - Nouveau test"
git push
```

## 📁 Structure des dossiers

```
docs/
├── Electronics/          # Tests électroniques
│   ├── Overview.md      # Vue d'ensemble
│   ├── Test1.md         # Test capteurs
│   ├── Test2.md         # Test communication
│   └── Test3.md         # Test alimentation
├── Mechanics/           # Tests mécaniques
│   ├── Overview.md      # Vue d'ensemble
│   ├── Test1.md         # Test simulation FEA
│   ├── Test2.md         # Test prototypage
│   └── Test3.md         # Test assemblage
├── ROS/                 # Tests ROS
│   ├── Overview.md      # Vue d'ensemble
│   ├── Test1.md         # Test installation
│   ├── Test2.md         # Test communication
│   └── Test3.md         # Test navigation
├── IA/                  # Tests IA
│   ├── Overview.md      # Vue d'ensemble
│   ├── Test1.md         # Test classification
│   ├── Test2.md         # Test détection
│   └── Test3.md         # Test prédiction
└── templates/           # Modèles de tests
    └── test-template.md # Modèle standard
```

## 🔧 Types de tests disponibles

### 🔌 **Tests Électroniques**
- **Capteurs** : Validation des capteurs (distance, température, pression, IMU)
- **Communication** : Tests des protocoles (I2C, SPI, UART, CAN)
- **Alimentation** : Vérification des systèmes d'alimentation
- **Circuits** : Tests de circuits et PCB

### ⚙️ **Tests Mécaniques**
- **Simulation FEA** : Analyse par éléments finis
- **Prototypage** : Tests d'impression 3D et usinage
- **Assemblage** : Tests de montage et intégration
- **Résistance** : Tests de charge et fatigue

### 🤖 **Tests ROS**
- **Installation** : Configuration de l'environnement ROS
- **Navigation** : Tests de navigation autonome
- **Perception** : Tests de traitement d'images
- **Contrôle** : Tests d'algorithmes de contrôle

### 🧠 **Tests IA**
- **Classification** : Tests de classification d'images
- **Détection** : Tests de détection d'objets
- **Prédiction** : Tests de modèles prédictifs
- **NLP** : Tests de traitement du langage naturel

## 📝 Modèle de test standard

### **Structure du modèle**
```markdown
# 🔧 Test [N] - [Nom du test]

## 📋 Objectif du test
[Décrire l'objectif en 2-3 phrases]

## 🎯 Critères de réussite
- **Critère 1** : [Description]
- **Critère 2** : [Description]
- **Critère 3** : [Description]

## 🛠️ Matériel requis
- **Équipement** : [Liste]
- **Logiciels** : [Liste]
- **Outils** : [Liste]

## 📊 Procédure de test
### Étape 1 : Préparation
```[langage]
// Code de préparation
```

### Étape 2 : [Nom de l'étape]
```[langage]
// Code de l'étape
```

## 📈 Résultats attendus
- **Métrique 1** : [Valeur]
- **Métrique 2** : [Valeur]

## 🔍 Validation des résultats
```python
# Code de validation
```

## 🚨 Dépannage
### Problèmes courants
#### 1. [Problème 1]
```[langage]
// Solution
```

## 📝 Rapport de test
### Résumé des performances
- **Durée** : [X] heures
- **Taux de réussite** : [X]%

### Recommandations
1. [Recommandation 1]
2. [Recommandation 2]
```

## 🔄 Workflow de publication

### **1. Développement local**
```bash
# Créer une branche
git checkout -b feature/nouveau-test

# Copier le modèle
cp docs/templates/test-template.md docs/Electronics/Test4.md

# Éditer le fichier
# Remplir les sections
```

### **2. Ajout à la navigation**
```javascript
// sidebars.js
{
  type: 'category',
  label: 'Electronic Pole',
  items: [
    'Electronics/Overview',
    'Electronics/Test1',
    'Electronics/Test2',
    'Electronics/Test3',
    'Electronics/Test4', // Nouveau test
  ],
},
```

### **3. Test et validation**
```bash
# Tester localement
npm start

# Vérifier la compilation
npm run build

# Tester les liens
npm run test
```

### **4. Publication**
```bash
# Commit des changements
git add .
git commit -m "Ajouter Test4 - Nouveau test"

# Push vers GitHub
git push origin feature/nouveau-test

# Créer une Pull Request
```

## 🛠️ Outils recommandés

### **Éditeur de code**
- **VS Code** avec extensions :
  - Markdown All in One
  - Markdown Preview Enhanced
  - GitLens

### **Validation du contenu**
```bash
# Vérifier la syntaxe Markdown
markdownlint docs/[Pole]/Test[N].md

# Tester la compilation
npm run build

# Tester les liens
npm run test
```

### **Prévisualisation locale**
```bash
# Démarrer le serveur de développement
npm start

# Ouvrir http://localhost:3000
```

## 📊 Bonnes pratiques

### **Structure du contenu**
1. **Titre clair** : Nom du test + numéro
2. **Objectif précis** : Description de l'objectif
3. **Critères mesurables** : Métriques quantifiables
4. **Procédure détaillée** : Étapes claires et reproductibles
5. **Résultats documentés** : Données et graphiques
6. **Dépannage** : Solutions aux problèmes courants

### **Formatage du code**
```markdown
# Utiliser des blocs de code avec syntaxe
```python
# Code Python
def function():
    return "Hello"
```

```cpp
// Code C++
int main() {
    return 0;
}
```
```

### **Images et graphiques**
```markdown
# Ajouter des images
![Description](path/to/image.png)

# Ajouter des graphiques
```python
import matplotlib.pyplot as plt
# Code pour générer le graphique
```
```

### **Tableaux de résultats**
```markdown
| Paramètre | Valeur attendue | Valeur mesurée | Écart | Statut |
|------------|-----------------|----------------|-------|--------|
| Paramètre 1 | 100 | 98.5 | -1.5% | ✅ |
| Paramètre 2 | 50 | 52.1 | +4.2% | ✅ |
```

## 🚨 Dépannage

### **Problèmes courants**

#### 1. **Erreur de compilation**
```bash
# Nettoyer le cache
npm run clear

# Réinstaller les dépendances
rm -rf node_modules
npm install

# Reconstruire
npm run build
```

#### 2. **Problème de navigation**
- Vérifier la syntaxe dans `sidebars.js`
- Contrôler les chemins des fichiers
- Vérifier les noms des fichiers

#### 3. **Problème de contenu**
- Vérifier la syntaxe Markdown
- Contrôler les liens et images
- Tester la compilation locale

### **Commandes utiles**
```bash
# Nettoyer et reconstruire
npm run clear && npm run build

# Tester localement
npm start

# Vérifier la syntaxe
npm run lint

# Tester les liens
npm run test
```

## 📞 Support

### **Ressources utiles**
- **Documentation Docusaurus** : [docs.docusaurus.io](https://docs.docusaurus.io)
- **Guide Markdown** : [markdownguide.org](https://markdownguide.org)
- **Templates** : `docs/templates/`

### **Contact**
- **Équipe technique** : teamrobostim@gmail.com
- **Issues GitHub** : [Repository Issues](https://github.com/votre-username/TRC_Robostim/issues)

## 🎯 Résumé rapide

### **Pour publier un nouveau test :**
1. **Copier le modèle** : `cp docs/templates/test-template.md docs/[Pole]/Test[N].md`
2. **Éditer le contenu** : Remplir les sections du modèle
3. **Ajouter à la sidebar** : Modifier `sidebars.js`
4. **Tester localement** : `npm start`
5. **Publier** : Commit et push

### **Structure standard :**
- **Objectif** : Description claire
- **Critères** : Métriques quantifiables
- **Procédure** : Étapes détaillées
- **Résultats** : Données et graphiques
- **Dépannage** : Solutions aux problèmes

---

*Guide mis à jour : Octobre 2025*
