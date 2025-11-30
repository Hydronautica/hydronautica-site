"use client";

import { useState } from "react";
import Image from "next/image";
import PageShell from "../../components/PageShell";

// =========================================
// Image Carousel Slides
// =========================================
const slides = [
  {
    src: "/cfd-fea/slide1.png",
    alt: "High-fidelity CFD simulation of offshore structure",
    caption: "GPU-accelerated CFD simulation showing wave kinematics and pressure fields."
  },
  {
    src: "/cfd-fea/slide2.png",
    alt: "FEA structural stress response",
    caption: "FEA structural stress response under nonlinear hydrodynamic loading."
  },
  {
    src: "/cfd-fea/slide3.png",
    alt: "Coupled CFD–FEA mapping workflow",
    caption: "Coupling pipeline: pressure mapping, mesh transfer, and structural response calculation."
  }
];

export default function CoupledCFDFEAPage() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <PageShell
      title="Coupled CFD–FEA"
      kicker="High-Fidelity Fluid–Structure Interaction"
    >
      <div className="space-y-10 text-sm text-slate-200 md:text-base">

        {/* ===========================================================
            INTERACTIVE IMAGE CAROUSEL (PREMIUM GLASS STYLE)
        ============================================================ */}
        <div className="mx-auto max-w-4xl glass-panel rounded-2xl p-4 md:p-6 relative">

          {/* IMAGE */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-700/60 shadow-xl shadow-slate-950/60">
            <Image
              key={slides[index].src}
              src={slides[index].src}
              alt={slides[index].alt}
              width={1600}
              height={900}
              className="h-full w-full object-cover transition-all duration-500"
            />
          </div>

          {/* CAPTION */}
          <figcaption className="mt-3 text-center text-xs text-slate-400">
            {slides[index].caption}
          </figcaption>

          {/* CONTROLS */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-lg bg-slate-900/70 px-3 py-1.5 text-xs text-white hover:bg-slate-800"
          >
            ◀
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg bg-slate-900/70 px-3 py-1.5 text-xs text-white hover:bg-slate-800"
          >
            ▶
          </button>

          {/* DOTS */}
          <div className="mt-3 flex justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 cursor-pointer rounded-full transition-all ${
                  index === i
                    ? "bg-brand-300 w-4"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* --- PAGE CONTENT --- */}

        <p>
          Hydronautica integrates CFD and FEA solvers into a single, GPU-accelerated
          pipeline, enabling detailed resolution of wave loading, vortex shedding,
          and structural response for offshore structures.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-white">
              CFD–FEA Coupling
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              Tight coupling between solvers such as OpenFOAM / HOS-Ocean and FEA
              frameworks for stress and fatigue evaluation.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-white">
              Mesh &amp; Data Mapping
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              Conservative mapping of pressure, velocity, and kinematic fields
              onto structural meshes with RBF-based methods.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-white">
              Second-Order &amp; Breaking Waves
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              Incorporation of nonlinear wave kinematics and directionality for
              realistic extreme-event simulation.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-white">
              AI-Enhanced Workflows
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              Train surrogates directly from CFD–FEA campaigns to support rapid
              screening, optimization, and digital twin updates.
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-400 md:text-sm">
          Coupled CFD–FEA gives engineers the fidelity of full-physics simulation
          with the speed of AI-accelerated analysis.
        </p>

      </div>
    </PageShell>
  );
}

