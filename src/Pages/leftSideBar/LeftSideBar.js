import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UseContext";

const LeftSideBar = () => {
  const { catagory } = useContext(AuthContext);
  return (
    <div>
      <h5>Your catotory </h5>
      {catagory.map((cat) => (
        <p>
          <Link to={`/catogory/${cat.id}`} key={cat.id}>
            {cat?.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideBar;
