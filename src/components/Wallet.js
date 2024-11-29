import React from "react";
import { useTonWallet } from "@tonconnect/ui-react";

const Wallet = () => {
  const wallet = useTonWallet();

  if (!wallet) return <p>No wallet connected</p>;

  return (
    <div>
      <p>Connected Wallet: {wallet.name}</p>
      <p>Device: {wallet.device.appName}</p>
    </div>
  );
};

export default Wallet;
