import { useState } from "react";

// Componente Bottone che riceve props
export function MyButton({ label, initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="px-4 py-2 rounded-2xl shadow text-base font-medium"
    >
      {label}: {count}
    </button>
  );
}
