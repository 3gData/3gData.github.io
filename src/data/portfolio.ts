import type { LucideIcon } from "lucide-react";
import { Boxes, Code2, Database, Gamepad2, GitBranch, Layout } from "lucide-react";

export interface Game {
  title: string;
  description: string;
  genre: string;
  visits: string;
  votes: { likes: number; dislikes: number };
  url: string;
  staticThumbnail: string | null;
  universeId: string | null;
  owned?: boolean;
  details: {
    role: string | null;
    dates: string | null;
    contributions: string[];
  };
}

// Vote counts checked against Roblox on 26 September 2026.
export const games: Game[] = [
  {
    title: "Build Your City!",
    description:
      "Build houses, grow your population, and earn money from shops and businesses. Expand your roads and unlock bigger buildings as your city grows.",
    genre: "Simulation · City Builder",
    visits: "86K+",
    votes: { likes: 558, dislikes: 20 },
    url: "https://www.roblox.com/games/109220430409872/Build-Your-City",
    staticThumbnail: "https://tr.rbxcdn.com/180DAY-a10c70285624abb2ee1c85abb193c383/768/432/Image/Png/noFilter",
    universeId: "10696967073",
    owned: true,
    details: {
      role: "Owner & Sole Programmer",
      dates: "September 2026 · 2 weeks",
      contributions: [
        "Own the game and scripted it in full.",
      ],
    },
  },
  {
    title: "Build A Pickaxe Farm",
    description:
      "Roll for pickaxes, place them to mine ores, and sell your haul. Upgrade your farm, prestige for boosts, and keep earning while offline.",
    genre: "Simulation · Incremental",
    visits: "74K+",
    votes: { likes: 503, dislikes: 27 },
    url: "https://www.roblox.com/games/103923502367288/Build-A-Pickaxe-Farm",
    staticThumbnail: "https://tr.rbxcdn.com/180DAY-12e36c63cee1a8922273e4c0223ef487/768/432/Image/Png/noFilter",
    universeId: "10196385073",
    owned: true,
    details: {
      role: "Owner & Sole Programmer",
      dates: "June 2026 · 1 week",
      contributions: [
        "Own the game and scripted it in full.",
      ],
    },
  },
  {
    title: "Obby But You're On a Bike",
    description:
      "Beat 100 unique worlds of challenging obstacle courses on your trusty bike. Compete on speedrun leaderboards.",
    genre: "Obby · Platformer",
    visits: "1.2B+",
    votes: { likes: 947036, dislikes: 293255 },
    url: "https://www.roblox.com/games/14184086618/Obby-But-You-re-On-a-Bike",
    staticThumbnail: "/assets/screenshot-2026-06-14T21-23-03.jpg",
    universeId: "4908792642",
    details: {
      role: "Programmer",
      dates: "October 2023 – March 2024",
      contributions: [
        "General systems maintenance and optimizations.",
        "Brand integrations for the ICC Men's Cricket World Cup and Nickelodeon RPS.",
        "Maintained the game's codebase solo at 100k CCU during October until additional members were added to the team.",
        "Scripted the season pass in my first week, the biggest monetization improvement to the game.",
        "Integrated new features, including procedurally generated race modes and the world editor mode.",
        "Live update system with secure remote code execution to target issues during gameplay and issue update timers and rewards.",
      ],
    },
  },
  {
    title: "Tower Battles",
    description:
      "Strategic tower defense — defend against zombie waves, place custom towers, and send enemies at your opponents.",
    genre: "Strategy · Tower Defense",
    visits: "550M+",
    votes: { likes: 411169, dislikes: 39050 },
    url: "https://www.roblox.com/games/45146873/Tower-Battles",
    staticThumbnail: "https://t3.rbxcdn.com/180DAY-586d3a8e3fe2ae8314ede2cfa73c6986",
    universeId: "39559307",
    details: {
      role: "Commission-based Programmer",
      dates: "2022",
      contributions: [
        "Commissioned to upgrade the game's datastores to ProfileService.",
      ],
    },
  },
  {
    title: "Fly Race!",
    description:
      "Collect orbs to charge up and gain flight. Gather pets, soar through the world, and reach the highest studs possible.",
    genre: "Simulation · Racing",
    visits: "90M+",
    votes: { likes: 1026161, dislikes: 29056 },
    url: "https://www.roblox.com/games/6679968919/Fly-Race",
    staticThumbnail: "https://t3.rbxcdn.com/180DAY-34357bdf76f29bc7791cc5853cd0ff83",
    universeId: "2516682908",
    details: {
      role: "Programmer",
      dates: "November 2022 – 2022",
      contributions: [
        "Maintained the game and shipped new content updates.",
        "Fixed existing bugs.",
      ],
    },
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
