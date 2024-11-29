import React from "react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Header from "./components/Header";

import Wallet from "./components/Wallet";
import ModalControl from "./components/ModalControl";

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://Rkjangir26.github.io/ton_wallet_mini_app/tonconnect-manifest.json">
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Ton Wallet Integration</h1>
        
        <Wallet />
        <ModalControl />
      </main>
    </TonConnectUIProvider>
  );
}

export default App;
