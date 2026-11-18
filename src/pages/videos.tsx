import { useState } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { motion } from "motion/react";

import { Card, CardContent } from "@/components/ui/card";
import { fadeUp } from "@/data/portfolio";

// Media carried over from the original GitHub Pages portfolio (index.md, removed in 8dc2075).
// type: "video" = mp4 file, "embed" = iframe player (Streamable), "image" = still picture.
// label: only shown when an item has more than one clip, as the switch button text.
type Media = { type: "video" | "embed" | "image"; src: string; label?: string };

interface VideoItem {
  title: string;
  description: string;
  media: Media[];
}

const GH = "https://user-images.githubusercontent.com/91347920";

const videos: VideoItem[] = [
  {
    title: "Chain Physics",
    description: "A physics-driven chain that links and swings in real time.",
    media: [{ type: "video", src: "/assets/videos/chain-physics.mp4" }],
  },
  {
    title: "Mini City Simulation",
    description: "A small city where cars drive the road network players build.",
    media: [
      { type: "video", src: "/assets/videos/mini-city-simulation-2.mp4", label: "Clip 1" },
      { type: "video", src: "/assets/videos/mini-city-simulation.mp4", label: "Clip 2" },
    ],
  },
  {
    title: "Leaf Shake",
    description: "Plant leaves shake and sway as the player walks through them.",
    media: [{ type: "video", src: "/assets/videos/leaf-shake.mp4" }],
  },
  {
    title: "Plant Grow",
    description: "Planted seeds grow stage by stage into full strawberry plants.",
    media: [{ type: "video", src: "/assets/videos/plant-grow.mp4" }],
  },
  {
    title: "Anime Lightning Move",
    description: "Made in one hour with a single decal — one of my most refined VFX skills.",
    media: [{ type: "embed", src: "https://streamable.com/e/immatp" }],
  },
  {
    title: "Customisable Weather System",
    description:
      "Supports mixed weather built from preset combinations, driven by Atmosphere and Lighting effects.",
    media: [{ type: "video", src: `${GH}/166931597-ed757bd9-8c55-40ab-8106-c45d6a3b4de7.mp4` }],
  },
  {
    title: "Procedural Generation System",
    description:
      "Fractal Brownian Motion and other algorithms shape terrain per biome. Biomes come from temperature and Voronoi / Worley noise.",
    media: [
      { type: "image", src: `${GH}/166935095-eca1faa9-ddc4-47ad-be44-8191681b34d0.png`, label: "View 1" },
      { type: "image", src: `${GH}/166939032-07836ba2-236e-4d90-b7d6-1221830e3c93.png`, label: "View 2" },
    ],
  },
  {
    title: "Sound-Responsive Zombies",
    description:
      "Zombies that listen for sounds played nearby and also have sight. Built in a day with almost no assets.",
    media: [{ type: "video", src: `${GH}/166917287-f3764adb-db74-45a7-9ea3-23a67df0cdf2.mp4` }],
  },
  {
    title: "Todoroki Ice Skill",
    description:
      "An ice skill based on Todoroki from My Hero Academia. Shoots spikes that stun and damage enemies. Only the programming is mine; other assets belong to their owners.",
    media: [{ type: "video", src: `${GH}/166917294-42efbb32-da8f-4c3b-8df0-cb7a96f88fc9.mp4` }],
  },
  {
    title: "Self-Building Bridge",
    description: "A bridge that builds itself. Lighting, building and scripting all done by me.",
    media: [
      { type: "video", src: `${GH}/166917296-db377990-dbb0-4a7b-bcfa-78fc7aed916a.mp4`, label: "Night" },
      { type: "video", src: `${GH}/166917299-2da757fe-577d-4638-9642-292b7729cbe8.mp4`, label: "Day" },
    ],
  },
  {
    title: "Terrain Tool",
    description: "A terrain deformation tool inspired by Astroneer.",
    media: [{ type: "video", src: `${GH}/166917302-0459e6f8-e29f-4049-850a-3aa23368d152.mp4` }],
  },
  {
    title: "VR Camera",
    description: "A horror-themed game with a VR camera and eerie lighting. All assets made by me.",
    media: [{ type: "video", src: `${GH}/166917304-87f40039-d343-44ce-aa5c-4bb95198d7ce.mp4` }],
  },
];

function MediaView({ media, title }: { media: Media; title: string }) {
  if (media.type === "embed") {
    return <iframe src={media.src} title={title} allowFullScreen className="h-full w-full border-0" />;
  }
  if (media.type === "image") {
    return <img src={media.src} alt={title} loading="lazy" className="h-full w-full object-cover" />;
  }
  // "#t=0.1" makes the browser show the first frame instead of a black box before play.
  return (
    <video src={`${media.src}#t=0.1`} controls playsInline preload="metadata" className="h-full w-full bg-black object-contain" />
  );
}

function VideoCard({ item }: { item: VideoItem }) {
  const [active, setActive] = useState(0);
  const current = item.media[active];

  return (
    <Card className="overflow-hidden bg-card border-border h-full">
      <div className="aspect-video bg-black">
        <MediaView key={current.src} media={current} title={item.title} />
      </div>
      <CardContent className="p-6">
        {item.media.length > 1 && (
          <div className="mb-3 flex gap-2">
            {item.media.map((m, i) => (
              <button
                key={m.src}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  i === active
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        )}
        <h2 className="text-lg font-semibold font-heading text-foreground mb-2">{item.title}</h2>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  );
}

export default function VideosPage() {
  return (
    <>
      <Helmet>
        <title>Videos — 4gdev</title>
        <meta name="description" content="Video showcases and devlogs from 4gdev's Roblox projects." />
      </Helmet>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 max-w-2xl"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              Media
            </motion.p>
            <motion.h1 variants={fadeUp} custom={0.1} className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Videos
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="text-muted-foreground text-lg leading-relaxed">
              Systems, VFX and tools I've built in Roblox Studio.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={(i % 2) * 0.1}
              >
                <VideoCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
