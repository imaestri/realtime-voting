import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Spinner from "./components/Spinner";
import Candidates from "./components/Candidates";

export default function App() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:8080/votes")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setCandidates(json.candidates);
        });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [candidates]);

  if (candidates.length === 0) {
    return <Spinner description="Carregando..." />;
  }

  return (
    <div className="container">
      <Header>REAL-TIME VOTING</Header>
      <Candidates candidates={candidates} />
    </div>
  );
}
