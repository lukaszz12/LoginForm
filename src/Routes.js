import * as React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="Login" initial={true}/>
          <Scene key="signup" component={Signup} title="Register" />
        </Stack>
      </Router>
    )
  }
}