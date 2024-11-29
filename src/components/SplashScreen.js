// src/components/SplashScreen.js
import React from "react";
import styled, { keyframes } from "styled-components";
import coin_pic from "../assets/images/coin.png"; // Update with your coin image path

// Keyframe animation for rotation
const rotateCoin = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;

  .coin {
    width: 150px;
    height: 150px;
    animation: ${rotateCoin} 3s linear infinite;
  }

  h1 {
    margin-top: 20px;
    font-size: 36px;
    font-weight: bold;
    color: #000;
  }
`;

export const SplashScreen = () => {
  return (
    <SplashContainer>
      <img src={coin_pic} alt="Rotating Coin" className="coin" />
      <h1>HMN</h1>
    </SplashContainer>
  );
};
