type Props = {
  children: JSX.Element;
  infoType?: string;
};
const InfoBlock = ({ children, infoType = "info" }: Props) => {
  return (
    <div className="py-3">
      {infoType === "info" && (
        <>
          <div className="border p-2 rounded-xl border-cyan-700 border-l-4 flex text-cyan-700">
            {children}
          </div>
        </>
      )}
      {infoType === "warning" && (
        <>
          <div className="border p-2 rounded-xl border-orange-400 border-l-4 flex text-orange-400">
            {children}
          </div>
        </>
      )}
      {infoType === "error" && (
        <>
          <div className="border p-2 rounded-xl border-red-600 border-l-4 flex text-red-600">
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default InfoBlock;
