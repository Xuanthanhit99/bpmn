import { Table } from "antd";
import { DsButton, DsIcon, DsInput } from "design_system";
import React, { useState } from "react";

const SelectVariable = ({funtOffModalVarialbe}) => {
  const [checkStrictly, setCheckStrictly] = useState(false);

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Loại biến",
      dataIndex: "typevariable",
      key: "typevariable",
    //   width: "12%",
    },
  ];
  const data = [
    {
      key: 1,
      name: "John Brown sr.",
      typevariable: 60,
      children: [
        {
          key: 11,
          name: "John Brown",
          typevariable: 42,
        },
        {
          key: 12,
          name: "John Brown jr.",
          typevariable: 30,
          children: [
            {
              key: 121,
              name: "Jimmy Brown",
              typevariable: 16,
            },
          ],
        },
        {
          key: 13,
          name: "Jim Green sr.",
          typevariable: 72,
          children: [
            {
              key: 131,
              name: "Jim Green",
              typevariable: 42,
              children: [
                {
                  key: 1311,
                  name: "Jim Green jr.",
                  typevariable: 25,
                },
                {
                  key: 1312,
                  name: "Jimmy Green sr.",
                  typevariable: 18,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };
  return (
    <div className="w-md-w-variable h-md-h-variable bg-white rounded-lg">
      <div className="flex justify-between mx-6 h-10 my-2 flex items-center justify-center">
        <h3 className="text-base font-medium text-[#2E3A5B] flex items-center justify-center">
          Danh sách biến
        </h3>
        <div
          className="cursor-pointer flex items-center justify-center"
          onClick={() => funtOffModalVarialbe()}
        >
          <DsIcon className="text-[#596481]" name="icon-bx-x" style={{}} />
        </div>
      </div>
      <hr className="bg-[#4A4A4ACC]" />
      <div className="m-6">
        <DsInput
          inputStyle="float-label"
          label="Tìm kiếm"
          message=""
          name="input-name"
          placeholder=""
          size="large"
          type="input"
          className="mb-4"
        />
        <div></div>
        <Table
          columns={columns}
          dataSource={data}
          className="overflow-auto h-80"
          pagination={false}
        />
      </div>
      <hr className="bg-[#4A4A4ACC]" />
      <div className="flex justify-end items-center border-t border-[#DBE0E6] h-14 mx-6">
        <DsButton
          color="blue"
          label="Hủy"
          onClick={function noRefCheck() {}}
          type="light"
          className="mr-2"
        />
        <DsButton
          color="blue"
          label="Chọn biến"
          onClick={function noRefCheck() {}}
          type="solid"
          className="ml-2"
        />
      </div>
    </div>
  );
};

export default SelectVariable;
