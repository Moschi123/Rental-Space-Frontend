import "./singlePage.scss";
import Slider from "../../components/slider/slider"
import Map from "../../components/map/Map";

const images = [
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
  ];
  const items = [
    {
      id: '1',
      latitude: 52.4797,
      longitude: -1.90269,
      img: 'path_to_image_1',
      title: 'Item 1',
      bedroom: 3,
      price: 100
    },
    {
      id: '2',
      latitude: 53.4797,
      longitude: -1.90269,
      img: 'path_to_image_2',
      title: 'Item 2',
      bedroom: 2,
      price: 150
    }
    // Agrega más items según sea necesario
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
          <Map items={items} />
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