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

// Mock pour les modules de navigation
jest.mock('@docusaurus/router', () => ({
  useHistory: () => ({
    push: jest.fn(),
    replace: jest.fn(),
  }),
  useLocation: () => ({
    pathname: '/',
    search: '',
    hash: '',
  }),
}));

// Mock pour les modules de thème
jest.mock('@docusaurus/theme-common', () => ({
  useThemeConfig: () => ({
    navbar: {
      title: 'TRC - Team ROBOSTIM',
      logo: {
        alt: 'TRC Logo',
        src: 'img/logo.svg',
      },
    },
  }),
}));

