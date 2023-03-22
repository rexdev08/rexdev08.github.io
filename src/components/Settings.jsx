import { useContext, useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import styled from "styled-components";
import { themeModeContext } from "../context/ThemeModeContetx";
import { CgClose } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";

const Settings = () => {
  const [mode, setMode] = useContext(themeModeContext);
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <SettingsContainer
      onClick={() => setOpenSettings(true)}
      
      
      $open={openSettings}
      onMouseLeave={() => setOpenSettings(false)}
    >
      {openSettings && (
        <CloseButton
          $open={openSettings}
          onClick={(e) => {
            e.stopPropagation();
            setOpenSettings(false);
          }}
        />
      )}
      {!openSettings && <OpenButton />}

      {openSettings && (
        <Content>
          <p>Ajustes</p>
          <ButtonContainer>
            <ButtonStyled
              $mode={mode === "light"}
              onClick={() => {
                localStorage.setItem("mode", "light");
                setMode("light");
              }}
            >
              <FaSun />
            </ButtonStyled>

            <ButtonStyled
              $mode={mode !== "light"}
              onClick={() => {
                localStorage.setItem("mode", "dark");
                setMode("dark");
              }}
            >
              <FaMoon />
            </ButtonStyled>
          </ButtonContainer>
        </Content>
      )}
    </SettingsContainer>
  );
};

const SettingsContainer = styled.div`
  background-color: ${({ theme }) => theme.bgColor + "69"};
  border: solid;
  backdrop-filter: blur(0.2rem);
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: var(--br-100);
  z-index: 11;
  padding: ${({ $open }) => ($open ? "2rem" : ".8rem")};
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;
`;

const CloseButton = styled(CgClose)`
  font-size: var(--fs-large);
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: inherit;
  font-size: 1.3rem;
`;

const OpenButton = styled(IoSettingsSharp)`
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 1rem; */
`;
const ButtonStyled = styled.div`
  cursor: pointer;
  background-color: ${({ $mode }) => ($mode ? "#3997f7" : "")};
  padding: 0.5rem .8rem;
  border-radius: .2rem;
  font-size:1.2rem;
`;

export default Settings;
