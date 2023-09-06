//Stats Component
export default function Stats({ items }) {
  const numItems = items.length;
  const numItemsPacked = items.filter((item) => item.packed).length;
  // console.log(numItems, numItemsPacked, percentage);
  const percentage = Math.round((numItemsPacked / numItems) * 100);
  console.log(numItems, numItemsPacked, percentage);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go !! 🚗🚗🚗"
          : `💼 You have ${numItems} items on your list, and you already packed ${numItemsPacked} items`. ${isNaN(percentage)?0:percentage}%`}
      </em>
    </footer>
  );
}
