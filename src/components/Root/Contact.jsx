import styled from "styled-components";
import peaks from "../../assets/peaks.svg";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import tree from "../../assets/tree.png";

function Contact() {
  return (
    <Section id="contacto">
      <Header>Contacto</Header>

      <FlexContainer>
        <Form action="get" id="form">
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            required
          />
          <Input type="email" name="email" id="email" placeholder="Email" />
          <Input type="text" name="subject" id="subject" placeholder="Asunto" />
          <Textarea
            id="message"
            name="message"
            cols="30"
            rows="5"
            placeholder="Mensaje"
          ></Textarea>

          <Submit id="submit" type="submit" value="Enviar" />
        </Form>

        <LinksContainer>
          <Link
            href={"https://www.linkedin.com/in/rexdev08/"}
            target={"_blank"}
          >
            <img src={linkedin} alt="" />
          </Link>
          <Link href={"https://github.com/rexdev08"} target={"_blank"}>
            <img src={github} alt="" />
          </Link>
          <Link href={"https://mytreelink.netlify.app/u/rexdev"} target={"_blank"}>
            <img src={tree} alt="" className="tree" />
          </Link>
        </LinksContainer>
      </FlexContainer>
    </Section>
  );
}

const Section = styled.section`
  min-height: calc(100vh - 2.2rem - 4.375rem);
  scroll-margin-top: 4.375rem;
  background-image: url(${peaks});
  background-position: center;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: #3481e648;
`;

const Header = styled.h2`
  /* width: 100%; */
  text-align: center;
  font-size: clamp(14px, 10vw, 80px);
  font-weight: 600;
  /* margin-bottom: 2rem; */
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column-reverse;
  justify-content: center;
  align-items: center;
  /* background-color: cyan; */
  gap: 1rem;
`;
const Form = styled.form`
  width: min(400px, 90%);
  border-radius: 0.5rem;
  display: flex;
  flex-flow: column;
  gap: 0.7rem;
  padding: 1rem;
  font-weight: 400;
  background-color: #267bc1;
  backdrop-filter: blur(0.3rem);
  border: solid;
`;

const Submit = styled.input`
  padding: 0.5rem;
  font-size: 18px;
  font-weight: 500;
  color: #fafafa;
  border: none;
  background-color: #03d9ff;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
  color: black;
  :hover {
    background-color: #14bcda;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 0.3rem;
  font-size: 1.1rem;
`;
const Textarea = styled.textarea`
  padding: 0.5rem;
  border: none;
  border-radius: 0.3rem;
  font-size: 1.1rem;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  img {
    width: 50px;
  }

  .tree {
    width: 70px;
  }
`;
export default Contact;
