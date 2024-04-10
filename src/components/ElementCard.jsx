import {Star} from "./Star";

const ElementCard = ({title, cover}) => {
  return (
    <div className="container">
      <div className="cover-container">
        <img src={cover} alt={title} />
      </div>
      <div className="element-info">
        <Star />
        <p>8</p>
        <p>{title}</p>
        <p>2001</p>
        <button>Details</button>
      </div>
    </div>
  );
};

export default ElementCard;
