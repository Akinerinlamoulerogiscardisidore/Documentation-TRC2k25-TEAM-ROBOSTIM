// docusaurus.config.js
module.exports = {
  title: 'TRC Challenge - Team ROBOSTIM',
  tagline: '',
  url: 'https://Akinerinlamoulerogiscardisidore.github.io',
  baseUrl: '/Documentation-TRC2k25-TEAM-ROBOSTIM/',
  organizationName: 'Akinerinlamoulerogiscardisidore',
  projectName: 'Documentation-TRC2k25-TEAM-ROBOSTIM',
  favicon: 'img/favicon.ico',

  // Configuration corrigée pour le mode sombre
  themeConfig: {
    // --- CONFIGURATION DU MODE SOMBRE/CLAIR CORRIGÉE ---
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false, // IMPORTANT: Doit être false pour activer le switch
      respectPrefersColorScheme: true,
      // SUPPRIMEZ complètement la section switchConfig qui cause l'erreur
    },

    // --- NAVBAR (reste identique) ---
    navbar: {
      title: '',
      logo: {
        alt: 'Logo TRC',
        src: 'img/logo.jpg', // Logo pour mode clair
        srcDark: 'img/logo.jpg', // Logo pour mode sombre
        width: 37,
        height: 60,
      },
      hideOnScroll: false,
      
      items: [
        {
          to: '/',
          label: '🏠 Home',
          position: 'right',
          activeBaseRegex: '^/$'
        },
        {
          type: 'docSidebar',
          sidebarId: 'defaultSidebar',
          label: '📚 Technical Documentation',
          position: 'right'
        },
        {
          to: '/equipe',
          label: '👥 Team',
          position: 'right'
        },
        {
          to: '/galerie',
          label: '🖼️ Pictures',
          position: 'right'
        },
        {
          href: 'https://github.com/TekBot-Robotics-Challenge/2025-Team-Club_de_Robotique_et_Automatisation-Docs',
          position: 'right',
          className: 'header-github-link',
          label: 'GitHub',
        }
      ],
    },

    // --- FOOTER (reste identique) ---
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Technical Documentation',
          items: [
            {
              label: 'Electronic',
              to: '/docs/Electronics/Test1',
            },
            {
              label: 'ROS',
              to: '/docs/ROS/Test1',
            },
            {
              label: 'AI',
              to: '/docs/IA/Test1',
            },
            {
              label: 'Mechanics',
              to: '/docs/Mechanics/Test1',
            },
          ],
        },
        {
          title: 'Team',
          items: [
            {
              label: 'Members',
              to: '/equipe',
            },
            {
              label: 'University',
              to: '/universite',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/TekBot-Robotics-Challenge/2025-Team-Club_de_Robotique_et_Automatisation-Docs',
            },
            {
              label: 'Tekbot TRC',
              href: 'https://trc.tekbot.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TRC-2K25 - ROBOSTIM. Built with Docusaurus.`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};