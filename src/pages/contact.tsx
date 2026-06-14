import { Helmet } from "@dr.pogodin/react-helmet";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp } from "@/data/portfolio";

const DISCORD_USERNAME = "3gdata";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Hire Me — 4gdev</title>
        <meta
          name="description"
          content="Hire 4gdev for Roblox commissions, scripting work, or full-time game development projects."
        />
      </Helmet>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-sm font-medium text-primary uppercase tracking-widest mb-3"
            >
              Contact
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4"
            >
              Let's work together
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="text-muted-foreground text-lg leading-relaxed mb-12"
            >
              Available for commissions, contract work, and full-time projects. Reach out on Discord — I'll get
              back to you.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.3}>
              <Card className="bg-card border-border">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-5 mx-auto">
                    <img
                      src="/assets/discord-logo-discord-icon-transparent-free-png.png"
                      alt="Discord"
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                  <h2 className="font-semibold font-heading text-foreground mb-2">Discord</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Fastest way to discuss a project or commission.
                  </p>
                  <p className="text-2xl font-bold font-heading text-primary mb-6">{DISCORD_USERNAME}</p>
                  <Button asChild variant="outline" className="w-full border-border">
                    <a href="https://discord.com/app" target="_blank" rel="noopener noreferrer">
                      Open Discord
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
