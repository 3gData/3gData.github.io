import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link to="/" className="text-lg font-bold text-foreground font-heading tracking-tight">
              4gdev<span className="text-primary">.</span>
            </Link>
            <p className="text-xs text-muted-foreground mt-1">Roblox Game Developer</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { href: '/games', label: 'Games' },
              { href: '/skills', label: 'Skills' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://www.roblox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="Roblox Profile"
            >
              Roblox
            </a>
            <a
              href="https://discord.com/app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Discord"
            >
              <img src="/assets/discord-logo-discord-icon-transparent-free-png.png" alt="Discord" className="h-5 w-5 object-contain" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="X / Twitter"
            >
              X
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {currentYear} 4gdev. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
