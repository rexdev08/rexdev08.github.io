import styled from "styled-components";
import { breakpoints } from "../../GlobalStyles";
// import Section from "../Section";
import html from "../../assets/icons/html.png";
import sass from "../../assets/icons/sass.png";
import github from "../../assets/icons/github.png";
import javascript from "../../assets/icons/javascript.png";
import react from "../../assets/icons/react.png";
import figma from "../../assets/icons/figma.png";
import node from "../../assets/icons/node.png";
import firebase from "../../assets/icons/firebase.png";
import { useEffect, useRef } from "react";
import hexagons from "../../assets/hexagons.svg";

const About = () => {
  const iconsRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.3,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entrie) => {
        if (entrie.isIntersecting) {
          entrie.target.style.opacity = 1;
          // console.log(entrie)
          observer.unobserve(entrie.target);
        }
      });
    }, options);

    const observedItems = [iconsRef.current, textRef.current];
    observedItems.forEach((item) => observer.observe(item));

    return function clenUp() {
      observer.disconnect;
    };
  }, []);

  const skills = [
    {
      icon: html,
      name: "HTML",
      alt: "HTML",
    },
    {
      icon: sass,
      name: "SCSS",
      alt: "SCSS",
    },
    {
      icon: javascript,
      name: "Javascript",
      alt: "Javascript",
    },
    {
      icon: react,
      name: "React",
      alt: "React",
    },
    {
      icon: figma,
      name: "Figma",
      alt: "Figma",
    },
    {
      icon: github,
      name: "Github",
      alt: "Github",
    },
    {
      icon: node,
      name: "Node",
      alt: "Node",
    },
    {
      icon: firebase,
      name: "Firebase",
      alt: "Firebase",
    },
  ];

  return (
    <Section id="acerca-de-mi">
      <H2>Acerca de mi</H2>
      <FlexContainer>
        <TextContainer ref={textRef}>
          <Text>
            Desarrollador Front-end | SCSS | Javascript | React
            <br />
            <br />
            Soy un apasionado de la programación, dispuesto a trabajar con
            nuevas tecnologias.
            <br />
            <br />
            Una de mis mayores motivaciones es aprender. Así empecé haciendo
            cursos, tutoriales y devorando libros.
          </Text>
        </TextContainer>
        <SkillsContainer ref={iconsRef}>
          {skills.map(({ icon, name, alt }) => (
            <Skill key={name} className={name}>
              <img src={icon} alt={alt} lazy="true" />
              <span>{name}</span>
            </Skill>
          ))}
        </SkillsContainer>
      </FlexContainer>
    </Section>
  );
};

const FlexContainer = styled.div`
  max-width: ${breakpoints.xl};
  /* min-height: 400px; */
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  /* background-color: firebrick; */
`;

const Section = styled.section`
  min-height: 100vh;
  padding-inline: 1rem;
  padding-block: 80px;
  display: grid;
  place-content: center;
  background-color: #3481e648;
  background-image: url(${hexagons});
  background-position: center;
  /* background-repeat: no-repeat; */
  background-size: 100% 100%;
`;

const H2 = styled.h2`
  text-align: center;
  width: 100%;
  text-align: center;
  font-size: clamp(0.9rem, 10vw, 4rem);
  margin-bottom: 3rem;
  background: linear-gradient(27deg, rgb(255, 255, 255) 30%, rgb(5, 5, 5) 63%);
  background-clip: text;
  -webkit-background-clip: text;
  /* color: transparent; */
  animation: gradient 2s infinite alternate ease-in-out;
  background-size: 400% 400%;
`;

const TextContainer = styled.div`
  opacity: 0;
  transition: opacity 1s ease;
  /* height: 100%; */
  flex: 2;
  min-width: 280px;
  /* padding:1rem; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  /* height: 100%; */
  /* line-height: 1.6; */
  text-align: center;
  font-size: clamp(1rem, 7vw, 1.6rem);
  /* background-color: yellowgreen; */
  font-weight: 600;

  @media (min-width: 500px) {
    line-height: 1.6;
  }
`;

const SkillsContainer = styled.div`
  /* flex-basis: 100%; */
  opacity: 0;
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: opacity 1s ease;
`;

const Skill = styled.div`
  width: 100%;
  min-height: 100px;
  max-width: 90px;
  border-radius: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: var(--fw-bold);
  color: white;
  transform:skew(-9deg);

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export default About;
