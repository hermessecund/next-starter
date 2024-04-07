import Image from "next/image";
import { ConnectButton } from "@/app/thirdweb";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div>
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
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Tar App</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
          risus nec ante congue lobortis nec sit amet urna.
        </p>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-gray-200 text-center">
        &copy; 2024 Tar App. All rights reserved.
      </footer>
    </div>
  );
}
