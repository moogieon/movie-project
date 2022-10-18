import Banner from "./layout/banner";
import Header from "./layout/header";
import MovieList from "./units/movieList";

function App() {
  return (
    <>
      <div w-bg="[#d1c5b5] dark:black">
        <div w-container="~" w-m="x-auto">
          <Header />
          <Banner />
          <div w-p="x-5">
            <p w-text="black dark:white 2xl" w-m="y-5">Action</p>
            <MovieList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
