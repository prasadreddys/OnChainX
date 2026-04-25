'use client';

import { useState } from 'react';
import { ethers } from 'ethers';

export default function ConnectWallet() {
  const [account, setAccount] = useState<string | null>(null);

  const connect = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
      } catch (error) {
        console.error(error);
        alert('Failed to connect wallet');
      }
    } else {
      alert('Please install MetaMask or another Web3 wallet');
    }
  };

  return (
    <div className="mt-8">
      {account ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <p>Connected Wallet: {account.slice(0, 6)}...{account.slice(-4)}</p>
        </div>
      ) : (
        <button
          onClick={connect}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}