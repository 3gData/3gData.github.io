import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink, Gamepad2, ThumbsUp } from "lucide-react";

import { GameDetails } from "@/components/GameDetails";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, type Game } from "@/data/portfolio";

interface GameCardProps {
  game: Game;
  index?: number;
}

export function GameCard({ game, index = 0 }: GameCardProps) {
  const [thumbnail, setThumbnail] = useState<string | null>(game.staticThumbnail);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const totalVotes = game.votes.likes + game.votes.dislikes;
  const likeRatio = totalVotes > 0 ? ((game.votes.likes / totalVotes) * 100).toFixed(1) : null;

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
      <Card className="relative isolate cursor-pointer overflow-hidden bg-card border-border hover:border-primary/40 transition-colors duration-300 group h-full flex flex-col">
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
          <div className="absolute bottom-3 inset-x-3 flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded bg-background/90 px-2 py-1 text-xs font-medium text-emerald-300 backdrop-blur-sm">
              <ThumbsUp className="h-3.5 w-3.5" aria-hidden="true" />
              {likeRatio !== null ? `${likeRatio}% liked` : "No votes yet"}
            </span>
            <span className="text-xs font-medium bg-background/70 backdrop-blur-sm text-primary px-2 py-1 rounded">
              {game.visits} visits
            </span>
          </div>
        </div>
        <CardContent className="p-5 flex flex-col flex-1">
          {game.owned && (
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
              Owned &amp; fully scripted
            </p>
          )}
          <h3 className="font-semibold font-heading mb-1">
            <button
              type="button"
              aria-haspopup="dialog"
              onClick={() => setDetailsOpen(true)}
              className="group/title flex min-h-11 w-full items-center justify-between gap-3 text-left text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground after:absolute after:inset-0 after:z-10 after:rounded-lg after:content-[''] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-inset focus-visible:after:ring-ring"
            >
              {game.title}
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover/title:translate-x-1 motion-reduce:transform-none" aria-hidden="true" />
            </button>
          </h3>
          <p className="mb-3 text-xs text-muted-foreground/70">Click this card for contributions &amp; dates</p>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">{game.description}</p>
          <div className="mt-4">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="relative z-20 w-full border-border hover:border-primary hover:text-primary transition-colors"
            >
              <a href={game.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-3.5 w-3.5" />
                Play on Roblox
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
      <GameDetails game={game} open={detailsOpen} onClose={() => setDetailsOpen(false)} />
    </motion.div>
  );
}
