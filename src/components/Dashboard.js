import React, { useState } from "react";
import styled from "styled-components";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Footer } from "./FooterNav";
import profile_pic from "../assets/images/profile-pic.jpg";
import middle_pic from "../assets/images/Group 18.png";
import diamond_icon from "../assets/images/diamond_icon.png";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .profile {
      display: flex;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
      }

      h4 {
        margin: 0;
        font-size: 18px;
        color: #000;
      }
    }
  }

  .profit {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    .profit-container {
      display: flex;
      align-items: center;
      gap: 10px;
      background: #ffffff;
      border-radius: 10px;
      padding: 10px 20px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

      img {
        width: 20px;
        height: 20px;
      }

      p {
        margin: 0;
        font-size: 14px;
        color: #000;
      }
    }
  }

  .new-today {
    margin: 20px 0;
    display: flex;
    overflow-x: auto;
    gap: 15px;
    padding-bottom: 10px;

    .card {
      background: #fff;
      border-radius: 10px;
      padding: 10px;
      text-align: center;
      flex-shrink: 0;
      width: 100px;

      img {
        width: 100%;
        border-radius: 10px;
      }

      p {
        margin: 5px 0 0;
        font-size: 14px;
        color: #333;
      }
    }
  }

  .middle {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    border-radius: 15px;
    padding: 20px;
    margin: 20px 0;
    width: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    .balance {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;

      img {
        width: 20px;
        height: 20px;
      }

      h4 {
        font-size: 18px;
        color: #333;
        margin: 0;
      }
    }

    img {
      width: 200px; /* Increased size */
      height: auto;
      transition: transform 0.2s ease; /* Smooth transition for the rotation */
    }
  }
`;

export const Dashboard = () => {
  const [rotation, setRotation] = useState(0);

  // Function to handle mouse movement
  const handleMouseMove = (e) => {
    const { clientX } = e;
    const centerX = window.innerWidth / 2; // Get the center of the window
    const distanceFromCenter = clientX - centerX; // Calculate horizontal distance from the center
    const rotationAmount = distanceFromCenter / 20; // Divide by 20 to slow down the rotation

    setRotation(rotationAmount); // Set the rotation state
  };

  return (
    <DashboardContainer>
      {/* Header */}
      <div className="header">
        <div className="profile">
          <img src={profile_pic} alt="Profile" />
          <h4>Ravi Kumar (CEO)</h4>
        </div>
        <TonConnectButton />
      </div>

      {/* Profit Section */}
      <div className="profit">
        <div className="profit-container">
          <img src={diamond_icon} alt="Diamond" />
          <p>Profit Per Hour: 5 Diamonds</p>
        </div>
      </div>

      {/* New Today Section */}
      <div className="new-today">
        <div className="card">
          <img src={profile_pic} alt="Merge Dale" />
          <p>Merge Dale</p>
        </div>
        <div className="card">
          <img src={profile_pic} alt="Merge Dale" />
          <p>Merge Dale</p>
        </div>
        <div className="card">
          <img src={profile_pic} alt="Merge Dale" />
          <p>Merge Dale</p>
        </div>
      </div>

      {/* Middle Section */}
      <div
        className="middle"
        onMouseMove={handleMouseMove} // Adding the mousemove event listener to track mouse movement
      >
        <div className="balance">
          <img src={diamond_icon} alt="Diamond" />
          <h4>Your Current Balance: 5 Diamonds</h4>
        </div>
        <img
          src={middle_pic}
          alt="Middle Section"
          style={{
            transform: `rotate(${rotation}deg)`, // Apply the rotation dynamically
            transition: 'transform 0.1s ease-out', // Smooth rotation transition
          }}
        />
      </div>

 
      <Footer />
    </DashboardContainer>
  );
};
