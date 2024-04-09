'use client'
import Image from "next/image";
import { client } from "./client";
import Logo from "@public/logo.png";
import { ConnectButton } from "@/app/thirdweb";
import NavLinks from "./nav";
import { useState, useEffect } from 'react';
import Icons from "./icons";
import LiveClock from 'react-live-clock';
import Calendar from 'react-calendar';




export default function Header() {
    const [connected, setConnected] = useState(false);
    const [date, setDate] = useState(new Date());
    
    const [dateFormat, setDateFormat] = useState('yyyy-MM-dd'); // Default date format

    
        useEffect(() => {
            // Update date every second
            const interval = setInterval(() => {
                setDate(new Date());
            }, 1000);
    
            // Clear interval on unmount
            return () => clearInterval(interval);
        }, []);

    // Function to handle connection to Thirdweb
    const handleConnect = () => {
        // Your logic to connect to Thirdweb
        setConnected(true);
    };

    return (
        <div className="relative min-h-screen">
          
            {/* Header */}
            <header className="flex justify-between items-center p-4 bg-black text-white">
                <div className="flex items-center">
                    <button className="mr-4 focus:outline-none">
                        {/* Small logo */}
                        <Image src={Logo} alt="Logo" width={102} height={102} />
                    </button>
                   {/* Live Clock */}
                    <div className="mr-4">
                        <LiveClock format={'HH:mm:ss'} ticking timezone={timezone} />
                    </div>
                   



                    {/* Date Format Selector */}
                    <div>
                        <input
                            type="radio"
                            id="dateFormat1"
                            name="dateFormat"
                            value="yyyy-MM-dd"
                            checked={dateFormat === 'yyyy-MM-dd'}
                            onChange={() => setDateFormat('yyyy-MM-dd')}
                        />
                        <label htmlFor="dateFormat1">yyyy-MM-dd</label>

                        <input
                            type="radio"
                            id="dateFormat2"
                            name="dateFormat"
                            value="dd/MM/yyyy"
                            checked={dateFormat === 'dd/MM/yyyy'}
                            onChange={() => setDateFormat('dd/MM/yyyy')}
                        />
                        <label htmlFor="dateFormat2">dd/MM/yyyy</label>

                        {/* Add more date format options as needed */}
                    </div>
                </div>
                <div className="flex text-sm px-2 py-1 rounded-md space-x-4">
                    {/* Render Connect Button */}
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
            <main className="p-4 overflow-y-auto">
               <Icons />
                {/* Conditionally render NFT collections if connected */}
                {connected && (
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                            <div className="flex flex-col space-y-1.5 p-6 rounded-xl">
                              <div className="flex items-center space-x-4">
                                <img
                                  src="/placeholder.svg"
                                  width={64}
                                  height={64}
                                  alt="NFT"
                                  className="rounded-full"
                                  style={{ aspectRatio: "64/64", objectFit: "cover" }}
                                />
                                <div className="grid gap-0.5">
                                  <h3 className="whitespace-nowrap font-semibold tracking-tight text-base">Cosmic Gateway Collection</h3>
                                  <p className="text-muted-foreground text-sm">
                                    The Cosmic Gateway Collection is a set of 10,000 unique intergalactic NFTs.
                                  </p>
                                </div>
                              </div>
                              <h3 className="whitespace-nowrap font-semibold tracking-tight text-2xl">$CGC</h3>
                              <p className="text-muted-foreground text-sm">Supply: 3,214 / 10,000</p>
                            </div>
                            <div className="p-0">
                              <img
                                src="/placeholder.svg"
                                width={300}
                                height={300}
                                alt="NFT"
                                className="rounded-b-xl object-cover"
                                style={{ aspectRatio: "300/300", objectFit: "cover" }}
                              />
                            </div>
                          </div>
                          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                            <div className="flex flex-col space-y-1.5 p-6 rounded-xl">
                              <div className="flex items-center space-x-4">
                                <img
                                  src="/placeholder.svg"
                                  width={64}
                                  height={64}
                                  alt="NFT"
                                  className="rounded-full"
                                  style={{ aspectRatio: "64/64", objectFit: "cover" }}
                                />
                                <div className="grid gap-0.5">
                                  <h3 className="whitespace-nowrap font-semibold tracking-tight text-base">EtherLegends Collection</h3>
                                  <p className="text-muted-foreground text-sm">
                                    The EtherLegends Collection consists of 8,888 digital collectibles inspired by mythology and folklore.
                                  </p>
                                </div>
                              </div>
                              <h3 className="whitespace-nowrap font-semibold tracking-tight text-2xl">$LEGENDS</h3>
                              <p className="text-muted-foreground text-sm">Supply: 8,212 / 8,888</p>
                            </div>
                            <div className="p-0">
                              <img
                                src="/placeholder.svg"
                                width={300}
                                height={300}
                                alt="NFT"
                                className="rounded-b-xl object-cover"
                                style={{ aspectRatio: "300/300", objectFit: "cover" }}
                              />
                            </div>
                          </div>
                          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                            <div className="flex flex-col space-y-1.5 p-6 rounded-xl">
                              <div className="flex items-center space-x-4">
                                <img
                                  src="/placeholder.svg"
                                  width={64}
                                  height={64}
                                  alt="NFT"
                                  className="rounded-full"
                                  style={{ aspectRatio: "64/64", objectFit: "cover" }}
                                />
                                <div className="grid gap-0.5">
                                  <h3 className="whitespace-nowrap font-semibold tracking-tight text-base">PixelPals Collection</h3>
                                  <p className="text-muted-foreground text-sm">
                                    The PixelPals Collection features 5,000 algorithmically generated pixel art characters.
                                  </p>
                                </div>
                              </div>
                              <h3 className="whitespace-nowrap font-semibold tracking-tight text-2xl">$PPC</h3>
                              <p className="text-muted-foreground text-sm">Supply: 1,789 / 5,000</p>
                            </div>
                            <div className="p-0">
                              <img
                                src="/placeholder.svg"
                                width={300}
                                height={300}
                                alt="NFT"
                                className="rounded-b-xl object-cover"
                                style={{ aspectRatio: "300/300", objectFit: "cover" }}
                              />
                            </div>
                          </div>
                        </div>
                )}
                {/* Add your main content here */}
            </main>

            {/* Footer */}
            <footer className="p-4 mb-0 bg-gray-700 text-gray-200 text-center">
                &copy; 2024 Tar App. All rights reserved.
            </footer>
        </div>
    );
}
