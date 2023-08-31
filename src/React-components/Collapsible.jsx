import React, { useRef, useState, useEffect } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

const Collapsible = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(ref.current?.getBoundingClientRect().height);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <>
      <div className="card">
        <div>
          <div className="p-3 border-bottom d-flex justify-content-between">
            <h6 className="font-weight-bold">{title}</h6>
            <button type="button" className="btn" onClick={handleFilterOpening}>
              {!isOpen ? <VscChevronDown /> : <VscChevronUp />}
            </button>
          </div>
        </div>

        <div
          style={{ height }}
          className="border-b-2 overflow-hidden transition-all ease-in duration-300"
        >
          <div ref={ref}>
            <div className="p-3">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
