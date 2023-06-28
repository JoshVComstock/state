import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/react.svg";

const NavAdmin = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const navLinks = [
    { to: "/graficos", label: "Grafico" },
    { to: "/sensores", label: "Sensores" },
    { to: "/datos", label: "Datos" },
    { to: "/informacion", label: "Informacion" },
    { to: "/mapas", label: "Mapas" },
  ];

  return (
    <NavbarContainer>
      <NavbarLogo to="/" onClick={() => handleNavigation("/")}>
        <LogoImage src={logo} alt="Logo" />
        <LogoText>Niveles</LogoText>
      </NavbarLogo>
      <NavbarLinks>
        {navLinks.map((link) => (
          <NavbarLink
            key={link.to}
            to={link.to}
            onClick={() => handleNavigation(link.to)}
          >
            {link.label}
          </NavbarLink>
        ))}
      </NavbarLinks>
      <Outlet />
    </NavbarContainer>
  );
};

export default NavAdmin;

const NavbarContainer = styled.div`
  width: 100%;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const NavbarLogo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
`;

const LogoText = styled.span`
  color: #212529;
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #212529;
  font-size: 16px;
  font-weight: 500;
  margin: 0 10px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #adb5bd;
    color: #fff;
  }
`;
