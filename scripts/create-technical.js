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
