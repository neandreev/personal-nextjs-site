export default function List({ points }) {
  return (
    <ul className="list-disc pl-5">
      {points.map((point, index) => (
        <li key={index}>
          {point}
        </li>
      ))}
    </ul>
  );
}
