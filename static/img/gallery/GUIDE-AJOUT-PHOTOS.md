# 📸 Guide Pratique : Comment Ajouter des Photos à la Galerie

Ce guide vous explique étape par étape comment ajouter vos photos à la galerie du site TRC - Team ROBOSTIM.

## 🎯 Vue d'ensemble

La galerie est organisée en 4 sections :
1. **👥 Photos d'équipe** - 3 images
2. **🔧 Nos réalisations** - 4 images
3. **🏆 Moments de compétition** - 3 images
4. **🎓 Vie académique** - 2 images

**Total : 12 images**

---

## 📂 Étape 1 : Préparer vos images

### 1.1 Vérifier les spécifications

Avant d'ajouter vos photos, assurez-vous qu'elles respectent :

- ✅ **Format** : JPG ou PNG
- ✅ **Résolution** : Minimum 1920x1080 pixels
- ✅ **Taille** : Maximum 5MB par fichier
- ✅ **Qualité** : Photo nette et bien éclairée

### 1.2 Redimensionner (si nécessaire)

Si vos images sont trop petites ou trop grandes :

**Option 1 : En ligne**
- Utilisez [ResizeImage.net](https://resizeimage.net/)
- Définissez la largeur à 1920px minimum
- Maintenez le ratio d'aspect

**Option 2 : Logiciel**
- Photoshop, GIMP, ou Paint.NET
- Redimensionnez en gardant le ratio
- Exportez en JPG avec qualité 85-90%

### 1.3 Optimiser la taille

Pour réduire la taille du fichier sans perdre trop de qualité :

- Utilisez [TinyPNG](https://tinypng.com/) ou [Squoosh](https://squoosh.app/)
- Ciblez une taille de 1-3MB par image
- Vérifiez que la qualité reste acceptable

---

## 📝 Étape 2 : Nommer vos fichiers

**IMPORTANT** : Les noms de fichiers doivent être EXACTEMENT comme indiqué ci-dessous.

### Photos d'équipe
```
team-group.jpg
team-working.jpg
team-meeting.jpg
```

### Réalisations
```
robot-prototype.jpg
electronics-lab.jpg
mechanical-workshop.jpg
software-development.jpg
```

### Moments de compétition
```
competition-prep.jpg
robot-testing.jpg
team-celebration.jpg
```

### Vie académique
```
university-campus.jpg
lab-session.jpg
```

**⚠️ Attention** :
- Utilisez des **minuscules** uniquement
- Utilisez des **tirets** (`-`) pour séparer les mots
- **Pas d'espaces** dans les noms
- Extension : `.jpg` ou `.png`

---

## 📁 Étape 3 : Placer les fichiers

### 3.1 Localiser le dossier

Naviguez vers :
```
Documentation-TRC2k25-TEAM-ROBOSTIM/
└── static/
    └── img/
        └── gallery/    ← C'est ici !
```

### 3.2 Copier les images

1. Ouvrez le dossier `gallery`
2. Copiez toutes vos images dans ce dossier
3. Vérifiez que les noms sont corrects

### 3.3 Structure finale

Votre dossier `gallery` devrait ressembler à ceci :
```
gallery/
├── README.md
├── IMAGES-REQUISES.md
├── GUIDE-AJOUT-PHOTOS.md
├── team-group.jpg          ✅
├── team-working.jpg        ✅
├── team-meeting.jpg        ✅
├── robot-prototype.jpg     ✅
├── electronics-lab.jpg     ✅
├── mechanical-workshop.jpg  ✅
├── software-development.jpg ✅
├── competition-prep.jpg     ✅
├── robot-testing.jpg        ✅
├── team-celebration.jpg     ✅
├── university-campus.jpg     ✅
└── lab-session.jpg          ✅
```

---

## ✅ Étape 4 : Vérifier l'affichage

### 4.1 Lancer le site en local

```bash
cd Documentation-TRC2k25-TEAM-ROBOSTIM
npm start
```

### 4.2 Tester la galerie

1. Ouvrez votre navigateur sur `http://localhost:3000`
2. Cliquez sur "🖼️ Pictures" dans le menu
3. Vérifiez que toutes les images s'affichent correctement

### 4.3 Vérifier chaque section

- ✅ **Photos d'équipe** : 3 images visibles
- ✅ **Nos réalisations** : 4 images visibles
- ✅ **Moments de compétition** : 3 images visibles
- ✅ **Vie académique** : 2 images visibles

---

## 🐛 Résolution de problèmes

### Problème : Image ne s'affiche pas

**Solutions** :
1. Vérifiez le nom du fichier (doit être exact)
2. Vérifiez l'emplacement (dans `static/img/gallery/`)
3. Vérifiez l'extension (`.jpg` ou `.png`)
4. Redémarrez le serveur de développement

### Problème : Image floue

**Solutions** :
1. Utilisez une image de meilleure résolution (1920x1080px min)
2. Vérifiez que l'image n'est pas trop compressée
3. Réimportez l'image originale

### Problème : Image trop lourde

**Solutions** :
1. Compressez l'image avec TinyPNG
2. Réduisez la qualité à 85-90%
3. Utilisez le format JPG au lieu de PNG

---

## 📸 Suggestions de photos

### Photos d'équipe
- Photo de groupe officielle
- Équipe en train de travailler sur un projet
- Réunion de brainstorming ou planification

### Réalisations
- Prototype du robot complet
- Laboratoire avec composants électroniques
- Atelier avec outils et pièces mécaniques
- Écran avec code ou interface logicielle

### Moments de compétition
- Préparation avant la compétition
- Tests du robot en action
- Célébration après une réussite

### Vie académique
- Vue du campus INSTI
- Session de laboratoire avec équipement

---

## 🎨 Conseils pour de belles photos

1. **Éclairage** : Utilisez un bon éclairage naturel ou artificiel
2. **Cadrage** : Centrez les sujets principaux
3. **Stabilité** : Utilisez un trépied ou stabilisez votre appareil
4. **Résolution** : Prenez des photos en haute résolution
5. **Cohérence** : Gardez un style visuel uniforme

---

## 📋 Checklist finale

Avant de considérer que c'est terminé :

- [ ] Toutes les 12 images sont nommées correctement
- [ ] Toutes les images sont dans `static/img/gallery/`
- [ ] Les images respectent les spécifications (format, taille, résolution)
- [ ] Le site affiche correctement toutes les images
- [ ] Les images sont de bonne qualité et nettes
- [ ] Les descriptions correspondent aux images

---

## 🆘 Besoin d'aide ?

Si vous rencontrez des difficultés :

1. Consultez le fichier `IMAGES-REQUISES.md` pour la liste complète
2. Vérifiez que les noms de fichiers sont exacts
3. Assurez-vous que les images sont dans le bon dossier
4. Redémarrez le serveur de développement

---

*Guide créé le : [Date]*
*Dernière mise à jour : [Date]*
