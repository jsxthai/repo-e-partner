import React from "react";
import "./styles.css";

const TableHeader = ({ headerList, sortField, sortOrder, getSortOption }) => {
  // event khi click vào header column để sort
  const handleClickSort = (e) => {
    // console.log(e.target.value);

    // get name column clicked
    const columnName = e.target.value;
    // note: 1-sắp tăng, -1: sắp giảm, 0: không
    // kiểm tra cột hiện tại có đang được sort ko
    // case 1: có sort thì thay đổi trạng thái sort mới gửi đến component cha để sort
    // case 2: chưa có cột được sort tạo option sort cho cột vừa click và trạng thái sort là 1

    if (columnName === sortField) {
      sortOrder === 1
        ? getSortOption({
            columnName: columnName,
            order: -1,
          })
        : getSortOption({
            columnName: columnName,
            order: 1,
          });
    } else {
      getSortOption({
        columnName: columnName,
        order: 1,
      });
    }
  };

  return (
    <thead>
      <tr>
        {/* <th>STT</th> */}
        {headerList.length > 0
          ? headerList.map((item) => (
              <th key={item}>
                {/* {item} */}
                <button
                  className="TableHeader__btn"
                  value={item}
                  onClick={handleClickSort}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>

                {sortField === item && sortOrder === 1 ? (
                  <button
                    className="bx bxs-chevron-up TableHeader__icon-btn"
                    value={item}
                    onClick={handleClickSort}
                  ></button>
                ) : null}
                {sortField === item && sortOrder === -1 ? (
                  <button
                    className="bx bxs-chevron-down TableHeader__icon-btn"
                    value={item}
                    onClick={handleClickSort}
                  ></button>
                ) : null}
              </th>
            ))
          : null}
      </tr>
    </thead>
  );
};

export default TableHeader;
