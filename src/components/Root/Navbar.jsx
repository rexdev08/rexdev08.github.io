import styled from "styled-components";
import { breakpoints } from "../../GlobalStyles";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderStyled>
      <Navigation>
        <a href="#">
          <LogoStyled>Raimundo Rincon</LogoStyled>
        </a>

        <MenuBtn onClick={() => setOpen(!open)}>
          {open ? <CgClose /> : <CgMenu />}
        </MenuBtn>

        <NavbarContainer open={open} onMouseLeave={() => setOpen(false)}>
          <UlStyled>
            <LiStyled>
              <AStyled href="#acerca-de-mi" onClick={() => setOpen(false)}>
                Acerca de mi
              </AStyled>
            </LiStyled>
            <LiStyled>
              <AStyled href="#proyectos" onClick={() => setOpen(false)}>
                Proyectos
              </AStyled>
            </LiStyled>
            <LiStyled>
              <AStyled href="#contacto" onClick={() => setOpen(false)}>
                Contacto
              </AStyled>
            </LiStyled>
          </UlStyled>
        </NavbarContainer>
      </Navigation>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  min-height: 4.375rem;
  width: 100%;
  /* background-color: pink; */
  padding-block: 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  backdrop-filter: blur(0.3rem);
  border-bottom: 1px solid;
  font-weight:600;
`;

const Navigation = styled.div`
  width: 100%;
  /* background-color: navajowhite; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;

  @media (min-width: ${breakpoints.lg}) {
    flex-flow: row;
    padding-inline: 10rem;
  }
`;

//logo
const LogoStyled = styled.span`
  font-size: var(--fs-medium);
  font-weight: 900;
`;

//nav Container
const NavbarContainer = styled.nav`
  width: 100%;
  transition: height 0.3s ease;
  height: ${({ open }) => (open ? "50vh" : "0")};

  overflow: hidden;
  /* background-color: orange; */
  display: grid;

  @media (min-width: ${breakpoints.lg}) {
    height: 100%;
    width: auto;
  }
`;

const UlStyled = styled.ul`
  backdrop-filter: blur(0.3rem);
  display: flex;
  flex-flow: column;
  justify-content: center;
  /* gap:1rem; */
  background-color: ${({ theme }) => theme.bgColor + "59"};
  @media (min-width: ${breakpoints.lg}) {
    flex-flow: row;
    background-color: transparent;
  }
`;

//links
const LiStyled = styled.li`
  display: grid;
  /* background-color: green; */
`;

const AStyled = styled.a`
  text-align: center;
  padding: 1rem;
  /* background-color: yellow; */
  transition: background-color 0.2s ease;
  border-radius: var(--br-50);
  color: inherit;

  :hover {
    color: white;
    background-color: ${({ theme }) => theme.colorPrimary};
  }
`;

//menu button
const MenuBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: var(--fs-large);
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;

  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`;

export default Navbar;
