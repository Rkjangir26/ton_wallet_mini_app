import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";

const Header = () => (
  <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
    <span>Ton Wallet App</span>
    <TonConnectButton />
  </header>
);

export default Header;
