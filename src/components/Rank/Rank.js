import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <p className="white">{`${name} , your current entry count is...`}</p>
      <div className="white f1 ">{entries}</div>
    </div>
  );
};

export default Rank;
