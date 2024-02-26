import { Table } from "antd";
import { DsButton, DsIcon, DsInput, DsTable } from "design_system";
import React, { useState } from "react";

const columns = [
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
];

const SelectFunction = ({funtOffModalFunction}) => {
  const [selectionType, setSelectionType] = useState('checkbox');
  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <div className="w-md-w-variable h-md-h-variable bg-white rounded-lg">
    <div className="flex justify-between mx-6 h-10 my-2 flex items-center justify-center">
      <h3 className="text-base font-medium text-[#2E3A5B] flex items-center justify-center">
        Danh sách hàm
      </h3>
      <div
        className="cursor-pointer flex items-center justify-center"
        onClick={() => funtOffModalFunction()}
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

export default SelectFunction;
