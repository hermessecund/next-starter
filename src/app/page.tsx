'use client'

import Image from "next/image";
import { client, useSidebarState } from "./client";
import thirdwebIcon from "@public/thirdweb.svg";
import { ConnectButton } from "@/app/thirdweb";
import NavLinks from "./nav";

export default function Home() {
    const { sidebarVisible, toggleSidebar } = useSidebarState();

    return (
        <div className="flex flex-col h-screen">
            {/* Header */}
            <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
                <div className="cursor-pointer" onClick={toggleSidebar}>
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
            <main className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside className={`bg-gray-800 text-white w-64 flex-shrink-0 overflow-y-auto transition-transform duration-300 transform ${sidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                    <NavLinks />
                </aside>

                {/* Main Content */}
                <section className="flex-1 p-4 overflow-y-auto">
                    {/* Responsive iframe */}
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
                        <iframe
                            src="https://harmonysegment.com/"
                            frameBorder="0"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        ></iframe>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="p-4 bg-gray-700 text-gray-200 text-center">
                &copy; 2024 Tar App. All rights reserved.
            </footer>
        </div>
    );
}
