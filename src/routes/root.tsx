// import ui libs
import React from 'react';
import '@fluentui/react';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import {
  Image,
  Title3,
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  Text,
  FluentProvider,
  webLightTheme
} from "@fluentui/react-components";
import {  
  bundleIcon,
  AddRegular,
  AddFilled,
  ArrowDownloadRegular,  
  ArrowDownloadFilled,
  ShareRegular,
  ShareFilled,
  InfoRegular,
  InfoFilled,
  PersonRegular,
  PersonFilled
} from "@fluentui/react-icons";

// import local files
import logo from '../logo.svg';
import '../App.css';//styles

// import components
import Navbar from '../components/Navbar/Navbar';

// add icons
const AddIcon = bundleIcon(AddFilled, AddRegular);
const ArrowDownloadIcon = bundleIcon(ArrowDownloadFilled, ArrowDownloadRegular);
const ShareIcon = bundleIcon(ShareFilled, ShareRegular);
const InfoIcon = bundleIcon(InfoFilled, InfoRegular);
const PersonIcon = bundleIcon(PersonFilled, PersonRegular);

// add tokens
const verticalGapStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};

// define current date and time
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
console.log(currDate)

export const App: React.FunctionComponent = () => {
  return (
    <FluentProvider theme={webLightTheme}>
    <div className="grid-container">
      <div className="header">         
        <Image src={logo} height={45} width={45} />
        <div className='title'>
          <Title3> Unternehmensname </Title3>
        </div>
        <div className='commandBar'>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button icon={<AddIcon />}>New</Button>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>Email message</MenuItem>
                <MenuItem>Mail </MenuItem>
                <MenuItem>Calendar event</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button icon={<ArrowDownloadIcon />}>Download </Button>
            </MenuTrigger> 
            <MenuPopover>
              <MenuList>
                <MenuItem>Download report</MenuItem>
              </MenuList>
            </MenuPopover>           
          </Menu>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button icon={<ShareIcon />}>Share </Button>
            </MenuTrigger> 
            <MenuPopover>
              <MenuList>
                <MenuItem>Share Analysis</MenuItem>
              </MenuList>
            </MenuPopover>           
          </Menu>
        </div>
        <div className='commandBarFarItems'>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button icon={<InfoIcon />}></Button>
            </MenuTrigger>
            <MenuPopover>Info </MenuPopover>
          </Menu>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button icon={<PersonIcon />}></Button>
            </MenuTrigger>
            <MenuPopover>Person </MenuPopover>
          </Menu>
        </div>
      </div>
      <div className="sidenav">
        <Navbar />
      </div>
      <div className="footer">
        <Stack horizontal horizontalAlign='space-between' tokens={verticalGapStackTokens}>
          <Text block>PLANKTON+: Version 0.0.0.9000</Text>
          <Text>Benutzer: Testuser, Rolle: Admin"</Text>
          <Text>{currDate} {currTime}</Text>
        </Stack>
      </div>
    </div>
    </FluentProvider>
  );
};