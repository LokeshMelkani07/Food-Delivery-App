import React from "react";
// import Delete from "@material-ui/icons/Delete";
import { useCart, useDispatchCart } from "../components/ContextReducer";
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className="m-3 w-100 text-center fs-3 font-weight-bold">
          The Cart is Empty!
        </div>
      </div>
    );
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <div>
      {console.log(data)}
      <div
        className="container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md "
        style={{ width: "100%", height: "240px", overflow: "auto" }}
      >
        <table className="table table-hover ">
          <thead className=" text-success fs-4">
            <tr style={{ fontWeight: "bold", color: "red" }}>
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount (₹)</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button
                    type="button"
                    className="btn p-0"
                    onClick={() => {
                      dispatch({ type: "REMOVE", index: index });
                    }}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1 className="fs-3 mx-2 my-5">
          Total Price: <span style={{ color: "red" }}>{totalPrice}</span> /-
        </h1>
      </div>
      <div>
        <button
          className="btn mx-2 mt-1 mb-5"
          style={{ background: "red", fontWeight: "bold", color: "black" }}
        >
          {" "}
          Check Out{" "}
        </button>
      </div>
    </div>
  );
}
