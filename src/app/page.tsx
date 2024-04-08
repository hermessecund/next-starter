'use client'
import Image from "next/image";
import { client, useSidebarState } from "./client";
import Logo from "@public/logo.png";
import { ConnectButton } from "@/app/thirdweb";
import NavLinks from "./nav";
import { useState } from 'react';

export default function Header() {
    const [showNavLinks, setShowNavLinks] = useState(false);

    const toggleNavLinks = () => {
        setShowNavLinks(!showNavLinks);
    };
    
    return (
        <div className="relative min-h-screen">
            {/* Header */}
            <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
                <div className="flex items-center">
                    <button onClick={toggleNavLinks} className="mr-4 focus:outline-none">
                        {/* Small logo */}
                        <Image src={Logo} alt="Logo" width={32} height={32} />
                    </button>
                    {/* NFT - Token Button */}
                    <button className="text-white bg-gray-200 px-4 py-2 rounded-md mr-4">
                        NFT - Token
                    </button>
                </div>
                <div className="flex space-x-4">
                    {/* Connect Button */}
                    <ConnectButton
                        client={client}
                        appMetadata={{
                            name: "Tar App",
                            url: "https://tarwar.com",
                        }}
                    />
                </div>
                {/* Render NavLinks component only when showNavLinks is true */}
                {showNavLinks && <NavLinks />}
            </header>

            {/* Main Content */}
            <main className="p-4 overflow-y-auto">
                {/* Add your main content here */}
            </main>

            {/* Footer */}
            <footer className="p-4 mb-0 bg-gray-700 text-gray-200 text-center">
                &copy; 2024 Tar App. All rights reserved.
            </footer>
        </div>
    );
}

