type Props = {
  children: JSX.Element;
  infoType: string;
};
const InfoBlock = ({ children, infoType }: Props) => {
  return (
    <div>
      {infoType === "info" && (
        <div className="border p-2 rounded-md border-cyan-700 border-l-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default InfoBlock;
