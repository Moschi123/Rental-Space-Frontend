import "./singlePage.scss";
import Slider from "../../components/slider/slider"

const images = [
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
  ];
function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider  images={images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>titulo</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>almirante brown</span>
                </div>
                <div className="price">$ 56552</div>
              </div>
              <div className="user">
                <img src="./colom.jpg" alt="" />
                <span>nombre</span>
              </div>
            </div>
            <div className="bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsum voluptatum minima eveniet, eos impedit architecto reiciendis dicta quibus</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title"></p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
              
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Perros</span>
                <p>Permitidos</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Tamaño</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 m2t</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 camas</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 baño</span>
            </div>
          </div>
          <p className="title">Lugares Cerca</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>Escuela</span>
                <p>250m </p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Paradas de autobus</span>
                <p>100m </p>
              </div>
            </div>
            <div className="feature">
             
              
            </div>
          </div>
          <p className="title">Locacion</p>
          <div className="mapContainer">
           
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Mandar Mensaje!
            </button>
            <button>
              <img src="/save.png" alt="" />
             Guardar!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;