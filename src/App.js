import React from "react";

// reference solution: https://codesandbox.io/s/leaderboard-reference-solution-6yxm4

const TOURNAMENT_DATA = {
  members: [
    {
      id: 1,
      name: "Mary",

      // 1 is a win, 0 is a loss
      // the score is the sum of all results for a member
      results: [0, 1, 1, 0]
    },
    {
      id: 2,
      name: "Adam",
      results: [1, 1, 1, 1]
    },
    {
      id: 3,
      name: "Jamie",
      results: [0, 0, 0, 1]
    },
    {
      id: 4,
      name: "Steve",
      results: [1, 1, 0, 1]
    }
  ]
};

// Render the leaderboard
// eg:
// 1. Adam - 4pts
// 2. Steve - 3pts
// 3. Mary - 2pts
// 4. Jamie - 1pt
function Leaderboard({ members }) {
  function calculate(player) {
    return player.results.reduce((prev, acc) => prev + acc, 0);
  }

  function getPlayersSorted(members) {
    return members
      .sort((a, b) => calculate(b) - calculate(a))
      .map((player, index) => (
        <li key={index}>
          {player.name} - {calculate(player)}
        </li>
      ));
  }

  return (
    <div>
      <ol>{getPlayersSorted(members)}</ol>
    </div>
  );
}

export default function App() {
  return <Leaderboard members={TOURNAMENT_DATA.members} />;
}
