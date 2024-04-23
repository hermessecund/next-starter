import React from 'react';

const Nfts: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            {/* First NFT card */}
            <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6 rounded-xl">
                    <div className="flex items-center space-x-4">
                        <img
                            src="/phase1.png"
                            alt="NFT"
                            className="rounded-full w-16 h-16 object-cover"
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
                <div className="p-0 w-full h-48"> {/* Fixed height for image container */}
                    <img
                        src="/phase2.png"
                        alt="NFT"
                        className="rounded-b-xl w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Second NFT card */}
            <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6 rounded-xl">
                    <div className="flex items-center space-x-4">
                        <img
                            src="/1s.png"
                            alt="NFT"
                            className="rounded-full w-16 h-16 object-cover"
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
                <div className="p-0 w-full h-48"> {/* Fixed height for image container */}
                    <img
                        src="/1s.png"
                        alt="NFT image1"
                        className="rounded-b-xl w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Third NFT card */}
            {/* Add your third NFT card here */}

            {/* Fourth NFT card */}
            {/* Add your fourth NFT card here */}

            {/* Repeat the structure for other NFT cards */}
        </div>
    );
};

export default Nfts;
