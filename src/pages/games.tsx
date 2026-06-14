import { Helmet } from "@dr.pogodin/react-helmet";
import { motion } from "motion/react";

import { GameCard } from "@/components/GameCard";
import { fadeUp, games } from "@/data/portfolio";

export default function GamesPage() {
  return (
    <>
      <Helmet>
        <title>Games — 4gdev</title>
        <meta
          name="description"
          content="Roblox games built and contributed to by 4gdev — from billion-visit obbies to strategy and simulation titles."
        />
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
              Portfolio
            </motion.p>
            <motion.h1 variants={fadeUp} custom={0.1} className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              My Games
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="text-muted-foreground text-lg leading-relaxed">
              A selection of Roblox experiences I've helped build — spanning obbies, tower defense, and simulation genres.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, i) => (
              <GameCard key={game.title} game={game} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
