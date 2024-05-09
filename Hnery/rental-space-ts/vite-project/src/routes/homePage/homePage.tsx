import Carousel from "../../components/carrusel/carrusel.tsx";
import SearchBar from "../../components/searchBar/SearchBat.tsx";
import "./homePage.scss";

function HomePage() {
  const images = [
    'https://via.placeholder.com/800x400/ff5733/fff',
    'https://via.placeholder.com/800x400/33ff57/fff',
    'https://via.placeholder.com/800x400/5733ff/fff',
  ];

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Rental Space</h1>
          <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, facere iusto numquam mollitia nesciunt animi voluptas sapiente molestiae? Iste ex laborum atque repudiandae eius id sit, possimus temporibus. Aspernatur, delectus.          </p>
          <SearchBar/>
           <Carousel images={images}/>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Años de experiencia</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Premios</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Propiedades</h2>
            </div>
           
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/casa.jpg" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
