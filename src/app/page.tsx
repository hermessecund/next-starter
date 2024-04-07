import Image from "next/image";
import { ConnectButton } from "@/app/thirdweb";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Header />
        <div className="flex justify-end mb-6">
          <div className="flex space-x-4">
            <ProfileButton />
            <MessageButton />
            <DayInfoButton />
          </div>
        </div>
        <TimeverseResources />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={timeverseIcon}
        alt=""
        className="size-[150px] md:size-[150px]"
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />
      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        Timeverse Platform
        <span className="text-zinc-300 inline-block mx-1"> + </span>
        <span className="inline-block -skew-x-6 text-blue-500"> Next.js </span>
      </h1>
      <p className="text-zinc-300 text-base">
        Read the{" "}
        <code className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1">
          README.md
        </code>{" "}
        file to get started.
      </p>
    </header>
  );
}

function TimeverseResources() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 justify-center">
      <ArticleCard
        title="Timeverse Documentation"
        href="https://timeverse.com/docs"
        description="Timeverse Platform documentation"
      />
      <ArticleCard
        title="API Reference"
        href="https://timeverse.com/api"
        description="Explore the Timeverse Platform API"
      />
      <ArticleCard
        title="Timeverse Dashboard"
        href="https://timeverse.com/dashboard"
        description="Manage your Timeverse account and data"
      />
    </div>
  );
}

function ArticleCard(props: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={props.href + "?utm_source=next-template"}
      target="_blank"
      className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </a>
  );
}

// Placeholder components for the new buttons
function ProfileButton() {
  return (
    <button className="text-white bg-blue-500 px-4 py-2 rounded-md">Create Profile</button>
  );
}

function MessageButton() {
  return (
    <button className="text-white bg-blue-500 px-4 py-2 rounded-md">Create Message</button>
  );
}

function DayInfoButton() {
  return (
    <button className="text-white bg-blue-500 px-4 py-2 rounded-md">Set Day Info</button>
  );
}
