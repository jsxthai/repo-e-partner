import React from "react";

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.length > 0
        ? data.map((item, index) => (
            <tr key={item.customerID + index}>
              {/* <td>{index + 1}</td> */}
              <td>{item.customerID}</td>
              <td>{item.companyName}</td>
              <td>{item.contactName}</td>
              <td>{item.contactTitle}</td>
              <td>{item.address}</td>
              <td>{item.city}</td>
              <td>{item.region}</td>
              <td>{item.postalCode}</td>
              <td>{item.country}</td>
              <td>{item.phone}</td>
              <td>{item.fax}</td>
            </tr>
          ))
        : null}
    </tbody>
  );
};

export default TableBody;
