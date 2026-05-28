import "./App.css";
import { useState } from "react";

function App() {

  const [percentile, setPercentile] = useState("");
  const [rank, setRank] = useState("");

  const calculateRank = () => {

    const predictedRank =
      Math.round(((100 - percentile) / 100) * 1000000);

    setRank(predictedRank);
  };

  return (
    <div className="container">

      <h1>JEE Rank Predictor</h1>

      <input
        type="number"
        placeholder="Enter Your Percentile"
        value={percentile}
        onChange={(e) => setPercentile(e.target.value)}
      />

      <button onClick={calculateRank}>
        Predict Rank
      </button>

      <h2>
        Predicted Rank: {rank}
      </h2>

    </div>
  );
}

export default App;