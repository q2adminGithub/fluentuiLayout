// import from ui libs
import React from 'react';
import { Stack, IStackTokens} from '@fluentui/react/lib/Stack';
import { Text, Label} from "@fluentui/react-components";

// import components
import Layout from '../components/Layout/Layout';
import { DataGridDefault } from '../components/DataGridDefault';
import { PickData } from '../components/filters';

// add tokens
const verticalGapStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};

// define typescript interface
export interface IDataPageProps{};

const DataPage: React.FunctionComponent<IDataPageProps> = props => {
  return(
    <Layout>
      <div>
        <Stack tokens={verticalGapStackTokens} horizontal>
        <PickData label='From date' placeholder='Select a date...'></PickData>
        <PickData label='To date' placeholder='Select a date...'></PickData>
        </Stack>
        <Label>Filter by sales reps</Label>
        <Stack tokens={verticalGapStackTokens}>
          <Text weight='bold'> Table Title</Text>
          <DataGridDefault />
        </Stack>        
      </div>
    </Layout>
  )
};

export default DataPage;