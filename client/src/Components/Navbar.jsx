import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(Link)`
  font-size: 20px;
  margin-right: 2rem;
  color: inherit;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to={"/"}>Hussain_Developers</Tabs>
        <Tabs to={"/all"}>AllUser</Tabs>
        <Tabs to={"/add"}>AddUser</Tabs>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
