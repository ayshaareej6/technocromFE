import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return windowWidth;
};

export default useWindowSize;
