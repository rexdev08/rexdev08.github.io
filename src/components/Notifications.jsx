import { useState, useEffect } from "react";
import styled from "styled-components";

const Notifications = ({ config = {} }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    if (Object.entries(config).length) {
      setShowNotifications(true);

      setTimeout(() => setShowNotifications(false), 2500);
    }
  }, [config]);

  if (showNotifications) {
    return (
      <MainContainer type={config.type}>
        <span>{config.info}</span>
      </MainContainer>
    );
  }
};

const MainContainer = styled.div`
  min-width: 150px;
  min-height: 60px;
  background-color: #17c617;
  /* color: white; */
  border: solid;
  border-radius: 0.5rem;
  padding: 0.5rem;

  font-weight: 600;

  display: grid;
  place-content: center;

  position: fixed;
  z-index: 11;
  right: 20px;
  top: 50px;

  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-right .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  @-webkit-keyframes slide-in-right {
    0% {
      -webkit-transform: translateX(1000px);
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-right {
    0% {
      -webkit-transform: translateX(1000px);
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export default Notifications;
