import { Helmet } from "@dr.pogodin/react-helmet";
import { motion } from "motion/react";
import { Play } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { fadeUp } from "@/data/portfolio";

const videos = [
  {
    title: "Gameplay & systems showcase",
    description: "Clips from live projects — scripting, VFX, and UI in action.",
    status: "Coming soon",
  },
  {
    title: "Behind the scenes",
    description: "Studio workflow, architecture decisions, and performance tuning.",
    status: "Coming soon",
  },
];

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
              Showcases and dev content — add your YouTube or Roblox video links here when ready.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, i) => (
              <motion.div
                key={video.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.1}
              >
                <Card className="overflow-hidden bg-card border-border">
                  <div
                    className="aspect-video flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--primary) / 0.15) 0%, hsl(var(--secondary) / 0.1) 100%)",
                    }}
                  >
                    <Play className="h-12 w-12 text-primary/40" />
                  </div>
                  <CardContent className="p-6">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{video.status}</span>
                    <h2 className="text-lg font-semibold font-heading text-foreground mt-2 mb-2">{video.title}</h2>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
