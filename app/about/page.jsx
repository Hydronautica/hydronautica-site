import PageShell from "../../components/PageShell";

export const metadata = {
  title: "About | Hydronautica",
};

export default function AboutPage() {
  return (
    <PageShell
      title="About Hydronautica"
      kicker="Company"
    >
      <div className="space-y-6 text-sm text-slate-200 md:text-base">
        <p>
          Hydronautica is focused on bringing modern AI and high-performance computing
          techniques into offshore engineering workflows. We combine GPU-accelerated
          physics solvers with neural operators, system identification, and control
          theory to enable real-time insight into complex ocean systems.
        </p>
        <p>
          Our work spans fixed-bottom and floating offshore wind turbines, tidal
          turbines, and other floating structures. By leveraging low-, mid-, and
          high-fidelity models, we help engineers move seamlessly from concept
          exploration to detailed design and digital twin deployment.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-white">
              Digital Twins
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              Wave-to-response forecasting pipelines for floating platforms and
              offshore infrastructure.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-white">
              Multi-Fidelity Modeling
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              Integrating engineering codes, CFD, and FEA into a consistent,
              AI-accelerated design loop.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-white">
              Control &amp; Optimization
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              Reduced-order models and operator-based surrogates tailored for MPC
              and real-time decision making.
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-400 md:text-sm">
          Hydronautica sits at the intersection of ocean engineering, machine learning,
          and high-performance computing—building tools that make offshore renewable
          energy more reliable, efficient, and economical.
        </p>
      </div>
    </PageShell>
  );
}
