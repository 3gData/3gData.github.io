import { Helmet } from "@dr.pogodin/react-helmet";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, skills } from "@/data/portfolio";

export default function SkillsPage() {
  return (
    <>
      <Helmet>
        <title>Skills — 4gdev</title>
        <meta
          name="description"
          content="Luau scripting, game systems, VFX, UI/UX, multiplayer infrastructure, Git/Rojo source control, and Knit/SSA frameworks — core skills of Roblox developer 4gdev."
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
              Expertise
            </motion.p>
            <motion.h1 variants={fadeUp} custom={0.1} className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Core Skills
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="text-muted-foreground text-lg leading-relaxed">
              From low-level systems to player-facing polish — here's what I bring to every project.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
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
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold font-heading text-foreground mb-3">{skill.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
            variants={fadeUp}
            custom={0}
          >
            <Button asChild size="lg">
              <Link to="/contact">
                Discuss a project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
