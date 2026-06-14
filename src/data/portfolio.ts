import type { LucideIcon } from "lucide-react";
import { Boxes, Code2, Database, Gamepad2, GitBranch, Layout } from "lucide-react";

export interface Game {
  title: string;
  description: string;
  genre: string;
  visits: string;
  url: string;
  staticThumbnail: string | null;
  universeId: string | null;
}

export const games: Game[] = [
  {
    title: "Obby But You're On a Bike",
    description:
      "Beat 100 unique worlds of challenging obstacle courses on your trusty bike. Compete on speedrun leaderboards.",
    genre: "Obby · Platformer",
    visits: "1.2B+",
    url: "https://www.roblox.com/games/14184086618/Obby-But-You-re-On-a-Bike",
    staticThumbnail: "/assets/screenshot-2026-06-14T21-23-03.jpg",
    universeId: null,
  },
  {
    title: "Tower Battles",
    description:
      "Strategic tower defense — defend against zombie waves, place custom towers, and send enemies at your opponents.",
    genre: "Strategy · Tower Defense",
    visits: "550M+",
    url: "https://www.roblox.com/games/45146873/Tower-Battles",
    staticThumbnail: "https://t3.rbxcdn.com/180DAY-586d3a8e3fe2ae8314ede2cfa73c6986",
    universeId: "17984679",
  },
  {
    title: "Fly Race!",
    description:
      "Collect orbs to charge up and gain flight. Gather pets, soar through the world, and reach the highest studs possible.",
    genre: "Simulation · Racing",
    visits: "90M+",
    url: "https://www.roblox.com/games/6679968919/Fly-Race",
    staticThumbnail: "https://t3.rbxcdn.com/180DAY-34357bdf76f29bc7791cc5853cd0ff83",
    universeId: "2462535763",
  },
];

export interface Skill {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const skills: Skill[] = [
  {
    icon: Code2,
    title: "Lua / Luau Scripting",
    description:
      "Writing clean, performant Luau scripts for game logic, systems, and server-client communication.",
  },
  {
    icon: Gamepad2,
    title: "Game Systems & VFX",
    description:
      "Interactive gameplay loops, particle VFX scripted to gameplay events, and tactile UI interactions engineered to boost engagement.",
  },
  {
    icon: Layout,
    title: "UI/UX in Roblox Studio",
    description:
      "Building polished, responsive in-game interfaces using ScreenGui, Frames, and custom UI libraries.",
  },
  {
    icon: Database,
    title: "Multiplayer & DataStore",
    description:
      "Implementing reliable DataStore systems, remote events, and smooth multiplayer experiences.",
  },
  {
    icon: GitBranch,
    title: "Git, Rojo & Source Control",
    description:
      "Git-based workflows, branching, and Rojo sync for filesystem development outside Studio — built for team collaboration and clean history.",
  },
  {
    icon: Boxes,
    title: "Knit & SSA Frameworks",
    description:
      "Structured service and controller architecture with Knit and SSA — modular codebases that scale as features and team size grow.",
  },
];

export const aboutStats = [
  { label: "Total Visits", value: "1.8B+" },
  { label: "Years on Roblox", value: "8+" },
  { label: "Games Shipped", value: "10+" },
  { label: "Since", value: "2018" },
];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  }),
};
