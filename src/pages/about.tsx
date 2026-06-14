import { Helmet } from "@dr.pogodin/react-helmet";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { aboutStats, fadeUp } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About — 4gdev</title>
        <meta
          name="description"
          content="Roblox programmer since 2018. Full-stack game development — datastore architecture, server authority, UI, VFX, and professional Rojo/Git workflows."
        />
      </Helmet>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-sm font-medium text-primary uppercase tracking-widest mb-3"
            >
              About
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-8"
            >
              Roblox programmer since 2018
            </motion.h1>

            <motion.div
              variants={fadeUp}
              custom={0.2}
              className="space-y-6 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                I'm a Roblox programmer who's been building games since 2018. I started with solo projects,
                picked up commissions, and eventually moved into full-time roles on some of the platform's
                biggest titles.
              </p>
              <p>
                I work across the full stack of a Roblox game — backend systems like datastore architecture,
                server authority, and performance under load, as well as frontend work: tactile UI interactions,
                VFX scripted to gameplay events, and polished HUDs that feel good to use. I've shipped across a
                range of genres — tower defence, simulators, obbies, strategy — so I'm comfortable picking up an
                unfamiliar codebase and contributing quickly.
              </p>
              <p>
                I use Rojo and Git on every project. Clean version control and a proper development workflow
                matter to me — especially when working in a team or handing off code.
              </p>
              <p>
                If you need a programmer who can ship reliable systems and work professionally, feel free to get
                in touch.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="mt-10 relative overflow-hidden rounded-xl border border-border bg-card"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--primary) / 0.08) 0%, hsl(var(--card)) 40%, hsl(var(--secondary) / 0.06) 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="relative grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
                {aboutStats.map((stat) => (
                  <div key={stat.label} className="px-4 py-8 text-center">
                    <p className="text-2xl md:text-3xl font-bold font-heading text-primary mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={0.4} className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/games">
                  See my work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:bg-muted">
                <Link to="/contact">Get in touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
