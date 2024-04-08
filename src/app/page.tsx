'use client'
import Image from "next/image";
import { client, useSidebarState } from "./client";
import React, { useState } from 'react';
import thirdwebIcon from "@public/thirdweb.svg";
import { ConnectButton } from "@/app/thirdweb";

export default function Home() {
    const [expandedHeader, setExpandedHeader] = useState(false);

    const toggleHeaderExpansion = () => {
        setExpandedHeader(!expandedHeader);
    };

    return (
        <div className="relative min-h-screen">
            {/* Header */}
            <header className={`flex justify-between items-center p-4 bg-gray-900 text-white transition-all duration-300 ${expandedHeader ? 'h-1/2 w-full' : 'h-16'}`}>
                <div className="cursor-pointer" onClick={toggleHeaderExpansion}>
                    <Image src={thirdwebIcon} alt="Thirdweb Icon" />
                </div>
                <div>
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
                {/* Responsive iframe */}
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
                    <iframe
                        src="https://harmonysegment.com/"
                        frameBorder="0"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    ></iframe>
                </div>
            </main>

            {/* Footer */}
            <footer className="p-4 bg-gray-700 text-gray-200 text-center">
                &copy; 2024 Tar App. All rights reserved.
            </footer>
        </div>
    );
}

