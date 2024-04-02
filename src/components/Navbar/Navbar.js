// import ui libs
import { Nav, initializeIcons } from '@fluentui/react';

// define styles
const navigationStyles = {
  root: {
    height: 'auto',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
    paddingTop: 'auto',
  },
};

// define links input
const links = [
  {
    links: [
      {
        name: 'Start',
        key:'home_plankton',
        url: '/',
        iconProps: {
          iconName: 'Home',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Resultate',
        key:'result_plankton',
        url: '/results',
        iconProps: {
          iconName: 'News',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },      
      {
        name: 'Modellinput',
        key: 'modelinput_plankton',
        url: '/data',
        iconProps: {
          iconName: 'CustomList',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Einstellungen',
        key: 'settings_plankton',
        url: '/settings',
        iconProps: {
          iconName: 'PlayerSettings',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },      
    ],
  },
];

// define component
const Navbar = () => {
  initializeIcons();
  return (
    <Nav
      groups={links}
      selectedKey='home_plankton'
      styles={navigationStyles}
    />
  );
};

export default Navbar;