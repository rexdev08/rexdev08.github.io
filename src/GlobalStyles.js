import { createGlobalStyle } from "styled-components";
import galaxy from "./assets/galaxy.jpg";

const theme = {
  dark: {
    colorPrimary: "#3997f7",
    bgColor: "#1D1D1F",
    textColor: "#FAFAFA",
  },
  light: {
    colorPrimary: "#3997f7",
    bgColor: "#FAFAFA",
    textColor: "#1D1D1F",
  },
};

const breakpoints = {
  //breakpoints
  xs: "320px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

const GlobalStyles = createGlobalStyle`



//variables css
:root{

  //colores
  --color-primary:#3997f7;
  --color-secondary:#086ACD;
  --color-third:#0A68CB;
  --color-fourth:#29d8db;
  --color-fifth:#242E6D;

  --color-text: #7A7A7A;
  --color-text-black:#4A4A4A;
  

  //font-family
  --ff-primary:'Montserrat', sans-serif;
  --ff-body:var(--ff-primary);
  --ff-headeing:var(--ff-primary);
  
    //font-size
    --fs-small:.8125rem;//13px
    --fs-small-plus:0.9rem;//14px
    --fs-regular:1rem;//16px
    --fs-medium:1.2rem;//19.2
    --fs-large:1.875rem;//30px
    --fs-xl:2rem;//36px

  //font-weight
  
  --fw-small:300;
  --fw-regular:400;
  --fw-medium:500;
  --fw-bold:700;
  --fw-black:900;

  --fs-body:var(--fs-small);
  --fs-nav:var(--fs-regular);
  --fs-button:var(--fs-small);
  --fs-h1:clamp(1.2rem,9vw, 3.8rem);
  --fs-h2:clamp(1.2rem, 10vw, 2.3rem);
  --fs-h3:clamp(1.1rem, 10vw, 2rem);
  --fs-h4:clamp(1rem, 10vw, 1.9rem);

  //border-radius
  --br-50:.5rem;
  --br-100:1rem;

  //transitions

--ease:color .5s ease, background-color .2s ease;



}


body{
  background-color:${({ theme }) => theme.bgColor};
  color:${({ theme }) => theme.textColor};
  /* transition:background-color .4s ease, color .4s ease; */
}

//css reset
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: var(--ff-body);
}

html{
  scroll-behavior:smooth ;
}

//scroll-bar
::-webkit-scrollbar{
  background-color:#1D1D1F;
}

::-webkit-scrollbar-thumb{
  background-color:var(--color-primary);
  border-radius:.5rem;
  :hover{
    background-color: whitesmoke;
  }
}

::-webkit-scrollbar-track{
  background-color:inherit;
}

//headings
h1{
  font-size:var(--fs-h1);
  font-weight:var(--fw-black);
}
h2{
  font-size:var(--fs-h2);
  font-weight:var(--fw-black);
}
h3{
  font-size:var(--fs-h3);
  font-weight:var(--fw-black);
}
h4{
  font-size:var(--fs-h4);
  font-weight:var(--fw-black);
}


a{
  font-size:var(--fs-medium);
  text-decoration: none;
  color:inherit;
}


img{
  width:100%;
  height:auto;
}

li{
  list-style:none;
}



.HTML{
    background: linear-gradient(344.99deg, #E44F26 -38.4%, #ED9B77 85.69%);
  }

  .Javascript{
    background:linear-gradient(344.99deg, #DE964A 17.23%, #F7DF1E 99.34%);
  }

  .SCSS{
    background: linear-gradient(164.99deg, #CDADCC -8.01%, rgba(189, 17, 182, 0.79) 122.19%);
  }


.React{
  background: linear-gradient(344.99deg, #2A2377 -12.85%, #1ABCFE 111.87%);
}


.Figma{
  background: linear-gradient(344.99deg, #F24E1E -24.87%, #FF7262 0.18%, #A259FF 31.73%, #1ABCFE 67.91%, #0ACF83 85.54%);
}

.Github{
  background-image:url(${galaxy});
}

.Node{
  background: linear-gradient(164.99deg, #C3EEC7 -12.85%, #85F200 111.87%);
  color:
  black;
}

.Firebase{
  background: linear-gradient(87.86deg, #F6820C -12.85%, #FCCA3F 111.87%);
}

.curve {
    position: absolute;
    height: 250px;
    width: 100%;
    bottom: 0;
    text-align: center;
}

.curve::before {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    transform: translate(85%, 60%);
    background-color: hsl(216, 21%, 16%);
}

.curve::after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    background-color: #3c31dd;
    transform: translate(-4%, 40%);
    z-index: -1;
}
`;

export { GlobalStyles, breakpoints, theme };
