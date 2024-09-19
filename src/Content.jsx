const Content = ({ author}) => {
  return (
    <ul>
      {author.map((part) => (
        <li key={part.id}>
          {part.name}:{part.exercises}
        </li>
      ))}
    </ul>
  );
};
export default Content;
