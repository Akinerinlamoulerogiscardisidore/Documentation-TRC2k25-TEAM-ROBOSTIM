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
