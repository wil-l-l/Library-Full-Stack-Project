import { useEffect } from "react";

function useScrollToTop() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
    return () => clearTimeout(timeout);
  }, []);
}

export default useScrollToTop;
