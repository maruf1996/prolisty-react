import useScroll from "../hooks/useScroll";

const BackToTop = () => {
  const isVisible: boolean = useScroll(20);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="back-top"
      className={`back-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-chevron-up"></i>
    </button>
  );
};

export default BackToTop;
