import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MyNav = function () {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  const nav = useRef(null);

  const location = useLocation();

  const togle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handlescroll = () => {
      const backImg = document.getElementsByClassName("homeBackImg");
      if (backImg.length > 0) {
        const height = backImg[0].clientHeight;

        if (window.scrollY > height - nav.current.offsetHeight - 30) {
          setIsTransparent(false);
        } else {
          setIsTransparent(true);
        }
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  return (
    <>
      <nav
        ref={nav}
        className={
          "p-2 fixed-top d-lg-flex align-items-center" +
          (isTransparent ? " backTransparent " : " bg-dark ") +
          (isExpanded && " h15rem ")
        }
      >
        <div className="d-flex justify-content-end">
          <button
            onClick={togle}
            className="d-lg-none btn bg-dark text-light fs-4 navTog p-0 border border-1 border-light"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
        <ul className="list-unstyled d-lg-flex justify-content-evenly align-items-center m-0 w-100">
          <li className="text-center my-2 my-lg-0">
            <Link
              to={"/"}
              className={"fs-4 " + (location.pathname === "/" && "active")}
            >
              Home
            </Link>
          </li>
          <li className="text-center my-2 my-lg-0">
            <Link
              to={"/Products"}
              className={
                "fs-4 " + (location.pathname === "/Products" && "active")
              }
            >
              Products
            </Link>
          </li>
          <li className="text-center my-2 my-lg-0">
            <Link
              to={"/Contact"}
              className={
                "fs-4 " + (location.pathname === "/Contact" && "active")
              }
            >
              Contact Us
            </Link>
          </li>
          <li className="text-center my-2 my-lg-0">
            <Link
              to={"/About"}
              className={"fs-4 " + (location.pathname === "/About" && "active")}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MyNav;
