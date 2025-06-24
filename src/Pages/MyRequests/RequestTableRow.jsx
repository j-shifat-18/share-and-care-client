import React from "react";

const RequestTableRow = ({ request }) => {
  const { donorName, expireDate, location, status } = request;

  return (
    <tr>
      <td>{donorName}</td>
      <td>{location}</td>
      <td>{expireDate}</td>
      <td>
        <button
          className={`badge bg-pink-600  cursor-default`}
        >
          {status}
        </button>
      </td>
    </tr>
  );
};

export default RequestTableRow;
