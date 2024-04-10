'use client'
import Image from "next/image";
import { client } from "./client";

import Logo from "@public/logo.png";
import { ConnectButton } from "@/app/thirdweb";

import { useState, useEffect } from 'react';




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
        <div className="relative min-h-screen">
            {/* Background image */}
            <div className="absolute inset-0 z-10 bg-cover bg-center" style={{ backgroundImage: "url('/hs2.png')" }}></div>

            {/* Iframe */}
            <div className="p-4 mb-0 bg-black text-gray-200 text-center">
                <iframe src="https://next-starter-rouge-five.vercel.app/days.html" title="Days format" width="100%" height="50px" frameBorder="0"></iframe>
            </div>

            {/* Header */}
            <header className="flex flex-col md:flex-row justify-center items-center p-4 bg-black text-white">
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
            <main className="relative z-5 p-4 bg-black bg-opacity-80">
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
                <section id="nft" className={`section ${activeSection === "nft" ? "" : "hidden"}`}>
                    {/* Your NFT content here */}
                </section>

                <section id="token" className={`section ${activeSection === "token" ? "" : "hidden"}`}>
                    {/* Your Token content here */}
                </section>

                <section id="account" className={`section ${activeSection === "account" ? "" : "hidden"}`}>
                    {/* Your Account content here */}
                </section>
            </main>

            {/* Footer */}
            <footer className="p-4 mb-0 bg-black text-gray-200 text-center">
                <iframe src="https://next-starter-rouge-five.vercel.app/long.html" title="Long format" width="100%" height="300px" frameBorder="0"></iframe>
                <br />
                {/* Logo button */}
                <button className="mr-4 focus:outline-none">
                    <Image src={Logo} alt="Logo" width={102} height={102} />
                </button>
            </footer>
        </div>
    );
}
