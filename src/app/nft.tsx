import React from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

const Nfts: React.FC = () => {
    return (
<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
      <div className="flex flex-col gap-2 rounded-lg overflow-hidden">
        <div className="rounded-t-lg overflow-hidden">
          <Card>
            <CardHeader className="p-4">
              <div className="grid gap-1.5">
                <CardTitle className="text-base">Cosmic Horror Series</CardTitle>
                <CardDescription className="text-sm">
                  Embrace the unknown with this Lovecraftian collection.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <img
                alt="Cosmic Horror Series"
                className="w-full object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width={400}
              />
            </CardContent>
            <CardFooter className="flex justify-between p-4">
              <div className="flex items-center space-x-2">
                <HeartIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">12 ETH</span>
              </div>
              <div className="flex items-center space-x-2">
                <UsersIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">1000/1000</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-lg overflow-hidden">
        <div className="rounded-t-lg overflow-hidden">
          <Card>
            <CardHeader className="p-4">
              <div className="grid gap-1.5">
                <CardTitle className="text-base">Digital Dreamscape</CardTitle>
                <CardDescription className="text-sm">A limited collection of AI-generated landscapes.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <img
                alt="Digital Dreamscape"
                className="w-full object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width={400}
              />
            </CardContent>
            <CardFooter className="flex justify-between p-4">
              <div className="flex items-center space-x-2">
                <HeartIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">8.5 ETH</span>
              </div>
              <div className="flex items-center space-x-2">
                <UsersIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">750/1000</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-lg overflow-hidden">
        <div className="rounded-t-lg overflow-hidden">
          <Card>
            <CardHeader className="p-4">
              <div className="grid gap-1.5">
                <CardTitle className="text-base">Pixel Pioneers</CardTitle>
                <CardDescription className="text-sm">
                  The first-ever collection of blockchain pixel art.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <img
                alt="Pixel Pioneers"
                className="w-full object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width={400}
              />
            </CardContent>
            <CardFooter className="flex justify-between p-4">
              <div className="flex items-center space-x-2">
                <HeartIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">5 ETH</span>
              </div>
              <div className="flex items-center space-x-2">
                <UsersIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">900/1000</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-lg overflow-hidden">
        <div className="rounded-t-lg overflow-hidden">
          <Card>
            <CardHeader className="p-4">
              <div className="grid gap-1.5">
                <CardTitle className="text-base">Future Fashion</CardTitle>
                <CardDescription className="text-sm">Wearable NFTs from top designers.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <img
                alt="Future Fashion"
                className="w-full object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width={400}
              />
            </CardContent>
            <CardFooter className="flex justify-between p-4">
              <div className="flex items-center space-x-2">
                <HeartIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">15 ETH</span>
              </div>
              <div className="flex items-center space-x-2">
                <UsersIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">250/1000</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-lg overflow-hidden">
        <div className="rounded-t-lg overflow-hidden">
          <Card>
            <CardHeader className="p-4">
              <div className="grid gap-1.5">
                <CardTitle className="text-base">Crypto Critters</CardTitle>
                <CardDescription className="text-sm">Adorable creatures on the blockchain.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <img
                alt="Crypto Critters"
                className="w-full object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width={400}
              />
            </CardContent>
            <CardFooter className="flex justify-between p-4">
              <div className="flex items-center space-x-2">
                <HeartIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">2.5 ETH</span>
              </div>
              <div className="flex items-center space-x-2">
                <UsersIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">5000/10000</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
export default Nfts;
