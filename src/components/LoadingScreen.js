// src/components/LoadingScreen.js
import React from "react";
import styled from "styled-components";

// Import assets
import astronaut_pic from "../assets/images/astronaut.png";
import telegram_logo from "../assets/images/telegram.png";
import youtube_logo from "../assets/images/youtube.png";
import twitter_logo from "../assets/images/twitter.png";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: #ffffff;

  img.astronaut {
    width: 180px;
    height: auto;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
  }

  p {
    font-size: 16px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }

  .info-text {
    font-size: 18px;
    color: #555;
    margin-bottom: 15px;
    text-align: center;
  }

  .btn-container {
    margin-bottom: 30px;

    button {
      font-size: 16px;
      padding: 10px 20px;
      border: 2px solid #000;
      border-radius: 25px;
      background-color: transparent;
      cursor: pointer;
      font-weight: bold;
      color: #000;
      outline: none;
    }
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;

    a {
      width: 40px;
      height: 40px;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

export const LoadingScreen = () => {
  return (
    <LoadingContainer>
      {/* Astronaut Image */}
      <img src={astronaut_pic} alt="Astronaut" className="astronaut" />

      {/* Main Text */}
      <h2>We did it!</h2>
      <p>HMN token is on the market</p>

      {/* Button Section */}
      <div className="btn-container">
        <button>HMN</button>
      </div>

      {/* Info Text */}
      <p className="info-text">Stay tuned</p>
      <p>More info in official channels</p>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer">
          <img src={telegram_logo} alt="Telegram" />
        </a>
        <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
          <img src={youtube_logo} alt="YouTube" />
        </a>
        <a href="https://twitter.com/yourchannel" target="_blank" rel="noopener noreferrer">
          <img src={twitter_logo} alt="Twitter" />
        </a>
      </div>
    </LoadingContainer>
  );
};
