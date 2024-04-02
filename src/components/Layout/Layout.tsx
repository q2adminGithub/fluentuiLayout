// import ui libs
import { ReactNode } from 'react';
import { FluentProvider, webLightTheme} from "@fluentui/react-components";

// import local files
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';


// define typescript type
type LayoutProps = {children?: ReactNode}

export default function Layout ({ children }: LayoutProps) {
  return (
    <>      
      <FluentProvider theme={webLightTheme}>
        <div className="grid-container">
          <Header />
          <Navbar />
          {children}
          <Footer />
        </div>
      </FluentProvider>      
    </>
  );
}