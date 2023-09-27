import "./FlipCard.css";
type FlipCardProps = {
  children: JSX.Element;
  classes?: string;
};
const FlipCard = ({ children, classes }: FlipCardProps) => {
  return <div className={`flip-card ${classes}`}>{children}</div>;
};
type FaceProps = {
  children: JSX.Element;
  classes?: string;
};
export const FrontFace = ({ children, classes }: FaceProps) => {
  return (
    <div className={`face front-face ${classes}`}>
      <div>{children}</div>
    </div>
  );
};

export const BackFace = ({ children, classes }: FaceProps) => {
  return <div className={`face back-face ${classes}`}>{children}</div>;
};

export default FlipCard;
