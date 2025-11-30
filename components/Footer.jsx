export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:text-[13px]">
        <p>© {new Date().getFullYear()} Hydronautica. All rights reserved.</p>
        <p className="text-slate-500">
          Simulation · AI · GPU Acceleration · Offshore Wind &amp; Tidal
        </p>
      </div>
    </footer>
  );
}
