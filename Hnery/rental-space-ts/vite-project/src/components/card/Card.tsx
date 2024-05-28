
import "./card.scss";



function Card() {
  return (
    <div className="card">
      <div className="imageContainer">

        <img src="./colom.jpg" alt="" />
      
      </div>

      <div className="textContainer">
        <h2 className="title">
         Casa bonita
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>Almirante brown</span>
        </p>
        <p className="price">$ 252552</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>247 bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>2 bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
