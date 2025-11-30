export default function OpenFASTRDiagram() {
    return (
        <svg
            width="100%"
            viewBox="0 0 900 1250"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto drop-shadow-xl"
        >
            <style>
                {`
          .node {
            fill: rgba(30, 41, 59, 0.65);
            stroke: #60a5fa;
            stroke-width: 2;
            rx: 10;
          }
          .label {
            fill: white;
            font-size: 12px;
            font-weight: 600;
            font-family: 'Inter', sans-serif;
          }

          /* Animated dashed arrow style */
          .arrow {
            stroke: #38bdf8;
            stroke-width: 2;
            fill: none;
            marker-end: url(#arrowhead);
            stroke-dasharray: 6 6;
            animation: flow 2s linear infinite;
          }

          @keyframes flow {
            to {
              stroke-dashoffset: -12;
            }
          }
        `}
            </style>

            <defs>
                <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="10"
                    refX="4"
                    refY="3"
                    orient="auto"
                >
                    <polygon points="0 0, 6 3, 0 6" fill="#38bdf8" />
                </marker>
            </defs>

            {/* -------------------------------------------------- */}
            {/* TOP: PARAMETERS → pyOpenFAST */}
            {/* -------------------------------------------------- */}

            <rect className="node" x="250" y="40" width="400" height="70" />
            <text className="label" x="450" y="82" textAnchor="middle">
                Configure Parameters (Automated.yaml)
      </text>

            <line className="arrow" x1="450" y1="110" x2="450" y2="150" />

            <rect className="node" x="250" y="150" width="400" height="70" />
            <text className="label" x="450" y="192" textAnchor="middle">
                pyOpenFAST
      </text>

            {/* -------------------------------------------------- */}
            {/* RUNNERS */}
            {/* -------------------------------------------------- */}

            <line className="arrow" x1="450" y1="220" x2="195" y2="260" />
            <line className="arrow" x1="450" y1="220" x2="450" y2="260" />
            <line className="arrow" x1="450" y1="220" x2="705" y2="260" />

            <rect className="node" x="80" y="260" width="230" height="60" />
            <text className="label" x="195" y="295" textAnchor="middle">
                OpenFAST_runner_1
      </text>

            <rect className="node" x="335" y="260" width="230" height="60" />
            <text className="label" x="450" y="295" textAnchor="middle">
                OpenFAST_runner_2
      </text>

            <rect className="node" x="590" y="260" width="230" height="60" />
            <text className="label" x="705" y="295" textAnchor="middle">
                OpenFAST_runner_N
      </text>

            {/* Runner → Collect */}
            <line className="arrow" x1="195" y1="320" x2="450" y2="380" />
            <line className="arrow" x1="450" y1="320" x2="450" y2="380" />
            <line className="arrow" x1="705" y1="320" x2="450" y2="380" />

            {/* -------------------------------------------------- */}
            {/* COLLECT DATA */}
            {/* -------------------------------------------------- */}

            <rect className="node" x="250" y="380" width="400" height="70" />
            <text className="label" x="450" y="420" textAnchor="middle">
                Collect Data
      </text>

            <line className="arrow" x1="450" y1="450" x2="450" y2="515" />

            {/* -------------------------------------------------- */}
            {/* LSTM TRAINING */}
            {/* -------------------------------------------------- */}

            <rect className="node" x="250" y="515" width="400" height="70" />
            <text className="label" x="450" y="555" textAnchor="middle">
                LSTM Training
      </text>

            <line className="arrow" x1="450" y1="585" x2="450" y2="650" />

            {/* -------------------------------------------------- */}
            {/* GENERATE WAVES */}
            {/* -------------------------------------------------- */}

            <rect className="node" x="250" y="650" width="400" height="70" />
            <text className="label" x="450" y="690" textAnchor="middle">
                Generate Waves (GPU-Accelerated)
      </text>

            <line className="arrow" x1="450" y1="720" x2="450" y2="785" />

            {/* -------------------------------------------------- */}
            {/* EVALUATE LSTMs */}
            {/* -------------------------------------------------- */}

            <rect className="node" x="250" y="785" width="400" height="70" />
            <text className="label" x="450" y="825" textAnchor="middle">
                Evaluate LSTMs
      </text>

            {/* -------------------------------------------------- */}
            {/* SPLIT INTO TWO PARALLEL BRANCHES */}
            {/* -------------------------------------------------- */}

            {/* animated split arrows */}
            <line className="arrow" x1="450" y1="855" x2="300" y2="930" />
            <line className="arrow" x1="450" y1="855" x2="600" y2="930" />

            {/* Left box */}
            <rect className="node" x="150" y="930" width="300" height="70" />
            <text className="label" x="300" y="970" textAnchor="middle">
                Fatigue Probabilities
      </text>

            {/* Right box */}
            <rect className="node" x="450" y="930" width="300" height="70" />
            <text className="label" x="600" y="970" textAnchor="middle">
                ULS Probabilities
      </text>
        </svg>
    );
}
