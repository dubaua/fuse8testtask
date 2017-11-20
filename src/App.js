import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link as RLink
} from "react-router-dom";
import styled from "styled-components";
import "./fonts/hkgrotesk.css";
import Callback from "./Callback";
import CloudHosting from "./CloudHosting";
import DedicatedServers from "./DedicatedServers";
import SFTPHosting from "./SFTPHosting";
import Colocation from "./Colocation";
import Solutions from "./Solutions";
import tile from "./tile.png";

const Page = styled.div`
  font-family: "HK Grotesk", "Helvetica Neue", Arial, Helvetica, sans-serif;
  color: #222629;
  display: flex;
  min-height: 100vh;
  overflow: hidden;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 56px;
  flex-basis: 50%;
  max-width: 50%;
  box-sizing: border-box;
`;
const Link = styled(RLink)`
  display: block;
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  line-height: 1;
  padding: 14px;
  &:hover {
    color: blue;
  }
`;
const Content = styled.div`
  background: url(${tile}) repeat center center transparent;
  color: white;
  flex-basis: 50%;
  max-width: 50%;
  display: flex;
  align-items: center;
  padding: 48px;
  box-sizing: border-box;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    right: -100%;
    left: 5%;
    background: #222629;
    z-index: -1;
    transform: skew(20deg, 0);
  }
`;

const App = () => (
  <Router>
    <Page>
      <Nav>
        <Link to="/">Why Hyve</Link>
        <Link to="/cloud-hosting">Cloud Hosting</Link>
        <Link to="/dedicated-servers">Dedicated Servers</Link>
        <Link to="/sftp-hosting">SFTP Hosting</Link>
        <Link to="/colocation">Colocation</Link>
        <Link to="/solutions">Solutions</Link>
      </Nav>
      <Content>
        <Route exact path="/" component={Callback} />
        <Route path="/cloud-hosting" component={CloudHosting} />
        <Route path="/dedicated-servers" component={DedicatedServers} />
        <Route path="/sftp-hosting" component={SFTPHosting} />
        <Route path="/colocation" component={Colocation} />
        <Route path="/solutions" component={Solutions} />
      </Content>
    </Page>
  </Router>
);

export default App;
