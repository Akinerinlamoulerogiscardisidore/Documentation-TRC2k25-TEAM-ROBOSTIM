# 📚 Guide d'utilisation des Templates de Documentation Technique

Bienvenue dans le guide d'utilisation des templates pour créer des documentations techniques pour chaque pôle (Électronique, ROS, IA, Mécanique).

---

## 🎯 Objectif

Ces templates ont été créés pour :
- **Standardiser** la structure des documentations techniques
- **Faciliter** la création de nouvelles documentations
- **Assurer** la cohérence entre les différentes documentations
- **Accélérer** le processus de rédaction

---

## 📁 Structure des Templates

Les templates sont organisés par pôle dans le dossier `docs/templates/` :

```
docs/templates/
├── README.md (ce fichier)
├── template-electronique.md
├── template-ros.mdx
├── template-ia.mdx
└── template-mecanique.mdx
```

---

## 🚀 Comment utiliser un template

### Étape 1 : Choisir le bon template

Sélectionnez le template correspondant à votre pôle :

| Pôle | Fichier template | Format |
|------|------------------|--------|
| 🔌 **Électronique** | `template-electronique.md` | Markdown (.md) |
| 🤖 **ROS** | `template-ros.mdx` | MDX (.mdx) |
| 🧠 **IA** | `template-ia.mdx` | MDX (.mdx) |
| ⚙️ **Mécanique** | `template-mecanique.mdx` | MDX (.mdx) |

### Étape 2 : Copier le template

1. Ouvrez le template correspondant à votre pôle
2. Copiez tout le contenu
3. Créez un nouveau fichier dans le dossier approprié :

```
docs/
├── Electronics/
│   └── votre-nouveau-test.md
├── ROS/
│   └── votre-nouveau-test.mdx
├── IA/
│   └── votre-nouveau-test.mdx
└── Mechanics/
    └── votre-nouveau-test.mdx
```

### Étape 3 : Remplir les sections

Remplacez les exemples par vos propres informations :

#### 1. **Frontmatter** (en-tête du fichier)

```markdown
---
id: nom-unique-du-test
title: Nom du Test - Description courte
sidebar_label: Nom court pour la sidebar
---
```

**Exemple** :
```markdown
---
id: test-capteur-temperature
title: Test Capteur de Température DS18B20
sidebar_label: Test Température
---
```

#### 2. **Titre principal**

```markdown
# 🔌 Nom du Test - Description
```

#### 3. **Section Présentation**

```markdown
## Présentation <span className="badge-sticker badge-electronique">⚡ Électronique</span>

<InfoCard type="info" title="Aperçu du test" icon="📡">
Votre description courte du test ici.
</InfoCard>
```

#### 4. **Remplir les autres sections**

- 📋 Objectif du test
- 🎯 Critères de réussite
- 🛠️ Matériel requis
- 📊 Procédure de test
- 📈 Résultats attendus
- 🔍 Validation des résultats
- 🚨 Dépannage
- 📝 Rapport de test

### Étape 4 : Ajouter des images (optionnel)

1. Placez vos images dans `static/img/`
2. Référencez-les dans votre documentation :

```markdown
![Description de l'image](/img/nom-image.jpg)
```

**Exemple** :
```markdown
![Schéma de câblage](/img/cablage-capteur.jpg)
![Résultats de test](/img/graphique-resultats.png)
```

### Étape 5 : Utiliser les composants React (pour .mdx)

Si vous utilisez un fichier `.mdx`, vous pouvez utiliser des composants React :

#### InfoCard

```jsx
<InfoCard type="info" title="Titre" icon="📡">
Contenu de la carte
</InfoCard>
```

**Types disponibles** :
- `info` : Information générale (bleu)
- `warning` : Avertissement (jaune)
- `success` : Succès (vert)
- `danger` : Danger/Erreur (rouge)

#### FeatureGrid

```jsx
<FeatureGrid items={[
  {icon:"📡", title:"Titre 1", description:"Description 1"},
  {icon:"🗺️", title:"Titre 2", description:"Description 2"},
  {icon:"💾", title:"Titre 3", description:"Description 3"}
]} />
```

#### Table

```jsx
<Table headers={["Colonne 1", "Colonne 2", "Colonne 3"]}
  data={[
    ["Donnée 1", "Donnée 2", "Donnée 3"],
    ["Donnée 4", "Donnée 5", "Donnée 6"]
  ]}
/>
```

---

## 📝 Exemples par Pôle

### 🔌 Électronique

**Structure typique** :
1. Objectif et critères
2. Matériel (composants + équipement)
3. Procédure (code Arduino/ESP32)
4. Schémas de câblage
5. Résultats et validation
6. Dépannage

**Exemple de nom de fichier** : `test-capteur-distance.md`

### 🤖 ROS

**Structure typique** :
1. Architecture ROS (nœuds, topics, services)
2. Configuration et lancement
3. Tests et validation
4. Visualisation RViz2
5. Dépannage

**Exemple de nom de fichier** : `test-navigation-stack.mdx`

### 🧠 IA

**Structure typique** :
1. Modèle et architecture
2. Dataset et préparation
3. Entraînement
4. Évaluation (métriques)
5. Déploiement
6. Résultats

**Exemple de nom de fichier** : `test-detection-objets.mdx`

### ⚙️ Mécanique

**Structure typique** :
1. Conception CAO
2. Impression 3D
3. Assemblage
4. Tests de résistance
5. Validation dimensionnelle
6. Rapport

**Exemple de nom de fichier** : `test-assemblage-chassis.mdx`

---

## ✅ Checklist avant publication

Avant de publier votre documentation, vérifiez :

- [ ] Le frontmatter est correctement rempli
- [ ] Tous les exemples du template ont été remplacés
- [ ] Les sections sont complètes
- [ ] Les images sont ajoutées et référencées correctement
- [ ] Le code est formaté et fonctionnel
- [ ] Les tableaux sont remplis avec des données réelles
- [ ] Les liens sont valides
- [ ] La documentation est cohérente avec les autres docs

---

## 🎨 Bonnes pratiques

### Nommage des fichiers

- Utilisez des noms descriptifs en minuscules
- Séparez les mots par des tirets (`-`)
- Évitez les espaces et caractères spéciaux

**Exemples** :
- ✅ `test-capteur-distance.md`
- ✅ `test-navigation-stack.mdx`
- ❌ `Test Capteur Distance.md`
- ❌ `test_capteur_distance.md`

### Structure du contenu

- **Soyez clair et concis** : Une section = un objectif
- **Utilisez des exemples** : Code, schémas, graphiques
- **Ajoutez des images** : Un schéma vaut mieux qu'un long texte
- **Documentez les problèmes** : Le dépannage aide les autres

### Code

- **Commentez votre code** : Expliquez les parties importantes
- **Utilisez la coloration syntaxique** : Spécifiez le langage
- **Testez le code** : Assurez-vous qu'il fonctionne

**Exemple** :
````markdown
```cpp
// Configuration des pins
#define TRIG_PIN 2
#define ECHO_PIN 3
```
````

---

## 🔗 Ressources supplémentaires

### Documentation Docusaurus

- [Markdown Syntax](https://docusaurus.io/docs/markdown-features)
- [MDX Syntax](https://docusaurus.io/docs/markdown-features/react)
- [Frontmatter](https://docusaurus.io/docs/markdown-features/react#front-matter)

### Composants disponibles

Tous les composants React sont dans `src/components/` :
- `InfoCard.js`
- `FeatureGrid.js`
- `Table.js`

### Exemples visuels

Consultez le fichier [`exemples-visuels.md`](./exemples-visuels.md) pour des exemples de :
- Schémas ASCII pour l'électronique
- Diagrammes pour ROS
- Pipelines pour l'IA
- Schémas mécaniques
- Exemples de code formaté

---

## ❓ Questions fréquentes

### Q: Puis-je modifier un template existant ?

**R:** Oui, mais il est recommandé de créer une copie pour votre nouveau test plutôt que de modifier le template original.

### Q: Dois-je utiliser .md ou .mdx ?

**R:** 
- **.md** : Pour l'électronique (markdown simple)
- **.mdx** : Pour ROS, IA, Mécanique (si vous voulez utiliser des composants React)

### Q: Comment ajouter des badges de couleur ?

**R:** Utilisez les classes CSS disponibles :

```markdown
<span className="badge-sticker badge-electronique">⚡ Électronique</span>
<span className="badge-sticker badge-it">🤖 ROS</span>
<span className="badge-sticker badge-it">🧠 IA</span>
<span className="badge-sticker badge-mecanique">⚙️ Mécanique</span>
```

### Q: Où placer les images ?

**R:** Placez toutes les images dans `static/img/` et référencez-les avec `/img/nom-image.jpg`

---

## 📞 Support

Si vous avez des questions ou besoin d'aide :

1. Consultez les exemples existants dans `docs/Electronics/`, `docs/ROS/`, etc.
2. Vérifiez la documentation Docusaurus
3. Contactez l'équipe de documentation

---

## 🎉 Prêt à commencer ?

1. Choisissez votre template
2. Copiez-le dans le bon dossier
3. Remplissez les sections
4. Ajoutez vos images
5. Testez votre documentation
6. Publiez !

**Bon courage avec votre documentation ! 🚀**

---

*Guide créé le : [Date]*
*Dernière mise à jour : [Date]*
*Version : 1.0*
