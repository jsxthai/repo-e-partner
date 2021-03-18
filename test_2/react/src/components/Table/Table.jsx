import React, { useMemo, useState } from "react";
import "./styles.css";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ data }) => {
  const [optionSort, setOptionSort] = useState({
    columnName: "",
    order: 0,
  });

  const getSortOption = (opt) => {
    setOptionSort({
      columnName: opt.columnName,
      order: opt.order,
    });
  };

  if (data && optionSort.columnName.length > 0) {
    data = data.sort((a, b) => {
      if (a[optionSort.columnName] < b[optionSort.columnName])
        return -optionSort.order;
      else if (a[optionSort.columnName] > b[optionSort.columnName])
        return optionSort.order;
      // case column null
      // sort null - a - z
      else if (a[optionSort.columnName] === null) return -optionSort.order;
      else if (b[optionSort.columnName] === null) return optionSort.order;
      return 0;
    });
  }

  // create text header
  const headerList = useMemo(() => (data[0] ? Object.keys(data[0]) : []), [
    data,
  ]);

  return (
    <table className="hover">
      <TableHeader
        headerList={headerList}
        sortField={optionSort.columnName}
        sortOrder={optionSort.order}
        getSortOption={getSortOption}
      />
      <TableBody data={data} />
    </table>
  );
};

export default Table;
