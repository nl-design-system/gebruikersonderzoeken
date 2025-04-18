import type { Navbar } from '@docusaurus/theme-common';

const navbar: Navbar = {
  hideOnScroll: true,
  items: [
    {
      sidebarId: 'gebruikersonderzoekSidebar',
      label: 'Onderzoek bekijken',
      position: 'left',
      type: 'docSidebar',
    },
    {
      sidebarId: 'meedoenSidebar',
      label: 'Onderzoek delen',
      position: 'left',
      type: 'docSidebar',
    },
    {
      sidebarId: 'vragenSidebar',
      label: 'Vragen',
      position: 'left',
      type: 'docSidebar',
    },
  ],
  title: 'Gebruikersonderzoeken',
};

export default navbar;
