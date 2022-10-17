import { useState } from "react";

interface Item {
  name: string;
  id: number;
}
function App() {
  const List = [
    { id: 0, name: "양맥기-1" },
    { id: 1, name: "양맥기-2" },
    { id: 2, name: "양맥기-3" },
    { id: 3, name: "양맥기-4" },
  ];
  const [count, setCount] = useState<string[]>([]);
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const onClickDark = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      return;
    }
  };

  const onClickBtn = (data: Item) => {
    !count.includes(data.name)
      ? setCount((res) => [...res, data.name])
      : setCount(count.filter((button) => button !== data.name));

    // !count.some((res) => res === data.name)
    //   ? setCount((res) => [...res, data.name])
    //   : setCount(count.filter((button) => button === data.name));
  };
  console.log(count);

  return (
    <div>
      <html className="dark">
        <div>
          <button onClick={() => onClickDark}>dark</button>
          <ul
            w-flex="~ col"
            w-gap="2"
            className="text-blue-500 dark:text-red-500"
          >
            {List.map((data) => (
              <li
                onClick={() => onClickBtn(data)}
                key={data.id}
                className={
                  count.includes(data.name) ? "bg-blue-200" : "bg-yellow-500"
                }
                w-text="dark:red-500"
                w-h="50px"
                w-w="max-50"
              >
                {data.name}
              </li>
            ))}
          </ul>
        </div>
      </html>
    </div>
  );
}

export default App;
