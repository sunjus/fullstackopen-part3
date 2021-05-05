import React from "react";

const Notification = ({ errorMsg: { msg, type } }) => {
  const style = {
    color: type === "error" ? "red" : "green",
    backgroundColor: "lightgrey",
    border: type === "error" ? "1px dotted red" : "1px dotted green",
    padding: "5px",
    margin: "0px 0px 10px 0px",
    fontSize: "18px",
  };
  if (msg === "") {
    return null;
  }
  return <div style={style}>{msg}</div>;
};

export default Notification;
