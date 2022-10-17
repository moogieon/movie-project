import Banner from "./layout/banner";
import Header from "./layout/header";
import MovieList from "./units/movieList";

function App() {
  return (
    <>
      <div w-bg="[#d1c5b5] dark:black">
        <div w-container="~" w-m="x-auto">
          <Header />
          <Banner/>
          <MovieList/>
        </div>
      </div>
    </>
  );
}

export default App;
