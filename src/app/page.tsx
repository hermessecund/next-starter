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
        {/* Rendering UsersProfiles component */}
        <UsersProfiles />
      </main>

      {/* Footer */}
      <footer className="p-4 bg-gray-200 text-center">
        &copy; 2024 Tar App. All rights reserved.
      </footer>
    </div>
  );
}

// Define UsersProfiles outside of the Home component
function UsersProfiles() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 justify-center">
      <ArticleCard
        title="Create Profile"
        onClick={createProfile}
        description="Create a new user profile on Thirdweb."
      />

      <ArticleCard
        title="Create Message"
        onClick={createMessage}
        description="Compose a new message on Thirdweb."
      />

      <ArticleCard
        title="Set Day Info"
        onClick={setDayInfo}
        description="Set daily information updates on Thirdweb."
      />
    </div>
  );
}

// Define ArticleCard component outside of the Home component
function ArticleCard(props: { title: string; onClick: () => void; description: string; }) {
  return (
    <button
      onClick={props.onClick}
      className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </button>
  );
}

// Define createProfile, createMessage, and setDayInfo functions
function createProfile() {
  // Your logic for creating a profile
}

function createMessage() {
  // Your logic for creating a message
}

function setDayInfo() {
  // Your logic for setting day info
}
