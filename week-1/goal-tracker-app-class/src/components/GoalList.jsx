import { GoalListItem } from "./GoalListItem";

export function GoalList({ goals, toggleGoal, deleteGoals }) {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      {/* map [{},{}] => [JSX,JSX] */}
      {goals.map((goal, index) => (
        <GoalListItem
          goal={goal}
          index={index}
          toggleGoal={toggleGoal}
          deleteGoals={deleteGoals}
        />
      ))}
    </ul>
  );
}
