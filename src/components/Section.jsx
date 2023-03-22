import styled from "styled-components";

const Section = ({ title, children, id }) => {
  return (
    <SectionStyled id={id}>
      {title && <H2>{title}</H2>}
      {children}
    </SectionStyled>
  );
};

const SectionStyled = styled.section`
  min-height: 100vh;
  padding-inline: 1rem;
  padding-block: 80px;
  display: grid;
  place-content: center;
`;

const H2 = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.textColor};
`;

export default Section;
