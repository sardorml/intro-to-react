import React from "react";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";

function App() {
  const [goals, setGoals] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newGoal = {
      done: false,
      text: e.target.goal.value,
    };
    const updatedList = [...goals, newGoal];
    setGoals(updatedList);
  }

  function handleDeleteItem(index) {
    // remove item at index
    const updated = goals.filter((item, i) => i != index);
    setGoals(updated);
  }

  function handleGoalStatusUpdate(index) {
    // Update goal status
    const updated = goals.map((goal, i) =>
      i === index ? { ...goal, done: !goal.done } : goal
    );
    setGoals(updated);
  }

  return (
    <div>
      <h1>Goal tracker app</h1>
      {/* input to get a goal text from a user */}
      <GoalForm handleSubmit={handleSubmit} />
      {/* List of added goals */}
      <GoalList
        goals={goals}
        onToggle={handleGoalStatusUpdate}
        onDelete={handleDeleteItem}
      />
    </div>
  );
}

export default App;
