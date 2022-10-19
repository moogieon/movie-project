import {
  ClassAttributes,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLInputElement | any>(null);

  const movieLIst = [
    { name: "어벤져스1", since: "2014", img: "", genre: ["action", "romance"] },
    { name: "어벤져스2", since: "2014", img: "", genre: ["action", "romance"] },
    { name: "어벤져스3", since: "2014", img: "", genre: ["action", "romance"] },
    { name: "어벤져스4", since: "2014", img: "", genre: ["action", "romance"] },
  ];
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

  console.log(currentSlide);
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
          {movieLIst.map((list, idx) => (
            <div
              key={list.name}
              w-w="full"
              w-h="full"
              w-flex="none ~ row"
              w-items="center"
              w-p="x-5"
            >
              <div w-w="7/10">
                <ul w-text="white" w-flex="~ row" w-gap="3">
                  {list.genre.map((g, i) => (
                    <li
                      key={i}
                      w-bg="orange-500"
                      w-border="rounded-xl"
                      w-p="x-2"
                    >
                      {g}
                    </li>
                  ))}
                </ul>
                <div w-text="dark:white" w-flex="~ row" w-gap="3">
                  <div>찜하기</div>
                  <div>공유하기</div>
                </div>
                <div w-text="dark:white 4xl">
                  {list.name}
                  <span w-text="gray-500 2xl"> {list.since}</span>
                </div>
                <div></div>
              </div>
              <div w-border="~" w-w="3/10" w-h="8/10" w-bg="orange-400"></div>
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
