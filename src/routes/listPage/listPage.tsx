import "./listPage.scss";
import Filter from "../../components/filter/filter";
import Card from "../../components/card/Card";

const ListPage = () => {
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Card />
          <Card />
           <Card /> 
           <Card />
        </div>
      </div>
    </div>
  );
};

export default ListPage;