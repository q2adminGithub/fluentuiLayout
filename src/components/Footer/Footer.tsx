// define imports of ui libs
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import {
    Text,
  } from "@fluentui/react-components";


// add tokens
const verticalGapStackTokens: IStackTokens = {
    childrenGap: 10,
    padding: 10,
  };

// define current date and time
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
console.log(currDate)

// define component
export const Footer = () => {
  return (   
    <div className="footer">
      <Stack horizontal horizontalAlign='space-between' tokens={verticalGapStackTokens}>
        <Text block>PLANKTON+: Version 0.0.0.9000</Text>
        <Text>Benutzer: Testuser, Rolle: Admin"</Text>
        <Text>{currDate} {currTime}</Text>
      </Stack>
    </div>
  );
};