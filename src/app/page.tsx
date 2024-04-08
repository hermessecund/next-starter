'use client'
import Image from "next/image";
import { client } from "./client";
import Logo from "@public/logo.png";
import { ConnectButton } from "@/app/thirdweb";
import NavLinks from "./nav";
import { useState } from 'react';


export default function Header() {
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
