import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <Span>© 2023 Raimundo Rincon. todos los derechos reservados.</Span>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  /* width: 100%; */
  height: 2.2rem;
  text-align: center;
  display: grid;
  place-content: center;
  border-top: 1px solid gray;
`;
const Span = styled.span``;

export default Footer;
