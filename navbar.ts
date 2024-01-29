import type { Navbar } from '@docusaurus/theme-common';

const navbar: Navbar = {
  hideOnScroll: true,
  title: 'Gebruikersonderzoeken',
  items: [
    {
      type: 'docSidebar',
      sidebarId: 'gebruikersonderzoekSidebar',
      position: 'left',
      label: 'Onderzoek bekijken',
    },
    {
      type: 'docSidebar',
      sidebarId: 'meedoenSidebar',
      position: 'left',
      label: 'Onderzoek delen',
    },
    {
      type: 'docSidebar',
      sidebarId: 'vragenSidebar',
      position: 'left',
      label: 'Vragen',
    },
  ],
};

export default navbar;
