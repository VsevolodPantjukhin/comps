const Table = ({ data }) => {
  const renderedRows = data.map((fruit) => {
    return (
      <tr key={fruit.name}>
        <td>{fruit.name}</td>
        <td>{fruit.color}</td>
        <td>{fruit.score}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <td>Fruit</td>
          <td>Color</td>
          <td>Score</td>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};
export default Table;
