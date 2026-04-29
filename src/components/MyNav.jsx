import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MyNav = function () {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrolledBy, setScrolledBy] = useState(0);

  const location = useLocation();

  const togle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handlescroll = () => {
      setScrolledBy(window.scrollY);
    };

    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  return (
    <>
      <nav
        className={
          "p-2 fixed-top d-lg-flex align-items-center " +
          (isExpanded && " h15rem ") +
          (scrolledBy > 500 &&
            location.pathname === "/" &&
            !isExpanded &&
            " bg-dark ") +
          (scrolledBy > 390 &&
            location.pathname === "/" &&
            isExpanded &&
            " bg-dark")
        }
      >
        <div className="d-flex justify-content-end">
          <button
            onClick={togle}
            className="d-lg-none btn bg-dark text-light fs-4 navTog p-0"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
        <ul className="list-unstyled d-lg-flex justify-content-evenly align-items-center m-0 w-100">
          <li className="text-center my-2 my-lg-0">
            <Link to={"/"} className="fs-5">
              Home
            </Link>
          </li>
          <li className="text-center my-2 my-lg-0">
            <Link to={"/Products"} className="fs-5">
              Products
            </Link>
          </li>
          <li className="text-center my-2 my-lg-0">
            <Link to={"/Contact"} className="fs-5">
              Contact Us
            </Link>
          </li>
          <li className="text-center my-2 my-lg-0">
            <Link to={"/About"} className="fs-5">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MyNav;
