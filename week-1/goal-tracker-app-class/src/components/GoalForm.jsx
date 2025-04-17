export function GoalForm({ addGoal }) {
  return (
    <form onSubmit={addGoal}>
      <input type="text" id="goal" />
      <input type="date" name="" id="" />
      <button type="submit">Add goal</button>
    </form>
  );
}
