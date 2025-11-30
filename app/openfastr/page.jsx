import PageShell from "../../components/PageShell";
import OpenFASTRDiagram from "../../components/OpenFASTRDiagram";

export const metadata = {
    title: "OpenFASTR | Hydronautica",
};

export default function OpenFASTRPage() {
    return (
        <PageShell title="OpenFASTR" kicker="AI-Accelerated OpenFAST">
            <div className="space-y-10 text-sm text-slate-200 md:text-base">

                {/* Intro paragraph */}
                <p>
                    OpenFASTR is Hydronautica&apos;s automation and AI layer for
                    OpenFAST-based workflows. It orchestrates thousands of simulations,
                    trains neural operators on the resulting data, and exposes fast
                    surrogates for load prediction, motion forecasting, and fatigue
                    analysis.
        </p>

                {/* Feature grid */}
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl bg-slate-900/70 p-4">
                        <h3 className="text-sm font-semibold text-white">
                            Automated Scenario Generation
            </h3>
                        <p className="mt-2 text-xs text-slate-300">
                            Run large design-load case matrices across wind, wave, and
                            current conditions—with GPU-accelerated scheduling and
                            monitoring.
            </p>
                    </div>

                    <div className="rounded-xl bg-slate-900/70 p-4">
                        <h3 className="text-sm font-semibold text-white">
                            Neural Operator Surrogates
            </h3>
                        <p className="mt-2 text-xs text-slate-300">
                            Train DeepONet, FNO, and related operator networks to emulate
                            OpenFAST responses in milliseconds.
            </p>
                    </div>

                    <div className="rounded-xl bg-slate-900/70 p-4">
                        <h3 className="text-sm font-semibold text-white">
                            Fatigue &amp; Extreme Response
            </h3>
                        <p className="mt-2 text-xs text-slate-300">
                            Rapid damage-equivalent load estimation and probabilistic
                            fatigue analysis using AI-accelerated response prediction.
            </p>
                    </div>

                    <div className="rounded-xl bg-slate-900/70 p-4">
                        <h3 className="text-sm font-semibold text-white">
                            Digital Twin Integration
            </h3>
                        <p className="mt-2 text-xs text-slate-300">
                            Feed live wave and wind measurements into trained models
                            for real-time structural monitoring and control.
            </p>
                    </div>
                </div>

                {/* Smaller concluding paragraph */}
                <p className="text-xs text-slate-400 md:text-sm">
                    OpenFASTR turns OpenFAST from a batch analysis tool into a real-time,
                    AI-enabled design and operations platform.
        </p>

                {/* DIAGRAM INSERTED BELOW */}
                <div className="pt-10 flex justify-center">
                    <OpenFASTRDiagram />
                </div>

            </div>
        </PageShell>
    );
}

