'use client'
import Image from "next/image";
import { client } from "./client";
import Logo from "@public/logo.png";
import { ConnectButton } from "@/app/thirdweb";

export default function Home() {
    return (
        <div className="relative min-h-screen">
            {/* Header */}
            <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
                <div>
                    <Image src={Logo} alt="Logo" />
                </div>
                    {/* NFT - Token Button */}
                    <button className="text-white bg-gray-200 px-4 py-2 rounded-md">
                        NFT - Token
                    </button>
                   
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
               
            </main>

            {/* Footer */}
            <footer className="p-4 mb-0 bg-gray-700 text-gray-200 text-center">
                &copy; 2024 Tar App. All rights reserved.
            </footer>
        </div>
    );
}


