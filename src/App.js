//<TonConnectUIProvider manifestUrl="https://Rkjangir26.github.io/ton_wallet_mini_app/tonconnect-manifest.json"></TonConnectUIProvider>

import React, { useState, useEffect } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { LoadingScreen } from "./components/LoadingScreen";
import { Dashboard } from "./components/Dashboard";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const App = () => {
  const [screen, setScreen] = useState("splash");

  useEffect(() => {
    const timer1 = setTimeout(() => setScreen("loading"), 3000); // 3 seconds splash
    const timer2 = setTimeout(() => setScreen("dashboard"), 6000); // 3 seconds loading
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <TonConnectUIProvider manifestUrl="https://Rkjangir26.github.io/ton_wallet_mini_app/tonconnect-manifest.json">
      {screen === "splash" && <SplashScreen />}
      {screen === "loading" && <LoadingScreen />}
      {screen === "dashboard" && <Dashboard />}
    </TonConnectUIProvider>
  );
};

export default App;
