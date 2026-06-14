import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Gamepad2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, type Game } from "@/data/portfolio";

interface GameCardProps {
  game: Game;
  index?: number;
}

export function GameCard({ game, index = 0 }: GameCardProps) {
  const [thumbnail, setThumbnail] = useState<string | null>(game.staticThumbnail);

  useEffect(() => {
    if (thumbnail || !game.universeId) return;

    let cancelled = false;
    fetch(`/api/roblox-thumbnail?universeId=${game.universeId}`)
      .then((response) => response.json())
      .then((data: { imageUrl?: string }) => {
        if (!cancelled && data.imageUrl) setThumbnail(data.imageUrl);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [game.universeId, thumbnail]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index * 0.1}
    >
      <Card className="overflow-hidden bg-card border-border hover:border-primary/40 transition-colors duration-300 group h-full flex flex-col">
        <div
          className="aspect-video w-full relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--primary) / 0.15) 0%, hsl(var(--secondary) / 0.1) 50%, hsl(var(--accent) / 0.08) 100%)",
          }}
        >
          {thumbnail ? (
            <>
              <img
                src={thumbnail}
                alt={`${game.title} thumbnail`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Gamepad2 className="h-10 w-10 text-primary/30" />
            </div>
          )}
          <div className="absolute top-3 left-3">
            <span className="text-xs font-medium bg-background/70 backdrop-blur-sm text-muted-foreground px-2 py-1 rounded">
              {game.genre}
            </span>
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="text-xs font-medium bg-background/70 backdrop-blur-sm text-primary px-2 py-1 rounded">
              {game.visits} visits
            </span>
          </div>
        </div>
        <CardContent className="p-5 flex flex-col flex-1">
          <h3 className="font-semibold font-heading text-foreground mb-2">{game.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">{game.description}</p>
          <div className="mt-4">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="w-full border-border hover:border-primary hover:text-primary transition-colors"
            >
              <a href={game.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-3.5 w-3.5" />
                Play on Roblox
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
