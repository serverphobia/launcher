import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import SignIn from './containers/SignIn';
import Global from './components/Global';
import Background from './components/Background';
import { Grid, GridItem } from './components/Grid';
import { CenteredFlexFill } from './components/Container';

const App = () => (
  <>
    <Global />
    <CenteredFlexFill>
      <Grid>
        <GridItem>
          <SignIn />
        </GridItem>
        <GridItem>
          <Background />
        </GridItem>
      </Grid>
    </CenteredFlexFill>
  </>
);

export default hot(App);
