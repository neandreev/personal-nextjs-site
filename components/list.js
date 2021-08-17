const List = ({ points }) => (
  <ul className="list-disc pl-5">
    {points.map((point, index) => (
      <li key={index}>
        {point}
      </li>
    ))}
  </ul>
);

export default List;
