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
                  <p> &copy; {date.toLocaleDateString()} App. All rights reserved.</p>
                     <p><LiveClock format={'HH:mm:ss'} ticking /></p>
            </footer>
        </div>
    );
}

export default function Footer() {
    useEffect(() => {
        // Define the time units in seconds
        const SECONDS_PER_BINUTE = 120;
        const SECONDS_PER_HS = SECONDS_PER_BINUTE * 60;
        const SECONDS_PER_DAY = SECONDS_PER_HS * 12;
        const SECONDS_PER_DWEEK = SECONDS_PER_DAY * 6;
        const SECONDS_PER_DMONTH = SECONDS_PER_DWEEK * 5;
        const SECONDS_PER_DYEAR = SECONDS_PER_DMONTH * 12;
        const SECONDS_PER_30DYEAR = SECONDS_PER_DYEAR * 30;
        const SECONDS_PER_CYCLE = SECONDS_PER_30DYEAR * 30; 

        // Define the EPOCH as a datetime object
        const EPOCH = new Date(2022, 8, 23, 6, 0, 0, 0); 

        // Function to convert seconds to decentralized time units
        function convertToCycleZero(seconds) {
            let cycles = Math.floor(seconds / SECONDS_PER_CYCLE);
            seconds %= SECONDS_PER_CYCLE;
            let dyears = Math.floor(seconds / SECONDS_PER_30DYEAR);
            seconds %= SECONDS_PER_30DYEAR;
            let dmonths = Math.floor(seconds / SECONDS_PER_DMONTH);
            seconds %= SECONDS_PER_DMONTH;
            const dweeks = (Math.floor(seconds / SECONDS_PER_DWEEK) % 5);
            seconds %= SECONDS_PER_DWEEK;
            const days = (Math.floor(seconds / SECONDS_PER_DAY) % 6) ;
            seconds %= SECONDS_PER_DAY;
            const hs = (Math.floor(seconds / SECONDS_PER_HS) % 12);
            seconds = Math.round(seconds % SECONDS_PER_HS); 
            const binutes = Math.floor(seconds / SECONDS_PER_BINUTE);
            seconds = Math.round(seconds % SECONDS_PER_BINUTE); 

            if (dmonths > 11) {
                dmonths -= 12;
                dyears++;
            }
            if (dyears > 29) {
                dyears -= 30;
                cycles++;
            }

            return [cycles, dyears, dmonths, dweeks, days, hs, binutes, seconds];
        }

        function updateTime() {
            const now = new Date();
            const secondsSinceEpoch = (now - EPOCH) / 1000;
            const time = convertToCycleZero(secondsSinceEpoch);

            document.getElementById('timeplay').textContent = `${time[0]}.${time[1]}.${time[2]}.${time[3]}.${time[4]}@${time[5]}:${time[6]}:${time[7]}`;
        }

        setInterval(updateTime, 1000);
        updateTime(); // Call once to update immediately
    }, []);

    return (
        <footer className="p-4 mb-0 bg-gray-700 text-gray-200 text-center">
            <strong>
                <div className="mx-auto max-w-[700px] mb-4 text-center text-4xl font-extrabold text-2xl text-gray-700 dark:text-gray-100 md:text-x3" id="timeplay">
                    Loading...
                </div>
            </strong>
            <br />
            <div>
                <span id="cycles"></span>.<span id="dyears"></span>.<span id="dmonths"></span>.<span id="dweeks"></span>.<span id="days"></span>@<span id="hs"></span>:<span id="binutes"></span>:<span id="seconds"></span>
            </div>
        </footer>
    );
}
