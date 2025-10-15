import { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa6';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top:0, behavior: "smooth" });
  };

  return (
    <button
     onClick={scrollToTop}
     className={`fixed bottom-6 right-6 p-3 rounded-full 
                bg-rose-600 text-white shadow-lg
                hover:bg-rose-500 hover:scale-110 
                duration-300
     ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <FaAngleUp size={22} />
    </button>
  )
}

export default ScrollToTop