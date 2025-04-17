import React from "react";
import { GoalForm } from "./components/GoalForm";
import { GoalList } from "./components/GoalList";

function App() {
  /*

  {
    status: "incomplete" | "complete",
    text: "some text"
  }

  */

  let [goals, setGoals] = React.useState([
    {
      status: "incomplete",
      text: "Item 1",
    },
    {
      status: "incomplete",
      text: "Item 2",
    },
  ]);

  function addGoal(event) {
    event.preventDefault();

    const goal = { status: "incomplete", text: event.target.goal.value };
    const updatedGoalsArray = [...goals, goal];

    setGoals(updatedGoalsArray);
  }

  function toggleGoal(index) {
    console.log("index of goal object to be updated", index);

    // map [a,b,c] => [a,b,c]
    const updatedGoalsArray = goals.map((element, idx) => {
      // if index matches the index here update the status and return
      if (index === idx) {
        return {
          status: element.status == "incomplete" ? "complete" : "incomplete",
          text: element.text,
        };
      }

      // otherwise just return element without any changes
      return element;
    });
    console.log("updated array", updatedGoalsArray);
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
      <GoalForm addGoal={addGoal} />

      {/* A list of goals */}
      <GoalList
        goals={goals}
        toggleGoal={toggleGoal}
        deleteGoals={deleteGoals}
      />
    </>
  );
}

export default App;
