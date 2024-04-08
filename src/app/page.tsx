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
            <header className="flex justify-between items-center p-4 bg-black text-white">
                <div className="flex items-center">
                    <button onClick={toggleNavLinks} className="mr-4 focus:outline-none">
                        {/* Small logo */}
                        <Image src={Logo} alt="Logo" width={102} height={102} />
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
            </header>

            {/* Sidebar (absolute positioned) */}
            <div className={`absolute top-0 left-0 h-full bg-gray-900 text-white ${showNavLinks ? 'w-64' : 'w-0'} transition-all duration-300`}>
                <NavLinks />
            </div>

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
