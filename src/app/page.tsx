import ConnectWallet from '@/components/ConnectWallet';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to OnChainX
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Your gateway to the blockchain world. Connect your wallet and explore decentralized applications.
          </p>
          <ConnectWallet />
        </div>
      </main>
    </div>
  );
}
