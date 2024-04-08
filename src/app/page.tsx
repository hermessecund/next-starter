'use client'

import Image from "next/image";
import { client, useSidebarState } from "./client";
import NavLinks from "./nav";
import thirdwebIcon from "@public/thirdweb.svg";
import { ConnectButton } from "@/app/thirdweb";

export default function Home() {
    const { sidebarVisible, toggleSidebar } = useSidebarState();

    return (
        <div>
            {/* Header */}
            <header className="flex justify-between items-center p-4 cursor-pointer" onClick={toggleSidebar}>
                <div>
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

            {/* Render NavLinks only if sidebar is visible */}
            {sidebarVisible && <NavLinks />}

            {/* Main Content */}
            <main className={`container mx-auto p-4 ${sidebarVisible ? 'ml-48' : ''}`}>
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
