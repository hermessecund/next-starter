import React from 'react';

const Nfts: React.FC = () => {
    return (
               <div className="flex flex-wrap justify-center gap-6 p-4">
            {/* First NFT card */}
            <div className="flex flex-col gap-2 rounded-lg overflow-hidden">
                <div className="rounded-lg overflow-hidden">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
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
                </div>
            </div>

            {/* Second NFT card */}
            <div className="flex flex-col gap-2 rounded-lg overflow-hidden">
                <div className="rounded-lg overflow-hidden">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
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
                </div>
            </div>
                           <div className="flex flex-wrap justify-center gap-6 p-4">
            {/* 3 NFT card */}
            <div className="flex flex-col gap-2 rounded-lg overflow-hidden">
                <div className="rounded-lg overflow-hidden">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-col space-y-1.5 p-6 rounded-xl">
                            <div className="flex items-center space-x-4">
                                <img
                                    src="/etb.png"
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
                                src="/etb.png"
                                alt="NFT"
                                className="rounded-b-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* 4 NFT card */}
            <div className="flex flex-col gap-2 rounded-lg overflow-hidden">
                <div className="rounded-lg overflow-hidden">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-col space-y-1.5 p-6 rounded-xl">
                            <div className="flex items-center space-x-4">
                                <img
                                    src="/hs12-360.gif"
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
                                src="/hs12-360.gif"
                                alt="NFT image1"
                                className="rounded-b-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nfts;
