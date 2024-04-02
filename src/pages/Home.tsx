// import local files
import Layout from "../components/Layout/Layout";

// define imports of styles
import '../App.css';

// define typescript interface
export interface IHomePageProps {};
 
const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  return(
    <Layout>
      <div>
        <h1>This is the home page.</h1>
      </div>;
    </Layout>
  )
};
 
export default HomePage;