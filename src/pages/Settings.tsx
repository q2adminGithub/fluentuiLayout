// import from ui libs
import React from 'react';

// import components
import Layout from '../components/Layout/Layout';

// define typescript interface
export interface ISettingsPageProps{};

const SettingsPage: React.FunctionComponent<ISettingsPageProps> = props => {
  return(
    <Layout>
      <div>
        <h1>This is the settings page.</h1>
      </div>;
    </Layout>
  )
};

export default SettingsPage;