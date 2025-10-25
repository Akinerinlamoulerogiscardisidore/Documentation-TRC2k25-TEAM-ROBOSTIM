# 🧪 Guide de tests et documentation

Ce guide vous explique comment ajouter des tests automatisés et améliorer la documentation de votre site TRC - Team ROBOSTIM.

## 📋 Types de tests à implémenter

### 1. Tests unitaires
- Tests des composants React
- Tests des utilitaires et helpers
- Tests des configurations

### 2. Tests d'intégration
- Tests des pages complètes
- Tests des workflows de navigation
- Tests des fonctionnalités cross-browser

### 3. Tests de documentation
- Validation des liens
- Vérification de la syntaxe Markdown
- Tests de cohérence du contenu

## 🛠️ Configuration des tests

### 1. Installation des dépendances
```bash
# Installer Jest et les outils de test
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event

# Installer les outils de test Docusaurus
npm install --save-dev @docusaurus/testing-utils

# Installer les outils de linting
npm install --save-dev eslint-plugin-jest eslint-plugin-testing-library

# Installer les outils de test E2E
npm install --save-dev playwright @playwright/test
```

### 2. Configuration de Jest
Créez le fichier `jest.config.js` :

```javascript
// jest.config.js
const {createJestConfig} = require('@docusaurus/testing-utils');

const config = createJestConfig({
  // Configuration Jest
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapping: {
    '^@site/(.*)$': '<rootDir>/src/$1',
    '^@theme/(.*)$': '<rootDir>/src/theme/$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
    }],
  },
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/__tests__/**',
    '!src/**/node_modules/**',
  ],
});

module.exports = config;
```

### 3. Configuration des tests
Créez le fichier `src/setupTests.js` :

```javascript
// src/setupTests.js
import '@testing-library/jest-dom';

// Configuration globale des tests
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock pour les modules Docusaurus
jest.mock('@docusaurus/useDocusaurusContext', () => ({
  useDocusaurusContext: () => ({
    siteConfig: {
      title: 'TRC - Team ROBOSTIM',
      url: 'https://test.com',
      baseUrl: '/',
    },
  }),
}));
```

## 🧪 Tests des composants

### 1. Test du composant InfoCard
Créez le fichier `src/components/__tests__/InfoCard.test.js` :

```javascript
// src/components/__tests__/InfoCard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoCard from '../InfoCard';

describe('InfoCard', () => {
  test('renders with title and children', () => {
    render(
      <InfoCard type="info" title="Test Title" icon="🎯">
        Test content
      </InfoCard>
    );
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('renders with different types', () => {
    const { rerender } = render(
      <InfoCard type="success" title="Success">
        Success content
      </InfoCard>
    );
    
    expect(screen.getByText('Success')).toBeInTheDocument();
    
    rerender(
      <InfoCard type="warning" title="Warning">
        Warning content
      </InfoCard>
    );
    
    expect(screen.getByText('Warning')).toBeInTheDocument();
  });
});
```

### 2. Test du composant FeatureGrid
Créez le fichier `src/components/__tests__/FeatureGrid.test.js` :

```javascript
// src/components/__tests__/FeatureGrid.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import FeatureGrid from '../FeatureGrid';

const mockFeatures = [
  {
    title: 'Test Feature 1',
    description: 'Test description 1',
    icon: '🔧'
  },
  {
    title: 'Test Feature 2',
    description: 'Test description 2',
    icon: '⚡'
  }
];

describe('FeatureGrid', () => {
  test('renders features correctly', () => {
    render(<FeatureGrid features={mockFeatures} />);
    
    expect(screen.getByText('Test Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Test Feature 2')).toBeInTheDocument();
    expect(screen.getByText('Test description 1')).toBeInTheDocument();
    expect(screen.getByText('Test description 2')).toBeInTheDocument();
  });

  test('renders with empty features array', () => {
    render(<FeatureGrid features={[]} />);
    
    // Vérifier qu'aucun contenu n'est affiché
    expect(screen.queryByText('Test Feature 1')).not.toBeInTheDocument();
  });
});
```

## 📄 Tests des pages

### 1. Test de la page d'accueil
Créez le fichier `src/pages/__tests__/index.test.js` :

```javascript
// src/pages/__tests__/index.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../index';

// Mock pour les composants Docusaurus
jest.mock('@docusaurus/useDocusaurusContext', () => ({
  useDocusaurusContext: () => ({
    siteConfig: {
      title: 'TRC - Team ROBOSTIM',
      tagline: 'Innovation robotique',
    },
  }),
}));

describe('Home Page', () => {
  test('renders main heading', () => {
    render(<Home />);
    
    expect(screen.getByText(/TRC - Team ROBOSTIM/i)).toBeInTheDocument();
  });

  test('renders hero section', () => {
    render(<Home />);
    
    expect(screen.getByText(/Innovation robotique/i)).toBeInTheDocument();
  });

  test('renders feature sections', () => {
    render(<Home />);
    
    expect(screen.getByText(/Pôle Électronique/i)).toBeInTheDocument();
    expect(screen.getByText(/Pôle Mécanique/i)).toBeInTheDocument();
    expect(screen.getByText(/Pôle IT/i)).toBeInTheDocument();
  });
});
```

### 2. Test de la page équipe
Créez le fichier `src/pages/__tests__/equipe.test.js` :

```javascript
// src/pages/__tests__/equipe.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Equipe from '../equipe';

describe('Equipe Page', () => {
  test('renders team members', () => {
    render(<Equipe />);
    
    expect(screen.getByText(/Notre Team/i)).toBeInTheDocument();
    expect(screen.getByText(/Pôle Électronique/i)).toBeInTheDocument();
    expect(screen.getByText(/Pôle Mécanique/i)).toBeInTheDocument();
    expect(screen.getByText(/Pôle IT/i)).toBeInTheDocument();
  });

  test('renders contact section', () => {
    render(<Equipe />);
    
    expect(screen.getByText(/Contact et collaboration/i)).toBeInTheDocument();
    expect(screen.getByText(/teamrobostim@gmail.com/i)).toBeInTheDocument();
  });
});
```

## 🔗 Tests de liens et navigation

### 1. Test des liens internes
Créez le fichier `src/utils/__tests__/linkValidation.test.js` :

```javascript
// src/utils/__tests__/linkValidation.test.js
import { validateInternalLinks, validateExternalLinks } from '../linkValidation';

describe('Link Validation', () => {
  test('validates internal links', () => {
    const validLinks = [
      '/equipe',
      '/galerie',
      '/about',
      '/universite'
    ];
    
    validLinks.forEach(link => {
      expect(validateInternalLinks(link)).toBe(true);
    });
  });

  test('validates external links', () => {
    const validExternalLinks = [
      'https://github.com',
      'https://linkedin.com',
      'mailto:teamrobostim@gmail.com'
    ];
    
    validExternalLinks.forEach(link => {
      expect(validateExternalLinks(link)).toBe(true);
    });
  });
});
```

### 2. Utilitaire de validation des liens
Créez le fichier `src/utils/linkValidation.js` :

```javascript
// src/utils/linkValidation.js
export const validateInternalLinks = (link) => {
  const internalPages = ['/equipe', '/galerie', '/about', '/universite'];
  return internalPages.includes(link);
};

export const validateExternalLinks = (link) => {
  const urlPattern = /^https?:\/\/|^mailto:|^tel:/;
  return urlPattern.test(link);
};

export const validateAllLinks = (links) => {
  return links.every(link => 
    validateInternalLinks(link) || validateExternalLinks(link)
  );
};
```

## 📝 Tests de documentation

### 1. Test de syntaxe Markdown
Créez le fichier `src/utils/__tests__/markdownValidation.test.js` :

```javascript
// src/utils/__tests__/markdownValidation.test.js
import { validateMarkdownSyntax, checkMarkdownLinks } from '../markdownValidation';

describe('Markdown Validation', () => {
  test('validates markdown syntax', () => {
    const validMarkdown = `
# Titre
## Sous-titre
- Liste item 1
- Liste item 2
**Texte en gras**
*Texte en italique*
    `;
    
    expect(validateMarkdownSyntax(validMarkdown)).toBe(true);
  });

  test('checks markdown links', () => {
    const markdownWithLinks = `
[Lien interne](/equipe)
[Lien externe](https://github.com)
[Email](mailto:teamrobostim@gmail.com)
    `;
    
    expect(checkMarkdownLinks(markdownWithLinks)).toBe(true);
  });
});
```

### 2. Utilitaire de validation Markdown
Créez le fichier `src/utils/markdownValidation.js` :

```javascript
// src/utils/markdownValidation.js
export const validateMarkdownSyntax = (markdown) => {
  // Vérifier les titres
  const hasTitles = /^#+\s+.+$/m.test(markdown);
  
  // Vérifier les listes
  const hasLists = /^[\s]*[-*+]\s+.+$/m.test(markdown);
  
  // Vérifier le formatage
  const hasFormatting = /\*\*.*\*\*|\*.*\*/.test(markdown);
  
  return hasTitles && (hasLists || hasFormatting);
};

export const checkMarkdownLinks = (markdown) => {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const links = [...markdown.matchAll(linkPattern)];
  
  return links.every(([, , url]) => 
    url.startsWith('/') || 
    url.startsWith('http') || 
    url.startsWith('mailto:') ||
    url.startsWith('tel:')
  );
};
```

## 🎭 Tests E2E avec Playwright

### 1. Configuration de Playwright
Créez le fichier `playwright.config.js` :

```javascript
// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

### 2. Tests E2E
Créez le fichier `tests/e2e/navigation.spec.js` :

```javascript
// tests/e2e/navigation.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Navigation', () => {
  test('should navigate to team page', async ({ page }) => {
    await page.goto('/');
    
    // Cliquer sur le lien équipe
    await page.click('text=Équipe');
    
    // Vérifier que nous sommes sur la page équipe
    await expect(page).toHaveURL(/.*equipe/);
    await expect(page.locator('h1')).toContainText('Notre Team');
  });

  test('should navigate to gallery page', async ({ page }) => {
    await page.goto('/');
    
    // Cliquer sur le lien galerie
    await page.click('text=Galerie');
    
    // Vérifier que nous sommes sur la page galerie
    await expect(page).toHaveURL(/.*galerie/);
    await expect(page.locator('h1')).toContainText('Galerie');
  });

  test('should display team members', async ({ page }) => {
    await page.goto('/equipe');
    
    // Vérifier la présence des membres d'équipe
    await expect(page.locator('text=Pôle Électronique')).toBeVisible();
    await expect(page.locator('text=Pôle Mécanique')).toBeVisible();
    await expect(page.locator('text=Pôle IT')).toBeVisible();
  });
});
```

## 📊 Scripts de test

### 1. Ajouter les scripts dans package.json
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:all": "npm run test && npm run test:e2e",
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix"
  }
}
```

### 2. Configuration ESLint
Créez le fichier `.eslintrc.js` :

```javascript
// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    '@docusaurus/eslint-config',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'testing-library',
    'jest',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
```

## 🚀 Intégration continue

### 1. GitHub Actions pour les tests
Créez le fichier `.github/workflows/test.yml` :

```yaml
name: Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
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
      
    - name: Run linting
      run: npm run lint
      
    - name: Run unit tests
      run: npm run test:coverage
      
    - name: Run E2E tests
      run: npm run test:e2e
      
    - name: Upload coverage reports
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info
```

## 📈 Monitoring des tests

### 1. Couverture de code
```bash
# Générer le rapport de couverture
npm run test:coverage

# Voir le rapport dans le navigateur
open coverage/lcov-report/index.html
```

### 2. Tests de performance
```bash
# Installer Lighthouse CI
npm install -g @lhci/cli

# Configurer Lighthouse
echo '{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000"]
    },
    "assert": {
      "assertions": {
        "categories:performance": ["warn", {"minScore": 0.8}],
        "categories:accessibility": ["error", {"minScore": 0.9}]
      }
    }
  }
}' > lighthouserc.json
```

## 🎯 Bonnes pratiques

### 1. Tests unitaires
- Testez chaque composant isolément
- Utilisez des mocks pour les dépendances
- Couvrez les cas d'erreur et les cas limites

### 2. Tests d'intégration
- Testez les interactions entre composants
- Vérifiez les flux de données
- Testez les états d'erreur

### 3. Tests E2E
- Testez les parcours utilisateur complets
- Vérifiez la compatibilité cross-browser
- Testez les performances

### 4. Documentation
- Documentez vos tests
- Utilisez des noms de tests descriptifs
- Maintenez les tests à jour

## 🔧 Dépannage

### Problèmes courants
1. **Tests qui échouent** : Vérifiez les mocks et les imports
2. **Tests lents** : Optimisez les tests E2E
3. **Couverture faible** : Ajoutez des tests pour les cas manqués

### Commandes utiles
```bash
# Nettoyer le cache
npm run clear

# Relancer les tests
npm run test:watch

# Debug des tests E2E
npm run test:e2e:ui
```

---
*Guide mis à jour : Octobre 2025*
