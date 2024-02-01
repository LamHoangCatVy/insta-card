import CardBlock from "./CardBlock";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { Fade } from "@mui/material";

const Card = ({ card }) => {
  const { targetRef, isVisible } = useIntersectionObserver();

  return (
    <div className="p-4">
      <Fade in={isVisible} timeout={500}>
        <div ref={targetRef}>
          <CardBlock cards={card} />
        </div>
      </Fade>
    </div>
  );
};

export default Card;