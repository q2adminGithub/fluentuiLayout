// import from ui libs
import React from 'react';

// import components
import Layout from '../components/Layout/Layout';

// define typescript interfaces
export interface IResultPageProps{};

const ResultPage: React.FunctionComponent<IResultPageProps> = props => {
  return(
    <Layout>
      <div>
        <h1>This is the result page.</h1>
      </div>;
    </Layout>
  )
};

export default ResultPage;