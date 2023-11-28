type Props = {
  children: JSX.Element;
  infoType?: string;
};
const InfoBlock = ({ children, infoType = "info" }: Props) => {
  return (
    <div className="py-3">
      {infoType === "info" && (
        <>
          <div className="border p-2 rounded-md border-cyan-700 border-l-4 flex text-cyan-700">
            {children}
          </div>
        </>
      )}
      {infoType === "warning" && (
        <>
          <div className="border p-2 rounded-md border-orange-400 border-l-4 flex text-orange-400">
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default InfoBlock;
