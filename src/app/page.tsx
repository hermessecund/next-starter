'use client'
import Image from "next/image";
import { client } from "./client";
import Logo from "@public/logo.png";
import { ConnectButton } from "@/app/thirdweb";
import { useState, useEffect } from 'react';
import Accounts from "./account";
import Tokens from "./token";
import Nfts from "./nft";


    export default function Header() {
    const [connected, setConnected] = useState(false);
    const [activeSection, setActiveSection] = useState("nft"); // Default to "NFT" section

    // Function to handle connection to Thirdweb
    const handleConnect = () => {
        // Your logic to connect to Thirdweb
        setConnected(true);
    };

    const handleMenuClick = (section: string) => {
        setActiveSection(section);
    };

    return (
        <div>
            {/* Background image container */}
            <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/hs2.png')" }}></div>
            
            <div className="relative bg-red min-h-screen">
                
                {/* Iframe */}
                <div className="p-4 mb-0 bg-black bg-opacity-50 text-gray-200 text-center">
                    <iframe src="https://next-starter-rouge-five.vercel.app/days.html" title="Days format" width="100%" height="50px" frameBorder="0"></iframe>
                </div>

                {/* Header */}
                <header className="flex flex-col md:flex-row justify-center items-center p-4 bg-black bg-opacity-80 text-white">
                    <div className="order-3 md:order-2 mt-4 md:mt-0">
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
                <main className="relative z-5 p-4 bg-black bg-opacity-70 backdrop-blur-lg">
                    {/* Text menu */}
                    <div className="text-white text-lg mb-4">
                        {connected && (
                            <div className="flex justify-between">
                                <button onClick={() => handleMenuClick("nft")}>NFT</button>
                                <button onClick={() => handleMenuClick("token")}>Token</button>
                                <button onClick={() => handleMenuClick("account")}>Account</button>
                            </div>
                        )}
                    </div>

                    {/* Sections */}
                    {connected && (
                        <section id="nft" className={`section ${activeSection === "nft" ? "" : "hidden"}`}>
                            {/* NFT section content */}
                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {/* Content for NFT section */}
                            </div>
                        </section>
                    )}

                    {connected && (
                        <section id="token" className={`section ${activeSection === "token" ? "" : "hidden"}`}>
                            {/* Token section content */}
                            <ExternalTokenComponent />
                        </section>
                    )}

                    {connected && (
                        <section id="account" className={`section ${activeSection === "account" ? "" : "hidden"}`}>
                            {/* Account section content */}
                            <ExternalAccountComponent />
                        </section>
                    )}
                </main>

                {/* Footer */}
                <footer className="p-4 mb-0 bg-black bg-opacity-50 backdrop-blur-lg text-gray-200 text-center">
                    <iframe src="https://next-starter-rouge-five.vercel.app/long.html" title="Long format" width="100%" height="70px" frameBorder="0"></iframe>
                    <br />
                    {/* Logo button */}
                    <button className="mr-4 rounded-lg focus:outline-none">
                        <Image src={Logo} alt="Logo" width={102} height={102} />
                    </button>
                </footer>
            </div>
        </div>
    );
}
