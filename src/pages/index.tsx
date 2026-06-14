import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { ArrowRight } from "lucide-react";

import { GameCard } from "@/components/GameCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, games, skills } from "@/data/portfolio";

export default function HomePage() {
  const title = "4gdev — Roblox Game Developer";
  const description =
    "Professional Roblox game developer specializing in Luau scripting, game systems, and multiplayer experiences. Available for commissions and full-time projects.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://4gdev.xyz/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://4gdev.xyz/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "4gdev",
            url: "https://4gdev.xyz",
            jobTitle: "Roblox Game Developer",
            description,
          })}
        </script>
      </Helmet>

      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-6 py-24 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-block text-sm font-medium text-primary border border-primary/30 bg-primary/10 px-3 py-1 rounded-full mb-6">
                Available for hire
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-foreground mb-6 leading-[1.05]"
            >
              Hi, I'm <span className="text-primary">4gdev</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="text-lg md:text-xl text-muted-foreground mb-4 font-medium"
            >
              Roblox Game Developer · Scripter · Available for Hire
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={0.3}
              className="text-base text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              I build polished, high-performance Roblox games — from tight gameplay systems and
              multiplayer infrastructure to clean in-game UIs. Whether you need a full game or a
              specific system scripted, I get it done right.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.4} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-semibold">
                <Link to="/games">
                  View My Games <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold border-border hover:bg-muted">
                <Link to="/contact">Hire Me</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              What I do
            </motion.p>
            <motion.h2 variants={fadeUp} custom={0.1} className="text-3xl md:text-4xl font-bold font-heading text-foreground">
              Core Skills
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.1}
              >
                <Card className="h-full bg-card border-border hover:border-primary/40 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <skill.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold font-heading text-foreground mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
          >
            <div>
              <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
                Portfolio
              </motion.p>
              <motion.h2 variants={fadeUp} custom={0.1} className="text-3xl md:text-4xl font-bold font-heading text-foreground">
                Featured Games
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} custom={0.2}>
              <Button asChild variant="outline" className="border-border hover:bg-muted">
                <Link to="/games">
                  View all games <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {games.map((game, i) => (
              <GameCard key={game.title} game={game} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Work with me
            </motion.p>
            <motion.h2 variants={fadeUp} custom={0.1} className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Available for commissions and full-time projects.
            </motion.h2>
            <motion.p variants={fadeUp} custom={0.2} className="text-muted-foreground mb-8 text-lg">
              Let's build something great.
            </motion.p>
            <motion.div variants={fadeUp} custom={0.3}>
              <Button asChild size="lg" className="font-semibold px-8">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
