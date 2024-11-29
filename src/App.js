import React, { useEffect, useState } from 'react';
import './styles.css';

const App = () => {
  const [tonConnectUI, setTonConnectUI] = useState(null);
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    // Wait for the TONConnectUI script to load
    const checkTONConnectUI = () => {
      if (window.TONConnectUI) {
        console.log('TONConnectUI is loaded!');
        const instance = new window.TONConnectUI.TonConnectUI({
          manifestUrl: 'https://https://ton-wallet-mini-app.vercel.app//tonconnect-manifest.json', // Replace with your actual manifest URL
          buttonRootId: 'ton-connect', // The ID where the button will be rendered
        });
        setTonConnectUI(instance);
      } else {
        console.error('TONConnectUI is not loaded.');
      }
    };

    // Add a small delay to allow the script to load
    const timer = setTimeout(checkTONConnectUI, 500); // 500ms delay
    return () => clearTimeout(timer);
  }, []);

  const connectToWallet = async () => {
    if (!tonConnectUI) {
      console.error('TONConnectUI is not initialized.');
      return;
    }
    try {
      const connectedWallet = await tonConnectUI.connectWallet();
      console.log('Connected wallet:', connectedWallet);
      setWalletConnected(true);
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  };

  const disconnectWallet = async () => {
    if (!tonConnectUI) {
      console.error('TONConnectUI is not initialized.');
      return;
    }
    try {
      await tonConnectUI.disconnect();
      console.log('Wallet disconnected');
      setWalletConnected(false);
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

  return (
    <div className="App">
      <h1>TON Wallet Integration</h1>
      <div id="ton-connect"></div>

      {!walletConnected ? (
        <button onClick={connectToWallet}>Connect Wallet</button>
      ) : (
        <button onClick={disconnectWallet}>Disconnect Wallet</button>
      )}

      <div>
        {walletConnected && <p>Wallet is connected!</p>}
      </div>
    </div>
  );
};

export default App;
