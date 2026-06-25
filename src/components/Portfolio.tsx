import { useState, useEffect } from "react";
import PortfolioRemake from "./PortfolioRemake";
import PortfolioMobile from "./PortfolioMobile";

export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <PortfolioMobile /> : <PortfolioRemake />;
}
