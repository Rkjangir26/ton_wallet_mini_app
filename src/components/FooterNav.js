import React from "react";
import styled from "styled-components";
import exchange_pic from "../assets/images/profile-pic.jpg";
import playground_pic from "../assets/images/playground-icon.png";
import airdrop_pic from "../assets/images/coin.png";
import friend_pic from "../assets/images/friends-icon.png";
import earn_pic from "../assets/images/earn-icon.png.png";

const FooterContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: #ffffff;
  padding: 10px 0;
  border-top: 2px solid #dddddd;

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease, color 0.3s ease;

    img {
      width: 40px;
      height: 40px;
      transition: transform 0.3s ease;
    }

    span {
      margin-top: 5px;
      font-size: 12px;
      color: #555;
      transition: color 0.3s ease;
    }

    &:hover {
      transform: scale(1.1); /* Scale the entire button slightly */
    }

    &:hover img {
      transform: scale(1.2); /* Scale the icon more prominently */
    }

    &:hover span {
      color: #000; /* Darken the text on hover */
    }
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="icon">
        <img src={exchange_pic} alt="Exchange" />
        <span>Exchange</span>
      </div>
      <div className="icon">
        <img src={playground_pic} alt="Playground" />
        <span>Playground</span>
      </div>
      <div className="icon">
        <img src={airdrop_pic} alt="Airdrop" />
        <span>Airdrop</span>
      </div>
      <div className="icon">
        <img src={friend_pic} alt="Friends" />
        <span>Friends</span>
      </div>
      <div className="icon">
        <img src={earn_pic} alt="Earn" />
        <span>Earn</span>
      </div>
    </FooterContainer>
  );
};
