export default function PageShell({ title, kicker, children }) {
  return (
    <main className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col px-4 pb-16 pt-10 md:px-6 md:pt-14">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="main-gradient h-full w-full bg-radial-grid bg-[length:40px_40px]" />
      </div>

      <div className="relative space-y-6">
        <header className="space-y-3">
          {kicker && (
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-400">
              {kicker}
            </p>
          )}
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h1>
        </header>

        <section className="glass-panel relative rounded-2xl p-6 md:p-8">
          {children}
        </section>
      </div>
    </main>
  );
}
