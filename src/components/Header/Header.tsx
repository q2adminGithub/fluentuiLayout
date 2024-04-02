// define imports of ui libs
import {
  Image,
  Title3,
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
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

// define imports of local files
import logo from '../../logo.svg';

// add icons
const AddIcon = bundleIcon(AddFilled, AddRegular);
const ArrowDownloadIcon = bundleIcon(ArrowDownloadFilled, ArrowDownloadRegular);
const ShareIcon = bundleIcon(ShareFilled, ShareRegular);
const InfoIcon = bundleIcon(InfoFilled, InfoRegular);
const PersonIcon = bundleIcon(PersonFilled, PersonRegular);

// define component
export const Header = () => {
  return (   
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
  );
};