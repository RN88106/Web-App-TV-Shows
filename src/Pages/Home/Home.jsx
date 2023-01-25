import MovieGrids from "./components/MovieGrids";
import "../../Style/Home.css";


const Home = ({ data }) => {


  return (
    <>
      {data?.length === 0 ? (
        <h1>No Matching Movies Found.</h1>
      ) : (
        <MovieGrids data={data} />
      )}
    </>
  );
};

export default Home;
