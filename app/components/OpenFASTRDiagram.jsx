export default function OpenFASTRDiagram() {
  return (
    <svg
      viewBox="0 0 1100 2000"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <style>
        {`
        .box {
          fill: rgba(51,65,85,0.4); /* slate-700 with transparency */
          stroke: #38BDF8; /* cyan-400 */
          stroke-width: 3;
          rx: 18;
        }
        .smallbox {
          fill: rgba(51,65,85,0.35);
          stroke: #6366F1; /* indigo-500 */
          stroke-width: 3;
          rx: 16;
        }
        .text {
          font-family: 'Segoe UI', sans-serif;
          font-weight: 600;
          fill: white;
          font-size: 38px;
        }
        .arrow {
          stroke: #22D3EE; /* cyan/teal */
          stroke-width: 5;
          marker-end: url(#arrowhead);
        }
        .loop {
          stroke: #38BDF8;
          stroke-width: 6;
          fill: none;
          marker-end: url(#arrowhead);
        }
        `}
      </style>

      {/* Arrow marker */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="16"
          markerHeight="16"
          refX="5"
          refY="5"
          orient="auto"
        >
          <polygon points="0 0, 10 5, 0 10" fill="#22D3EE" />
        </marker>
      </defs>

      {/* Boxes */}
      <rect className="box" x="300" y="50" width="500" height="100" />
      <text className="text" x="550" y="115" textAnchor="middle">
        Configure Parameters
      </text>
      <text className="text" x="550" y="155" textAnchor="middle" fontSize="30">
        (Automated.yaml)
      </text>

      <rect className="box" x="300" y="220" width="500" height="100" />
      <text className="text" x="550" y="285" textAnchor="middle">
        pyOpenFAST
      </text>

      {/* Runner boxes */}
      <rect className="smallbox" x="80" y="380" width="280" height="80" />
      <text className="text" x="220" y="435" textAnchor="middle" fontSize="32">
        OpenFAST_runner_1
      </text>

      <rect className="smallbox" x="410" y="380" width="280" height="80" />
      <text className="text" x="550" y="435" textAnchor="middle" fontSize="32">
        OpenFAST_runner_2
      </text>

      <rect className="smallbox" x="740" y="380" width="280" height="80" />
      <text className="text" x="880" y="435" textAnchor="middle" fontSize="32">
        OpenFAST_runner_N
      </text>

      {/* Collect Data */}
      <rect className="box" x="300" y="550" width="500" height="100" />
      <text className="text" x="550" y="615" textAnchor="middle">
        Collect Data
      </text>

      {/* Z-score */}
      <rect className="box" x="300" y="720" width="500" height="140" />
      <text className="text" x="550" y="780" textAnchor="middle">
        Z-Score
      </text>
      <text
        className="text"
        x="550"
        y="830"
        textAnchor="middle"
        fontSize="40"
      >
        z = (x − μ) / σ
      </text>

      {/* Remaining vertical pipeline */}
      {[
        "LSTM Training",
        "Generate 1000 Waves (GPU-Accelerated)",
        "Evaluate LSTMs",
        "Rainflow Analysis",
        "Miner’s Rule",
        "PDF Creation",
        "PDF Matrix (Damage Field)",
      ].map((label, i) => {
        const y = 920 + i * 160;
        return (
          <>
            <rect className="box" x="300" y={y} width="500" height="120" />
            <text className="text" x="550" y={y + 75} textAnchor="middle">
              {label}
            </text>
          </>
        );
      })}

      {/* Arrows */}
      <line className="arrow" x1="550" y1="150" x2="550" y2="220" />
      <line className="arrow" x1="550" y1="320" x2="220" y2="380" />
      <line className="arrow" x1="550" y1="320" x2="550" y2="380" />
      <line className="arrow" x1="550" y1="320" x2="880" y2="380" />

      <line className="arrow" x1="220" y1="460" x2="300" y2="550" />
      <line className="arrow" x1="550" y1="460" x2="550" y2="550" />
      <line className="arrow" x1="880" y1="460" x2="800" y2="550" />

      {/* Downward arrows */}
      {[550, 550, 550, 550, 550, 550, 550, 550].map((x, i) => {
        const y = 650 + i * 160;
        return <line className="arrow" x1={x} y1={y} x2={x} y2={y + 70} />;
      })}

      {/* Loop arrow */}
      <path
        className="loop"
        d="M 800 1500 
           C 1000 1500, 1000 300, 800 300"
      />

      <text
        x="1020"
        y="900"
        fill="#38BDF8"
        fontSize="42"
        fontWeight="700"
        fontFamily="Segoe UI"
      >
        Loop Through
      </text>
      <text
        x="1020"
        y="950"
        fill="#38BDF8"
        fontSize="42"
        fontWeight="700"
        fontFamily="Segoe UI"
      >
        Wave Parameters
      </text>
      <text
        x="1020"
        y="1000"
        fill="#38BDF8"
        fontSize="38"
        fontWeight="700"
        fontFamily="Segoe UI"
      >
        (Hₛ, Tₚ, θ)
      </text>
    </svg>
  );
}

