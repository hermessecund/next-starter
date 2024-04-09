'use client'
import Image from "next/image";
import { client } from "./client";

import Logo from "@public/logo.png";
import { ConnectButton } from "@/app/thirdweb";
import NavLinks from "./nav";
import { useState, useEffect } from 'react';
import Icons from "./icons";

export default function Header() {
    const [connected, setConnected] = useState(false);

    // Function to handle connection to Thirdweb
    const handleConnect = () => {
        // Your logic to connect to Thirdweb
        setConnected(true);
    };
    return (
       <div className="relative min-h-screen">

      
 
      

    <header className="flex flex-col md:flex-row justify-center items-center p-4 bg-black text-white">
              <iframe src="https://next-starter-rouge-five.vercel.app/days.html" title="Days Iframe" height="70" frameBorder="0" style={{ minWidth: "150px" }}></iframe>
        <div className="flex items-center md:order-1">
            <button className="mr-4 focus:outline-none">
                {/* Small logo */}
                <Image src={Logo} alt="Logo" width={102} height={102} />
            </button>
        </div>
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
            <main className="p-4 bg-black ">
    

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
            <footer className="p-4 mb-0 bg-black text-gray-200 text-center">
              <iframe src="https://next-starter-rouge-five.vercel.app/long.html" title="Days Iframe" width="100%" height="300px" frameBorder="0"></iframe>
            </footer>
        </div>
    );
}
