import React from "react";

const Card = (props) => {
  let options = props.options;
  // console.log(options);
  let priceOptions = [];
  if (options === undefined) {
    return null;
  } else {
    priceOptions = Object.keys(options);
  }

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          src={props.imgSrc}
          className="card-img-top"
          alt="..."
          style={{ width: "auto", objectFit: "fill", height: "171px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <p
            className="card-text"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {props.desc}
          </p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select className="m-2 h-100 bg-secondary rounded">
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-6">Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
