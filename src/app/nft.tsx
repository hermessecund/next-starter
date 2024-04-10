import React from 'react';

const Nfts: React.FC = () => {
    return (
        <div>
            {/* Your Token component content */}
            <h2>Nft Component</h2>
              
<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
  <div className="flex flex-col gap-2 rounded-lg overflow-hidden">
    <div className="rounded-t-lg overflow-hidden">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-4">
          <div className="grid gap-1.5">
            <h3 className="whitespace-nowrap font-semibold tracking-tight text-base">Cosmic Horror Series</h3>
            <p className="text-muted-foreground text-sm">Embrace the unknown with this Lovecraftian collection.</p>
          </div>
        </div>
        <div className="p-0">
          <img
            src="/placeholder.svg"
            width="400"
            height="200"
            alt="Cosmic Horror Series"
            className="w-full object-cover"
            style="aspect-ratio:400/200;object-fit:cover"
          />
        </div>
        <div className="items-center flex justify-between p-4">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <span className="text-sm font-semibold">12 ETH</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span className="text-sm font-semibold">1000/1000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col gap-2 rounded-lg overflow-hidden">
    <div className="rounded-t-lg overflow-hidden">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-4">
          <div className="grid gap-1.5">
            <h3 className="whitespace-nowrap font-semibold tracking-tight text-base">Digital Dreamscape</h3>
            <p className="text-muted-foreground text-sm">A limited collection of AI-generated landscapes.</p>
          </div>
        </div>
        <div className="p-0">
          <img
            src="/placeholder.svg"
            width="400"
            height="200"
            alt="Digital Dreamscape"
            className="w-full object-cover"
            style="aspect-ratio:400/200;object-fit:cover"
          />
        </div>
        <div className="items-center flex justify-between p-4">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <span className="text-sm font-semibold">8.5 ETH</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span className="text-sm font-semibold">750/1000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col gap-2 rounded-lg overflow-hidden">
    <div className="rounded-t-lg overflow-hidden">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-4">
          <div className="grid gap-1.5">
            <h3 className="whitespace-nowrap font-semibold tracking-tight text-base">Pixel Pioneers</h3>
            <p className="text-muted-foreground text-sm">The first-ever collection of blockchain pixel art.</p>
          </div>
        </div>
        <div className="p-0">
          <img
            src="/placeholder.svg"
            width="400"
            height="200"
            alt="Pixel Pioneers"
            className="w-full object-cover"
            style="aspect-ratio:400/200;object-fit:cover"
          />
        </div>
        <div className="items-center flex justify-between p-4">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <span className="text-sm font-semibold">5 ETH</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span className="text-sm font-semibold">900/1000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col gap-2 rounded-lg overflow-hidden">
    <div className="rounded-t-lg overflow-hidden">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-4">
          <div className="grid gap-1.5">
            <h3 className="whitespace-nowrap font-semibold tracking-tight text-base">Future Fashion</h3>
            <p className="text-muted-foreground text-sm">Wearable NFTs from top designers.</p>
          </div>
        </div>
        <div className="p-0">
          <img
            src="/placeholder.svg"
            width="400"
            height="200"
            alt="Future Fashion"
            className="w-full object-cover"
            style="aspect-ratio:400/200;object-fit:cover"
          />
        </div>
        <div className="items-center flex justify-between p-4">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <span className="text-sm font-semibold">15 ETH</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span className="text-sm font-semibold">250/1000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col gap-2 rounded-lg overflow-hidden">
    <div className="rounded-t-lg overflow-hidden">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-4">
          <div className="grid gap-1.5">
            <h3 className="whitespace-nowrap font-semibold tracking-tight text-base">Crypto Critters</h3>
            <p className="text-muted-foreground text-sm">Adorable creatures on the blockchain.</p>
          </div>
        </div>
        <div className="p-0">
          <img
            src="/placeholder.svg"
            width="400"
            height="200"
            alt="Crypto Critters"
            className="w-full object-cover"
            style="aspect-ratio:400/200;object-fit:cover"
          />
        </div>
        <div className="items-center flex justify-between p-4">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <span className="text-sm font-semibold">2.5 ETH</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span className="text-sm font-semibold">5000/10000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Nfts;
