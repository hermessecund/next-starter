import Image from "next/image";
import { useState } from "react";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";

export default function Home() {
  // State for profile creation
  const [profileCreated, setProfileCreated] = useState(false);

  // Function to handle profile creation
  const handleCreateProfile = () => {
    // Implementation for creating profile
    setProfileCreated(true);
  };

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
        <div>
          {/* Connect Button */}
          <button onClick={handleCreateProfile} className="text-white bg-blue-500 px-4 py-2 rounded-md">
            Create Profile
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Timeverse</h1>
        <div className="text-lg">
          {profileCreated ? (
            <div>
              {/* Display Welcome Message */}
              <p>Welcome back! Your profile has been successfully created.</p>
              <p>Discover your birthdate value and delve deeper into the Timeverse, where every moment is unique and significant.</p>
            </div>
          ) : (
            <div>
              {/* Display Default Message */}
              <p>Embark on an extraordinary journey through time with us. Start by creating your profile and unlocking a world of possibilities.</p>
              <p>Discover your birthdate value and delve deeper into the Timeverse, where every moment is unique and significant.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-gray-700 text-gray-200 text-center">
        &copy; 2024 Tar App. All rights reserved.
      </footer>
    </div>
  );
}
