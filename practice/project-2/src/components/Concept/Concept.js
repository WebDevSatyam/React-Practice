

function Concept(props) {
  return (
    <li className="concept">
      <img src={props.image} alt={props.title} />
      <h2>TODO: {props.title}</h2>
      <p>TODO: {props.desc}</p>
    </li>
  );
}

export default Concept;