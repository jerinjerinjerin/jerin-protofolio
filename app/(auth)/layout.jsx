import React from "react";

const LayOut = ({ children }) => {
    return (
        <div className="flex justify-center items-center bg-black">{children}</div>
    );
};

export default LayOut;
