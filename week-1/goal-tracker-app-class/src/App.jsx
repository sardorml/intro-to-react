import React from "react";

function App() {
  const [goals, setGoals] = React.useState(["Item 1", "Item 2"]);

  function addGoal(event) {
    event.preventDefault();

    const goal = event.target.goal.value;
    const updatedGoalsArray = [...goals, goal];

    setGoals(updatedGoalsArray);
  }

  function deleteGoals(index) {
    setGoals((prev) =>
      prev.filter((goal, goalsIdx) => {
        if (goalsIdx !== index) return goal;
      })
    );
  }

  return (
    <>
      <h1 className="header">Goal Tracker App</h1>
      {/* An input to get a goal from user */}
      <form onSubmit={addGoal}>
        <input type="text" id="goal" />
        <button type="submit">Add goal</button>
      </form>

      {/* A list of goals */}
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {goals.map((goal, index) => (
          <li key={index}>
            <input type="checkbox" />
            {goal}
            <button
              onClick={() => deleteGoals(index)}
              style={{
                marginLeft: 10,
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
