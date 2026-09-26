import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, CalendarDays, UserRound, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Game } from "@/data/portfolio";

interface GameDetailsProps {
  game: Game;
  open: boolean;
  onClose: () => void;
}

export function GameDetails({ game, open, onClose }: GameDetailsProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;

    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
      className="m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto overscroll-contain rounded-2xl border border-border bg-card p-0 text-foreground shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
              Project contributions
            </p>
            <h2 id={titleId} className="font-heading text-2xl font-bold leading-tight sm:text-3xl">
              {game.title}
            </h2>
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            autoFocus
            aria-label="Close project details"
            onClick={() => dialogRef.current?.close()}
            className="shrink-0 rounded-full hover:border-primary hover:bg-primary/10 hover:text-primary"
          >
            <X aria-hidden="true" />
          </Button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80">{game.description}</p>

        <dl className="my-7 grid grid-cols-1 gap-5 border-y border-border py-5 sm:grid-cols-2">
          <div>
            <dt className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
              <UserRound className="h-4 w-4 text-primary" aria-hidden="true" />
              My role
            </dt>
            <dd className="text-sm font-medium">{game.details.role ?? "Details coming soon"}</dd>
          </div>
          <div>
            <dt className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
              <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
              Dates worked
            </dt>
            <dd className="text-sm font-medium">{game.details.dates ?? "Dates coming soon"}</dd>
          </div>
        </dl>

        <section aria-labelledby={`${titleId}-contributions`}>
          <h3 id={`${titleId}-contributions`} className="mb-4 font-heading text-lg font-semibold">
            What I contributed
          </h3>
          {game.details.contributions.length > 0 ? (
            <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground/90 marker:text-primary">
              {game.details.contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed text-muted-foreground/70">
              A detailed breakdown of my work on this project is coming soon.
            </p>
          )}
        </section>

        <div className="mt-8 border-t border-border pt-5">
          <Button asChild variant="outline" className="w-full hover:border-primary hover:bg-primary/10 hover:text-primary sm:w-auto">
            <a href={game.url} target="_blank" rel="noopener noreferrer">
              Play on Roblox <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </dialog>,
    document.body,
  );
}
