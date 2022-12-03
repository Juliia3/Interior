import "./heading.scss";

import headLine from "../../assets/images/head-line.svg";

function Heading(props) {
  const { text } = props;

  return (
    <div className="heading">
      <img className="heading__line" src={headLine} />
      <h3 className="heading__text"> {text}</h3>
    </div>
  );
}

export default Heading;
