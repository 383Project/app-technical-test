import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import { Home, WeatherDay } from "./screens";

const Navigation = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home} title="Home"  hideNavBar={true}/>
      <Scene key="weatherDay" component={WeatherDay} title="weatherDay"  hideNavBar={true}/>
    </Stack>
  </Router>
);

export default Navigation;