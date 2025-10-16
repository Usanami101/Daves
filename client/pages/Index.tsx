const menuItems = [
  {
    name: "Payphone Patty Melt",
    description: "Buttery toasted rye, sizzling beef, and a hotline jalapeño jam served with curly fries.",
    price: "$3.99",
  },
  {
    name: "Drive-Thru Sunrise Stack",
    description: "Triple-stacked pancakes, neon syrup, and a side of bacon you can hear through the receiver.",
    price: "$4.29",
  },
  {
    name: "Bathroom Break Burger",
    description: "A double decker with mystery sauce, dill chips, and a souvenir restroom token.",
    price: "$3.59",
  },
  {
    name: "Express Chili Float",
    description: "Frosty orange soda with a scoop of chili and shredded cheddar, the Dave way.",
    price: "$2.25",
  },
];

const hotlineNumbers = [
  {
    title: "Order Hotline",
    number: "(555) DAVE-NOW",
    note: "Drop a quarter, shout your combo, pick up curbside in 7 minutes.",
  },
  {
    title: "Bathroom Key Concierge",
    number: "(555) 4-KEYS-4U",
    note: "Collectible keychains guaranteed. Please return before the millennium.",
  },
  {
    title: "Late-Night Dedications",
    number: "(555) SLOW-JAM",
    note: "Request a love song and receive a free glow-in-the-dark napkin.",
  },
];

const bathroomUpdates = [
  {
    title: "Tile Glow Index",
    detail: "New checkerboard tiles installed 04/12/96. Bring sunglasses.",
    status: "✨ Radiant",
  },
  {
    title: "Dryer Status",
    detail: "Jetstream model upgraded to turbo. High fives available on exit.",
    status: "💨 Hurricane Force",
  },
  {
    title: "Graffiti Gallery",
    detail: "Featuring the latest payphone poetry from the night crew.",
    status: "🖍️ Open for submissions",
  },
];

const timeline = [
  {
    year: "1991",
    entry: "Dave strings telephone line from living room to driveway. First burger served curbside in 58 seconds.",
  },
  {
    year: "1993",
    entry: "Bathroom House opens with heated seats and cassette mixtapes on every hook.",
  },
  {
    year: "1995",
    entry: "Drive thru expands to accommodate rollerblade customers and neon underglow bikes.",
  },
  {
    year: "1996",
    entry: "Express lane installed. Record time from call to first bite: 2 minutes 43 seconds.",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen py-10 px-4 flex justify-center">
      <div className="w-full max-w-5xl space-y-10">
        <div className="border-[10px] border-double border-primary bg-card/95 shadow-[14px_14px_0_hsl(var(--secondary))]">
          <marquee className="bg-primary text-primary-foreground py-2 text-xs uppercase tracking-[0.35em]">
            Dave’s Payphone Drive Thru Burgers Bathroom House Express • Open 24 Hours • Free Refills if You Sing Your Order •
            Complimentary Cassette Sampler with Every Combo
          </marquee>
          <div className="px-6 py-8 md:px-10">
            <header className="space-y-6 text-center">
              <p className="blink text-sm uppercase tracking-[0.4em] text-secondary">Open All Night Since 1991</p>
              <h1 className="text-3xl md:text-5xl leading-tight drop-shadow-[0_0_18px_hsl(var(--accent))]">
                Dave's Payphone Drive Thru Burgers<br /> Bathroom House Express
              </h1>
              <p className="font-mono text-base md:text-lg text-foreground/90">
                Dial in from the curb, punch in your burger code, and let the neon hospitality wash over you. The future is wired
                and your dinner is on the line.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-bold uppercase">
                <span className="bg-secondary text-secondary-foreground px-4 py-2 border-[3px] border-double border-foreground">
                  🚗 Drive-Thru Telegraphy
                </span>
                <span className="bg-accent text-accent-foreground px-4 py-2 border-[3px] border-dashed border-foreground">
                  ☎️ Payphone Powered
                </span>
                <span className="bg-primary text-primary-foreground px-4 py-2 border-[3px] border-double border-foreground">
                  🛁 Bathroom House Luxury
                </span>
              </div>
            </header>
          </div>
        </div>

        <main className="border-[8px] border-dashed border-foreground bg-card/95 shadow-[12px_12px_0_hsl(var(--accent))] p-6 md:p-10 space-y-12">
          <section className="space-y-6">
            <h2 className="text-2xl">Tonight's Hotline Menu</h2>
            <table className="w-full border-[4px] border-double border-foreground bg-background text-left text-sm">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  <th className="px-4 py-3 border border-foreground/40">Signature Item</th>
                  <th className="px-4 py-3 border border-foreground/40">Description</th>
                  <th className="px-4 py-3 border border-foreground/40 text-right">1996 Price</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map((item) => (
                  <tr key={item.name} className="odd:bg-muted/70 even:bg-card">
                    <td className="px-4 py-3 border border-foreground/20 font-semibold">{item.name}</td>
                    <td className="px-4 py-3 border border-foreground/20">{item.description}</td>
                    <td className="px-4 py-3 border border-foreground/20 text-right font-mono">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="font-mono text-xs text-foreground/80">
              * All combos include a complimentary payphone token, mixtape request slip, and neon wet-wipe.
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4 border-[6px] border-double border-secondary bg-background p-5 shadow-[8px_8px_0_hsl(var(--primary))]">
              <h2 className="text-xl text-secondary-foreground drop-shadow-[4px_4px_0_hsl(var(--accent))]">
                Drive-Thru Express Lane
              </h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong>Step 1:</strong> Dial the hotline, enter your burger initials, and listen for the sizzle tone.
                </li>
                <li>
                  <strong>Step 2:</strong> Glide into the neon lane, keep your window at half-mast for cassette exchange.
                </li>
                <li>
                  <strong>Step 3:</strong> Receive your meal via pneumatic tube and complimentary air freshener.
                </li>
              </ul>
              <div className="mt-4 bg-secondary text-secondary-foreground px-4 py-3 font-mono text-sm uppercase tracking-[0.25em]">
                Fastest lane clocks in at 2 minutes 43 seconds!
              </div>
            </div>
            <div className="space-y-4 border-[6px] border-double border-accent bg-background p-5 shadow-[8px_8px_0_hsl(var(--secondary))]">
              <h2 className="text-xl drop-shadow-[4px_4px_0_hsl(var(--primary))]">Bathroom House Bulletin</h2>
              <div className="space-y-3">
                {bathroomUpdates.map((item) => (
                  <article key={item.title} className="border border-foreground/30 bg-card/80 px-4 py-3">
                    <h3 className="text-base">{item.title}</h3>
                    <p className="text-sm text-foreground/90">{item.detail}</p>
                    <p className="mt-2 text-xs font-bold uppercase text-primary">{item.status}</p>
                  </article>
                ))}
              </div>
              <p className="text-xs font-mono text-foreground/80">
                Restroom tokens redeemable for bonus fries if returned within 12 minutes.
              </p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="border-[6px] border-dotted border-primary bg-background p-5 shadow-[6px_6px_0_hsl(var(--secondary))] space-y-4">
              <h2 className="text-xl">Milestones & Memories</h2>
              <ol className="space-y-3 text-sm">
                {timeline.map((moment) => (
                  <li key={moment.year} className="border-l-[6px] border-primary/70 pl-4">
                    <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">{moment.year}</p>
                    <p>{moment.entry}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="border-[6px] border-dotted border-secondary bg-background p-5 shadow-[6px_6px_0_hsl(var(--accent))] space-y-4">
              <h2 className="text-xl">Payphone Hotline Directory</h2>
              <div className="space-y-4 text-sm">
                {hotlineNumbers.map((line) => (
                  <div key={line.title} className="border border-foreground/30 bg-card/80 px-4 py-3">
                    <p className="font-display text-xs uppercase tracking-[0.3em] text-secondary">{line.title}</p>
                    <p className="text-lg font-mono text-primary">{line.number}</p>
                    <p className="text-xs text-foreground/80">{line.note}</p>
                  </div>
                ))}
              </div>
              <p className="font-mono text-xs text-foreground/80">
                Tip: Tap twice on the receiver cradle to unlock the secret veggie menu.
              </p>
            </div>
          </section>

          <section className="border-[6px] border-double border-primary bg-background p-5 shadow-[8px_8px_0_hsl(var(--secondary))] space-y-4">
            <h2 className="text-xl">Sign the Guestbook</h2>
            <p className="text-sm">
              Leave your mark in the neon ledger and we will fax you a coupon for free refills on your next sonic shake.
            </p>
            <form className="grid gap-4 text-sm">
              <label className="grid gap-1">
                <span className="font-semibold">Name or Alias</span>
                <input
                  type="text"
                  required
                  placeholder="Ms. Dial Tone"
                  className="border-[3px] border-dashed border-foreground bg-card px-3 py-2 text-sm shadow-[4px_4px_0_hsl(var(--accent))] focus:outline-none focus:ring-4 focus:ring-primary/60"
                />
              </label>
              <label className="grid gap-1">
                <span className="font-semibold">Message</span>
                <textarea
                  required
                  rows={4}
                  placeholder="Your burgers saved my mixtape launch party!"
                  className="border-[3px] border-double border-foreground bg-card px-3 py-2 text-sm shadow-[4px_4px_0_hsl(var(--secondary))] focus:outline-none focus:ring-4 focus:ring-secondary/60"
                />
              </label>
              <button
                type="submit"
                className="justify-self-start bg-primary px-5 py-2 text-primary-foreground font-bold uppercase tracking-[0.3em] border-[4px] border-double border-foreground shadow-[6px_6px_0_hsl(var(--accent))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_hsl(var(--accent))] transition-transform"
              >
                Submit &amp; Fax Me Deals
              </button>
            </form>
          </section>
        </main>

        <footer className="border-[6px] border-double border-secondary bg-card/95 px-6 py-6 text-center text-xs shadow-[8px_8px_0_hsl(var(--primary))]">
          <p>
            © 1996 Dave&apos;s Payphone Drive Thru Burgers Bathroom House Express. Proudly powered by landlines, neon tubes, and
            the spirit of late-night snackers everywhere.
          </p>
          <p className="mt-2 font-mono">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} • Hosted on a server the size of a microwave.
          </p>
        </footer>
      </div>
    </div>
  );
}
