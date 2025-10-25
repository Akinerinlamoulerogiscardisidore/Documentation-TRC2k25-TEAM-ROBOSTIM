# 🚀 Guide de démarrage rapide - Documentation technique

Ce guide vous explique comment utiliser facilement le système de documentation technique TRC pour créer et publier vos tests et documentations.

## ⚡ Démarrage en 3 étapes

### 1. **Créer un test**
```bash
npm run create-test [catégorie] "[nom du test]" "[auteur]"
```

### 2. **Créer une documentation technique**
```bash
npm run create-technical [domaine] "[titre]" "[auteur]"
```

### 3. **Publier sur GitHub**
```bash
git add .
git commit -m "Ajout test/documentation"
git push origin main
```

## 📋 Catégories disponibles

### Tests
- `ros` - Tests ROS (Robot Operating System)
- `ai` - Tests Intelligence Artificielle
- `electronics` - Tests Électronique
- `mechanical` - Tests Mécanique

### Documentation technique
- `ros` - Documentation ROS
- `ai` - Documentation IA
- `electronics` - Documentation Électronique
- `mechanical` - Documentation Mécanique

## 🎯 Exemples pratiques

### Créer un test de navigation ROS
```bash
npm run create-test ros "Test de navigation en environnement dynamique" "Giscard"
```

### Créer un test de reconnaissance d'objets IA
```bash
npm run create-test ai "Test de reconnaissance d'objets avec YOLO" "Merveille"
```

### Créer un test de capteur ultrasonique
```bash
npm run create-test electronics "Test de capteur ultrasonique HC-SR04" "Juste"
```

### Créer un test de résistance des joints
```bash
npm run create-test mechanical "Test de résistance des joints robotiques" "Martine"
```

### Créer une documentation technique ROS
```bash
npm run create-technical ros "Documentation ROS Navigation Stack" "Giscard"
```

### Créer une documentation technique IA
```bash
npm run create-technical ai "Documentation YOLO Object Detection" "Merveille"
```

## 📁 Structure automatique

Le système crée automatiquement la structure suivante :

```
docs/
├── tests/
│   ├── ros/
│   │   └── test-de-navigation-autonome.md
│   ├── ai/
│   ├── electronics/
│   └── mechanical/
└── technical/
    ├── ros/
    │   └── documentation-ros-navigation-stack.md
    ├── ai/
    ├── electronics/
    └── mechanical/
```

## ✏️ Édition des documents

### 1. **Ouvrir le fichier créé**
Le fichier est créé avec un template prêt à être rempli.

### 2. **Remplir les sections**
- Informations générales
- Objectif du test/documentation
- Procédure détaillée
- Résultats et analyse
- Conclusion

### 3. **Sauvegarder et publier**
```bash
git add .
git commit -m "Mise à jour test/documentation"
git push origin main
```

## 🔄 Workflow complet

### 1. **Création**
```bash
# Créer un test
npm run create-test ros "Mon test" "Mon nom"

# Créer une documentation
npm run create-technical ros "Ma documentation" "Mon nom"
```

### 2. **Édition**
- Ouvrir le fichier créé dans votre éditeur
- Remplir le template avec vos informations
- Ajouter des images, diagrammes, code

### 3. **Publication**
```bash
# Ajouter les changements
git add .

# Commit avec un message descriptif
git commit -m "Ajout test navigation ROS"

# Publier sur GitHub
git push origin main
```

### 4. **Vérification**
- Votre documentation est automatiquement publiée
- Accessible sur GitHub Pages
- Mise à jour en temps réel

## 📊 Avantages du système

### ✅ **Création facile**
- Scripts automatisés
- Templates prêts à utiliser
- Structure organisée automatiquement

### ✅ **Publication simple**
- Git push automatique
- Déploiement automatique
- Mise à jour en temps réel

### ✅ **Organisation claire**
- Structure par catégorie
- Navigation intuitive
- Recherche facilitée

### ✅ **Collaboration**
- Version control avec Git
- Historique des modifications
- Review process avec GitHub

## 🎯 Cas d'usage courants

### Test de validation
```bash
npm run create-test ros "Validation algorithme A*" "Giscard"
```

### Documentation d'API
```bash
npm run create-technical ai "API YOLO v8" "Merveille"
```

### Test de performance
```bash
npm run create-test electronics "Test latence communication" "Juste"
```

### Documentation de conception
```bash
npm run create-technical mechanical "Conception joints 6DOF" "Martine"
```

## 🚨 Dépannage

### Problème : Script ne fonctionne pas
```bash
# Vérifier que Node.js est installé
node --version

# Vérifier que le script existe
ls scripts/
```

### Problème : Fichier non créé
```bash
# Vérifier les permissions
ls -la docs/tests/
ls -la docs/technical/
```

### Problème : Publication échoue
```bash
# Vérifier Git
git status

# Vérifier la connexion GitHub
git remote -v
```

## 📞 Support

Pour toute question ou problème :
- Consultez la documentation complète
- Vérifiez les logs d'erreur
- Contactez l'équipe de développement

---
*Guide mis à jour : Octobre 2025*
