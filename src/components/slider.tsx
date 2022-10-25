import axios from "axios";
import {
  ClassAttributes,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
interface Movie {
  title: string;
  pubDate: string;
  image: string;
  userRating: string;
}
const Slider = () => {
  const [movie, setMovie] = useState<Movie[]>([]);
  useEffect(() => {
    const getMovie = async () => {
      try {
        await axios
          .get("/api/v1/search/movie.json", {
            params: {
              query: "토이스토리",
              display: 4,
              genre:"15"
            },
            headers: {
              "X-Naver-Client-Id": import.meta.env.VITE_CLIENT_ID,
              "X-Naver-Client-Secret": import.meta.env.VITE_CLIENT_SECRET,
            },
          })
          .then((res) => {
            setMovie(res.data.items);
            console.log(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, []);
  const movieLIst = [
    { name: "어벤져스1", since: "2014", img: "", genre: ["action", "romance"] },
    { name: "어벤져스2", since: "2014", img: "", genre: ["action", "romance"] },
    { name: "어벤져스3", since: "2014", img: "", genre: ["action", "romance"] },
    { name: "어벤져스4", since: "2014", img: "", genre: ["action", "romance"] },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLInputElement | any>(null);

  const Total = movieLIst.length - 1;
  const nextSlide = () => {
    if (currentSlide >= Total) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevList = () => {
    if (currentSlide === 0) {
      setCurrentSlide(Total);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <div
      w-w="full"
      w-h="full"
      w-flex="~ row"
      w-justify="between"
      w-items="center"
    >
      <i
        onClick={prevList}
        className="bi bi-caret-left-fill"
        w-text="red-500 6xl"
      ></i>
      <div w-overflow="hidden" w-w="full" w-h="full">
        <div w-flex="~ row" w-h="full" ref={slideRef}>
          {movie.map((list, idx) => (
            <div
              key={list.title}
              w-w="full"
              w-h="full"
              w-flex="none ~ row"
              w-items="center"
              w-p="x-5"
            >
              <div w-w="7/10">
                <div w-text="dark:white">⭐{list.userRating}</div>
                <div w-text="dark:white" w-flex="~ row" w-gap="3">
                  <div>찜하기</div>
                  <div>공유하기</div>
                </div>
                <div w-text="dark:white 4xl">
                  {list.title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
                  <span w-text="gray-500 2xl"> {list.pubDate}</span>
                </div>
                <div></div>
              </div>
              <div w-w="3/10" w-h="8/10">
                <img src={list.image} w-w="full" w-h="full" w-border="rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <i
        onClick={nextSlide}
        className="bi bi-caret-right-fill"
        w-text="red-500 6xl"
      ></i>
    </div>
  );
};

export default Slider;
