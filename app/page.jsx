import Link from "next/link";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col px-4 pb-16 pt-10 md:px-6 md:pt-14">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="main-gradient h-full w-full bg-radial-grid bg-[length:40px_40px]" />
      </div>

      <section className="relative grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.3fr)] md:items-center">
        <div className="space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
            Offshore · AI · HPC
          </p>
          <h1 className="text-balance text-3xl font-semibold leading-tight text-white md:text-5xl">
            Accelerating offshore wind &amp; tidal design with{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              AI and GPUs
            </span>
            .
          </h1>
          <p className="max-w-xl text-sm text-slate-300 md:text-base">
            Hydronautica builds AI-accelerated digital twins for fixed and floating
            offshore structures. We combine multi-fidelity simulation, neural
            architectures, and GPU-optimized solvers to turn days of computation into seconds.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/openfastr"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-900/50 hover:opacity-95"
            >
              Explore OpenFASTR
            </Link>
            <Link
              href="/coupled-cfd-fea"
              className="inline-flex items-center rounded-lg border border-slate-600/80 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-100 hover:border-brand-400/80 hover:text-brand-100"
            >
              Coupled CFD–FEA
            </Link>
             <Link
              href="/hdmdc"
              className="inline-flex items-center rounded-lg border border-slate-600/80 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-100 hover:border-brand-400/80 hover:text-brand-100"
            >
              Active-Control
            </Link>
            
          </div>

          <dl className="mt-6 grid max-w-xl grid-cols-2 gap-4 text-xs text-slate-300 md:text-sm">
            <div>
              <dt className="font-semibold text-slate-100">
                Multi-fidelity workflows
              </dt>
              <dd className="mt-1 text-slate-400">
                Low-, mid-, and high-fidelity models unified in one AI-driven pipeline.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-100">Digital twin ready</dt>
              <dd className="mt-1 text-slate-400">
                Real-time wave &amp; load prediction for floating wind and tidal platforms.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-100">Active-control</dt>
              <dd className="mt-1 text-slate-400">
                High-order linear models for nonlinear active control with model-predicitive capabilities.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-100">Full-turbine estimation</dt>
              <dd className="mt-1 text-slate-400">
                Full-turbine stress/displacement estimations using Hankel Dynamic-Mode-Decomposition with optimally placed sensors.
              </dd>
            </div>
          </dl>
        </div>

        <aside className="glass-panel relative mt-2 overflow-hidden rounded-2xl p-5 md:p-6">
          <div className="mb-4 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold text-slate-100">
              Hydronautica Stack
            </span>
            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] text-emerald-300">
              GPU-Optimized
            </span>
          </div>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex items-center justify-between rounded-lg bg-slate-900/60 px-3 py-2">
              <div>
                <p className="font-medium text-slate-100">OpenFASTR</p>
                <p className="text-[11px] text-slate-400">
                  Automated OpenFAST runs + neural operator surrogates.
                </p>
              </div>
              <span className="text-[11px] text-emerald-300">×100 faster</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-900/60 px-3 py-2">
              <div>
                <p className="font-medium text-slate-100">HDMDc</p>
                <p className="text-[11px] text-slate-400">
                  Delay-embedded reduced-order models for control &amp; estimation.
                </p>
              </div>
              <span className="text-[11px] text-sky-300">Real-time</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-900/60 px-3 py-2">
              <div>
                <p className="font-medium text-slate-100">Coupled CFD–FEA</p>
                <p className="text-[11px] text-slate-400">
                  High-fidelity fluid–structure interaction.
                </p>
              </div>
              <span className="text-[11px] text-indigo-300">Hi-Fi</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-900/60 px-3 py-2">
              <div>
                <p className="font-medium text-slate-100">Real-Time Waveforecasting </p>
                <p className="text-[11px] text-slate-400">
                  Real-time forecasting of waves for active-control.
                </p>
              </div>
              <span className="text-[11px] text-sky-300">Real-time</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-900/60 px-3 py-2">
              <div>
                <p className="font-medium text-slate-100">Remote-Sensing </p>
                <p className="text-[11px] text-slate-400">
                  Full turbine stress estimations.
                </p>
              </div>
              <span className="text-[11px] text-emerald-300">Data-driven</span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
