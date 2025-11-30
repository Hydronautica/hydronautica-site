import PageShell from "../../components/PageShell";

export const metadata = {
  title: "HDMDc | Hydronautica",
};

export default function HDMDcPage() {
  return (
    <PageShell
      title="HDMDc"
      kicker="Reduced-Order Modeling & Control"
    >
      <div className="space-y-6 text-sm text-slate-200 md:text-base">
        <p>
          HDMDc (Hankel Dynamic Mode Decomposition with control) is Hydronautica&apos;s
          framework for building linear, delay-embedded models of nonlinear
          offshore systems. It learns dynamics from CFD, FEA, or OpenFAST
          time series and exposes fast surrogates for control and estimation.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-white">
              Delay-Embedded Dynamics
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              Capture memory effects in wave–structure interaction using Hankel
              embeddings of sensor data.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-white">
              Control-Ready Models
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              Construct state-space style models suitable for MPC, LQR, and
              Kalman filtering.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-white">
              Hybrid with AI Surrogates
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              Combine DMDc structures with neural networks for enhanced accuracy
              while retaining interpretability.
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-400 md:text-sm">
          HDMDc forms the bridge between high-fidelity simulation data and
          real-time control algorithms for offshore assets.
        </p>
      </div>
    </PageShell>
  );
}
