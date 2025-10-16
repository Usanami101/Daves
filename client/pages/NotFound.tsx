import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen px-4 py-16 flex items-center justify-center">
      <div className="w-full max-w-xl border-[8px] border-double border-primary bg-card/95 shadow-[12px_12px_0_hsl(var(--secondary))] p-8 text-center space-y-6">
        <marquee className="bg-secondary text-secondary-foreground py-2 text-xs uppercase tracking-[0.35em]">
          Route not found • The payphone crackles with static • Dial 0 to return home •
        </marquee>
        <div className="space-y-4">
          <h1 className="text-4xl">404: Signal Lost</h1>
          <p className="font-mono text-sm text-foreground/85">
            We patched you into <span className="font-semibold">{location.pathname}</span>, but the line fizzled out. Maybe the
            cassette got tangled, or maybe that page never left the factory.
          </p>
          <p className="text-sm">
            Head back to HQ, drop a quarter, and we&apos;ll get you connected to the burger hotline in no time.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-primary-foreground font-bold uppercase tracking-[0.3em] border-[4px] border-double border-foreground shadow-[6px_6px_0_hsl(var(--accent))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_hsl(var(--accent))] transition-transform"
        >
          Return to Hotline HQ
        </Link>
        <p className="text-xs font-mono text-foreground/80">
          Need help? Dial (555) DAVE-NOW from any rotary phone and ask for the webmaster.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
