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
                            <div className="p-0 w-full">
                                <img
                                    src="/phase2.png"
                                    height={300}
                                    alt="NFT"
                                    className="rounded-b-xl object-cover w-full"
                                    style={{ aspectRatio: "300/300", objectFit: "cover" }}
                                />
                            </div>
                    </div>
                </div>
            </div>
 {/* 2 NFT card */}
            <div className="flex flex-col gap-2 rounded-lg overflow-hidden">
                <div className="rounded-lg overflow-hidden">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
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
                </div>
            </div>

             {/* 3 NFT card */}
            <div className="flex flex-col gap-2 rounded-lg overflow-hidden">
                <div className="rounded-lg overflow-hidden">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
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
                </div>
            </div>
            {/* 4 NFT card */}
            <div className="flex flex-col gap-2 rounded-lg overflow-hidden">
                <div className="rounded-lg overflow-hidden">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
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
                </div>
            </div>
        </div>
    );
};

export default Nfts;
