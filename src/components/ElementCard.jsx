import "../styles/elementCard.css";

const ElementCard = ({star, title, cover}) => {
  return (
    <div className="content-container">
      <div className="cover-container">
        <img src={cover} alt={title} />
      </div>
      <div className="element-info">
        <p>{star} 8</p>
        <p>{title}</p>
        <p>2001</p>
        <button>Details</button>
      </div>
    </div>
  );
};

export default ElementCard;
