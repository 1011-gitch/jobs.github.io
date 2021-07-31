import React from "react";

const vacancy = ({ vacancy }) => {
  return (
    <div>
      <div className="box mt-4 mb-5">
        <h1 className="title is-5">{vacancy.title}</h1>
        <span>{vacancy.company}</span>
        <p>{vacancy.city}</p>
        <div className="block"></div>
        <p>{vacancy.description}</p>
        <div className="is-flex is-justify-content-space-between">
          <button className="button is-primary mt-4">Apply</button>
          <button className="button is-danger mt-4">Delete</button>
        </div>
      </div>
    </div>
  );
};
export default vacancy;
