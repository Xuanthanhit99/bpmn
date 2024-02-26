import React, {useState} from 'react'
import {DsButton, DsTable} from "design_system"
import { Tree } from 'antd'
const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          {
            title: '0-0-0-0',
            key: '0-0-0-0',
          },
          {
            title: '0-0-0-1',
            key: '0-0-0-1',
          },
          {
            title: '0-0-0-2',
            key: '0-0-0-2',
          },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          {
            title: '0-0-1-0',
            key: '0-0-1-0',
          },
          {
            title: '0-0-1-1',
            key: '0-0-1-1',
          },
          {
            title: '0-0-1-2',
            key: '0-0-1-2',
          },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      {
        title: '0-1-0-0',
        key: '0-1-0-0',
      },
      {
        title: '0-1-0-1',
        key: '0-1-0-1',
      },
      {
        title: '0-1-0-2',
        key: '0-1-0-2',
      },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];

const treeDataAction = [
  {
    title: 'DynamicForm',
    key: '0',
    children: [
      {
        title: 'DynamicForm-1',
        key: '0-1',
      },
      {
        title: 'DynamicForm-2',
        key: '0-2',
      },
      {
        title: 'DynamicForm-3',
        key: '0-3',
      },
    ],
  },
];

const AssignmentRules = ({funtBpmnELement}) => {
  const [expandedKeys, setExpandedKeys] = useState(['0-0-0', '0-0-1']);
  const [checkedKeys, setCheckedKeys] = useState(['0-0-0']);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const onExpand = (expandedKeysValue) => {
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };
  return (
    <div className='AssignmentRules p-4'>
      <div className='AssignmentRules-header'>
          <h3>Các bước chi tiết</h3>
          <div className='cursor-pointer' onClick={() => {
            funtBpmnELement("")
            document.getElementById("element-properties--modal").style.display = "none"
            document.getElementById("properties-other").classList.remove("properties-other--detailedSteps")
          }}>X</div>
      </div>
      <div className='flex my-4'>
      <div className='flex flex-row basis-1/4'>
      {/* <Tree
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        checkedKeys={checkedKeys}
        selectedKeys={selectedKeys}
        treeData={treeData}
      /> */}
      </div>
      <div className='basis-3/4'>
      <DsTable
      columns={[
        {
          dataIndex: 'address',
          fixed: 'left',
          title: 'Yếu tố được chọn',
          render: () => <div>
            <h3>Trước khi hiển thị Dynaform</h3>
          </div>,
        },
        {
          dataIndex: 'action',
          title: 'Thao tác',
          render: () => <a>Delete</a>,
        },
      ]}
      dataSource={[
        {
          address: 'New York No. 1 Lake Park',
          age: 32,
        },
        {
          address: 'London No. 1 Lake Park',
          age: 42,
        },
        {
          address: 'Sydney No. 1 Lake Park',
          age: 32,
        },
      ]}
      className='w-full'
    />
      </div>
      </div>
      <div className='my-4 flex justify-end items-center'>
      <DsButton
        color="blue"
        label="Hủy"
        onClick={function noRefCheck(){}}
        type="light"
        className='mr-2'
      />
      <DsButton
        color="blue"
        label="Lưu thông tin"
        onClick={function noRefCheck(){}}
        type="solid"
        className='ml-2'
      />
      </div>
    </div>
  )
}

export default AssignmentRules