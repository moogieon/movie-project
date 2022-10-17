import { useState } from "react";
import useDark from "../components/useDark";
import Logo from "../assets/logo.png";
const Header = () => {
  const menyList = [
    { name: "", link: "" },
    { name: "", link: "" },
    { name: "", link: "" },
  ];
  const [colorTheme, setTheme] = useDark() as any;
  const [isDark, setIsDark] = useState(false);
  const [dark, setDark] = useState<boolean>(
    colorTheme === "light" ? true : false
  );

  const onDarkToggle = () => {
    setTheme(colorTheme);
    setDark((res) => !res);
  };
  return (
    <div w-flex="~" w-justify="between" w-h="100px" w-p="x-5">
      <div w-w="100px" w-h="50px">
        <img src={Logo} alt="mookcah logo" />
      </div>
      <ul>
        {menyList.map((menu) => (
          <li>{menu.name}</li>
        ))}
      </ul>
      <button onClick={onDarkToggle} className="dark:text-white">
        <i
          w-transition="all duration-200"
          w-text="4xl"
          className={`bi ${dark ? "bi-moon-fill" : "bi-brightness-high-fill"}`}
        />
      </button>
    </div>
  );
};

export default Header;
