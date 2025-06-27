import React from "react";

const RequestTableRow = ({ request }) => {


  if(!request.foodData || !request.requestData) return ;

  
  const { donorName, expireDate, location, status , name } = request.foodData;
  const { requestedAt } = request.requestData;

  const convertedRequestDate = new Date(requestedAt).toLocaleString();
  const convertedExpireDate = new Date(expireDate).toLocaleString();


  return (
    <tr>
      <td>{donorName}</td>
      <td>{name}</td>
      <td>{location}</td>
      <td>{convertedExpireDate}</td>
      <td>{convertedRequestDate}</td>
      <td>
        <button
          className={`badge bg-orange-700  cursor-default`}
        >
          {status}
        </button>
      </td>
    </tr>
  );
};

export default RequestTableRow;
