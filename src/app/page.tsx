'use client'
import React, { useState } from 'react';
import Image from "next/image";
import thirdwebIcon from "@public/thirdweb.svg";
import { ConnectButton } from "@/app/thirdweb";

export default function Home() {
    const [expandedHeader, setExpandedHeader] = useState(false);

    const toggleHeaderExpansion = () => {
        setExpandedHeader(!expandedHeader);
    };

    return (
        <div className="relative">
            {/* Header */}
            <header className={`flex justify-between items-center p-4 ${expandedHeader ? 'w-full h-1/2' : 'h-16'}`}>
                <div className="absolute top-0 left-0">
                    <Image src={thirdwebIcon} alt="Thirdweb Icon" />
                </div>
                <div className="absolute top-0 right-0">
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
            <main className="container mx-auto p-4">
                {/* Responsive iframe */}
                <div className={`relative ${expandedHeader ? 'mt-16' : 'mt-0'}`}>
                    <div className="rounded-lg overflow-hidden aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://harmonysegment.com/"
                            frameBorder="0"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </main>

            {/* Expand Header Button */}
            <button className="fixed top-4 right-4 z-10 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={toggleHeaderExpansion}>
                {expandedHeader ? 'Collapse Header' : 'Expand Header'}
            </button>
        </div>
    );
}


