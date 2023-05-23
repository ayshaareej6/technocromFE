import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const idAvailable = document.querySelector(hash);
      if (idAvailable) {
        const topDistance = idAvailable.offsetTop - 90;
        window.scrollTo({ top: topDistance, left: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        console.log("id not available");
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}
