import "./subtitle.scss";

function Subtitle(props) {
  const { text } = props;

  return (
    <div className="subtitle">
      <h3 className="subtitle__text"> {text}</h3>
    </div>
  );
}

export default Subtitle;
