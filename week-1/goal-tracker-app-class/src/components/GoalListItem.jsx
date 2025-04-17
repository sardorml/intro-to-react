export function GoalListItem({ goal, index, toggleGoal, deleteGoals }) {
  return (
    <li key={index}>
      <input type="checkbox" onClick={() => toggleGoal(index)} />
      <span
        style={{
          textDecoration: `${
            goal.status == "complete" ? "line-through" : "none"
          }`,
        }}
      >
        {goal.text}
      </span>
      <button
        onClick={() => deleteGoals(index)}
        style={{
          marginLeft: 10,
        }}
      >
        Delete
      </button>
    </li>
  );
}
