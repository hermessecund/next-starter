'use client'
import Image from "next/image";
import { client } from "./client";
import Logo from "@public/logo.png";
import { ConnectButton } from "@/app/thirdweb";
import NavLinks from "./nav";
import { useState } from 'react';


export default function Header() {
    const [connected, setConnected] = useState(false);

    // Function to handle connection to Thirdweb
    const handleConnect = () => {
        // Your logic to connect to Thirdweb
        setConnected(true);
    };

    return (
        <div className="relative min-h-screen">
            {/* Header */}
            <header className="flex justify-between items-center p-4 bg-black text-white">
                <div className="flex items-center">
                    <button className="mr-4 focus:outline-none">
                        {/* Small logo */}
                        <Image src={Logo} alt="Logo" width={102} height={102} />
                    </button>
                </div>
                <div className="flex text-sm px-2 py-1 rounded-md space-x-4">
                    {/* Render Connect Button */}
                    <ConnectButton
                        client={client}
                        appMetadata={{
                            name: "Tar App",
                            url: "https://tarwar.com",
                        }}
                        onConnect={handleConnect}
                    />
                </div>
            </header>

            {/* Main Content */}
            <main className="p-4 overflow-y-auto">
                {/* Conditionally render NFT collections if connected */}
                {connected && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Card 1: NFT Collections */}
                        <div className="bg-white rounded-lg p-4">
                            <h2 className="text-lg font-semibold mb-2">NFT Collections</h2>
                            <p className="text-gray-600 mb-4">Explore our exclusive NFT collections.</p>
                            {/* Add Image for NFT Collections */}
                        </div>
                        {/* Card 2: Horoscope and Tiles Collections */}
                        <div className="bg-white rounded-lg p-4">
                            <h2 className="text-lg font-semibold mb-2">Horoscope and Tiles Collections</h2>
                            <p className="text-gray-600 mb-4">Discover our curated horoscope and tiles collections.</p>
                            {/* Add Image for Horoscope and Tiles Collections */}
                        </div>
                    </div>
                )}
                {/* Add your main content here */}
            </main>

            {/* Footer */}
            <footer className="p-4 mb-0 bg-gray-700 text-gray-200 text-center">
                &copy; 2024 Tar App. All rights reserved.
            </footer>
        </div>
    );
}
