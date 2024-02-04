import React from "react";

const BulletList = ({ title, items }: any) => {
  return (
    <div>
      <div className="side-title">{title}</div>
      <ul>
        {items.map((item: string, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BulletList;
