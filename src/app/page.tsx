import Image from "next/image";
import { ConnectButton } from "@/app/thirdweb";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
        <div className="flex justify-center mt-10">
          <ConnectButton
            client={client}
            appMetadata={{
              name: "Tar App",
              url: "https://tarwar.com",
            }}
          />
        </div>
    </main>
  );
}
