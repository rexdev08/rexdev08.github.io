import styled from "styled-components";
import pic from "../../assets/pic.png";
import background from "../../assets/background.jpg";
import { breakpoints } from "../../GlobalStyles";
import { useEffect, useState } from "react";
import fondo from "../../assets/fondo-azul.png";

const Hero = () => {
  const [weather, setWeather] = useState(null);

  const weatherApiKey = import.meta.env.VITE_WEATHER_KEY;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((coords) => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${coords.coords.latitude}&lon=${coords.coords.longitude}&appid=${weatherApiKey}&units=metric`
            );
            const data = await response.json();
            // console.log(data);
            setWeather(data);
          } catch (error) {
            console.log(error);
          }
        };

        fetchData();
      });
    }
  }, []);

  return (
    <HeroSection>
      {weather && (
        <ClimaContainer>
          <span>
            {weather.sys.country} {weather.name}{" "}
            {String(weather.main.temp).slice(0, 2)}
            °C
          </span>
          <IconoClima
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="icon"
          />
        </ClimaContainer>
      )}
      <FlexContainer>
        <TextContainer>
          <H1>Hola, soy</H1>
          <H1>Raimundo Rincon</H1>
          <H2>Desarrollador Front-end</H2>
        </TextContainer>
        <a href="#acerca-de-mi">
          <ProfilePicContainer>
            <ProfilePic background={background} src={pic} />
          </ProfilePicContainer>
        </a>
      </FlexContainer>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  margin-top: 70px;
  min-height: calc(100vh - 70px);
  /* background-color: red; */
  display: grid;
  place-content: center;
  background: #2980b9 url(${fondo}) repeat 0 0;
  padding: 1rem;
  position: relative;
  animation: 10s linear 0s normal none infinite animate;

  @keyframes animate {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 500px 0;
    }
  }
`;

const FlexContainer = styled.div`
  max-width: ${breakpoints.lg};
  display: flex;
  flex-flow: row wrap-reverse;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const H1 = styled.h1`
  /* font-weight: 500; */
  opacity: 0;
  animation: fadein-name 1s 0.1s 1 ease-in-out forwards;
  translate: 0 100px;
  /* font-size: clamp(18px, 10vw, 35px); */

  @keyframes fadein-name {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      translate: 0 0;
    }
  }
`;

const H2 = styled.h2`
  font-weight: 600;
  opacity: 0;
  text-align: center;
  /* font-size: clamp(34px, 10vw, 40px); */
  animation: fadein-title 1s 0.5s 1 ease-in-out forwards;
  @keyframes fadein-title {
    0% {
      opacity: 0;
      translate: 0 100px;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ProfilePicContainer = styled.div``;

const ProfilePic = styled.img`
  opacity: 0;
  width: clamp(180px, 20vw, 300px);
  aspect-ratio: 1/1;
  object-fit: cover;
  /* height: clamp(180px, 20vw, 300px); */
  display: grid;
  border-radius: 50%;
  outline: 15px solid rgba(228, 229, 235, 0.626);
  animation: expanding 0.7s 1.2s 1 ease-in-out forwards;
  background-color: #ffffff;
  transition: transform 0.5s ease, border-radius 0.5s ease;
  :hover {
    background-color: transparent;
    background-image: url(${background});
    background-size: 100% 100%;
    transform: scale(1.1);
    border-radius: 10%;
  }

  @keyframes expanding {
    0% {
      scale: 1.4;
      opacity: 0;
      box-shadow: 10px -10px 30px 1px rgba(47, 0, 255, 0.693),
        -10px 5px 30px 1px rgba(3, 199, 233, 0.737),
        10px 10px 30px 1px rgba(255, 255, 255, 0.335);
    }
    50% {
      box-shadow: 10px -10px 30px 50px rgba(0, 255, 42, 0),
        -10px 5px 30px 50px rgba(6, 133, 6, 0),
        10px 5px 30px 250px rgba(187, 187, 187, 0);
    }
    100% {
      scale: 1;
      opacity: 1;
    }
  }
`;

const ClimaContainer = styled.div`
  width: max-content;
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.6rem;
  font-weight: bold;
  border: solid;
  border-radius: 1rem;
  padding-inline-start: 0.3rem;
`;

const IconoClima = styled.img`
  width: 3rem;
`;
export default Hero;
