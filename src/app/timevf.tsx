import { useState, useEffect } from 'react';

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

        const intervalId = setInterval(updateTime, 1000);

        // Cleanup function
        return () => clearInterval(intervalId);
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
