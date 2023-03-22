import styled from "styled-components";
import disney from "../../assets/img-projects/disney.png";
import quotes from "../../assets/img-projects/quotes.png";
import react from "../../assets/icons/react.png";
import sass from "../../assets/icons/sass.png";
import netflix from "../../assets/img-projects/netflix.jpg";
import iclima from "../../assets/img-projects/iclima.jpg";
import icumbres from "../../assets/img-projects/icumbres.jpg";
import igastos from "../../assets/img-projects/igastos.jpg";
import treelink from "../../assets/img-projects/treelink.jpg";
import calculator from "../../assets/img-projects/calculator.png";

const Projects = () => {
  return (
    <SectionProjects id="proyectos">
      <Header>
        <H2>Proyectos</H2>
        <H3>Algunos de mis proyectos</H3>
      </Header>
      <GridContainer>
        <a href="https://icumbres.netlify.app/" target={"_blank"}>
          <Project>
            <Imagen src={icumbres} alt="" />
          </Project>
        </a>

        <a href="https://mytreelink.netlify.app/" target={"_blank"}>
          <Project>
            <Imagen src={treelink} alt="" />
          </Project>
        </a>

        <a href="https://minetflix.netlify.app/" target={"_blank"}>
          <Project>
            <Imagen src={netflix} alt="" />
          </Project>
        </a>
        <a href="https://misgastosapp.netlify.app/" target={"_blank"}>
          <Project>
            <Imagen src={igastos} alt="" />
          </Project>
        </a>
        <a href="https://iclima.netlify.app/" target={"_blank"}>
          <Project>
            <Imagen src={iclima} alt="" />
          </Project>
        </a>
        <a href="https://clon-disneyplus.netlify.app/" target={"_blank"}>
          <Project>
            <Imagen src={disney} alt="" />
          </Project>
        </a>
        <a href="https://ramdonquotegenerator.netlify.app/" target={"_blank"}>
          <Project>
            <Imagen src={quotes} alt="" />
          </Project>
        </a>
        <a href="https://calculadorarex.netlify.app/" target={"_blank"}>
          <Project>
            <Imagen src={calculator} alt="" />
          </Project>
        </a>
      </GridContainer>
    </SectionProjects>
  );
};

const SectionProjects = styled.section`
  scroll-margin-top: 4.375rem;
  min-height: 100vh;

  background-color: #3481e648;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1027%26quot%3b)' fill='none'%3e%3cpath d='M939 547L683 803' stroke-width='10' stroke='url(%23SvgjsLinearGradient1028)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M685 536L356 865' stroke-width='6' stroke='url(%23SvgjsLinearGradient1028)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M443 383L212 614' stroke-width='6' stroke='url(%23SvgjsLinearGradient1028)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M344 42L22 364' stroke-width='10' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M191 356L458 89' stroke-width='6' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1051 169L878 342' stroke-width='10' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M548 171L174 545' stroke-width='6' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M830 25L655 200' stroke-width='6' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1146 69L1356 -141' stroke-width='10' stroke='url(%23SvgjsLinearGradient1028)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M523 190L258 455' stroke-width='8' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1177 271L1007 441' stroke-width='6' stroke='url(%23SvgjsLinearGradient1028)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M110 392L393 109' stroke-width='8' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1219 511L913 817' stroke-width='10' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M522 513L238 797' stroke-width='10' stroke='url(%23SvgjsLinearGradient1028)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M151 343L-149 643' stroke-width='10' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M858 216L1131 -57' stroke-width='8' stroke='url(%23SvgjsLinearGradient1028)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M82 302L427 -43' stroke-width='8' stroke='url(%23SvgjsLinearGradient1028)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1258 386L981 663' stroke-width='6' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M140 153L-238 531' stroke-width='10' stroke='url(%23SvgjsLinearGradient1028)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M584 121L946 -241' stroke-width='10' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M487 11L135 363' stroke-width='10' stroke='url(%23SvgjsLinearGradient1028)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M887 77L1061 -97' stroke-width='8' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M302 19L609 -288' stroke-width='6' stroke='url(%23SvgjsLinearGradient1028)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1299 172L1683 -212' stroke-width='6' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1283 284L1505 62' stroke-width='8' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1039 327L1201 165' stroke-width='6' stroke='url(%23SvgjsLinearGradient1028)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M352 156L47 461' stroke-width='6' stroke='url(%23SvgjsLinearGradient1028)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M234 9L-157 400' stroke-width='10' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M918 250L705 463' stroke-width='8' stroke='url(%23SvgjsLinearGradient1028)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M993 7L1410 -410' stroke-width='8' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M251 449L88 612' stroke-width='10' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1038 558L1381 215' stroke-width='6' stroke='url(%23SvgjsLinearGradient1028)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M93 292L412 -27' stroke-width='8' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1382 181L1070 493' stroke-width='6' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M586 356L930 12' stroke-width='8' stroke='url(%23SvgjsLinearGradient1028)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M921 204L728 397' stroke-width='6' stroke='url(%23SvgjsLinearGradient1028)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M41 40L-244 325' stroke-width='10' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M647 499L995 151' stroke-width='6' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1210 52L1449 -187' stroke-width='8' stroke='url(%23SvgjsLinearGradient1029)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1027'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1028'%3e%3cstop stop-color='rgba(28%2c 83%2c 142%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='%231c538e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='0%25' x2='0%25' y2='100%25' id='SvgjsLinearGradient1029'%3e%3cstop stop-color='rgba(28%2c 83%2c 142%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='%231c538e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");

  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`;

const Header = styled.header`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #1271cf;
  padding: 1rem;
`;

const H2 = styled.h2`
  font-size: clamp(14px, 7vw, 24px);
  font-weight: 700;
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: 0.1rem;
`;
const H3 = styled.h3``;

const GridContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
  /* min-height: 300px; */
  /* background-color: red; */
  padding: 1rem;
  display: grid;
  gap: 1rem;
  place-content: center;
  grid-template-columns: repeat(auto-fill, minmax(290px, 400px));
`;

const Project = styled.div`
  /* background-color: ${({ theme }) => theme.colorPrimary}; */
  border-radius: 0.5rem;
  overflow: hidden;
  transition: scale 0.3s ease;
  aspect-ratio: 3/2;

  display: flex;
  flex-flow: column;

  :hover {
    scale: 1.1;
    filter: saturate(130%);
  }
`;

const Imagen = styled.img`
  flex: 1;
  object-fit: cover;
  /* object-position: left; */
`;

const IconsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const Icon = styled.img`
  width: 13%;
`;

export default Projects;
