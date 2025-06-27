import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import RequestTableRow from "./RequestTableRow";

const MyRequests = () => {
  const { user } = use(AuthContext);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/foodRequest/${user.uid}`)
      .then((response) => {
        setRequests(response.data);
      });
  }, []);

  console.log(requests)

  return (
    <div className="min-h-screen  px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">My Requests</h2>

        <div className="overflow-x-auto rounded-lg border border-base-300">
          <table className="table table-zebra w-full">
            <thead className="bg-base-200 text-base-content">
              <tr>
                <th>Donor</th>
                <th>Food</th>
                <th>Pickup Location</th>
                <th>Expire Date</th>
                <th>Request Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <RequestTableRow
                  key={request?._id}
                  request={request}
                ></RequestTableRow>
              ))}
              {requests.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyRequests;
