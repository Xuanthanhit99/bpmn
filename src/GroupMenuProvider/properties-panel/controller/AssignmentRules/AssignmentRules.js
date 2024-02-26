import React from 'react'
import {DsButton, DsCheckBox, DsInput, DsSelect, DsTable} from "design_system"
const AssignmentRules = ({funtBpmnELement}) => {
  return (
    <div className='AssignmentRules p-4'>
        <div className='AssignmentRules-header'>
            <h3>Quy tắc phân công: Task</h3>
            <div className='cursor-pointer' onClick={() => {
              funtBpmnELement("")
              document.getElementById("element-properties--modal").style.display = "none"
              document.getElementById("properties-other").classList.remove("properties-other--assignmentRules")
            }}>X</div>
        </div>
        <div className='flex flex-row items-center my-4'>
          <div class="basis-1/3">
            <DsSelect
            allowClear
            label="Loại phân công"
            options={[
              {
                label: 'Chocolate',
                value: 'chocolate'
              },
            ]}
            placeholder="Loại phân công"
            selectStyle="float-label"
            showSearch
            size="normal"
          />
          </div>
          <div class="basis-1/3 h-12 flex justify-center items-center">
            <DsCheckBox
              color="blue"
              onChange={function noRefCheck(){}}
              defaultChecked={true}
            >
              Xem danh sách người dùng
            </DsCheckBox>
          </div>
          <div class="basis-1/3 h-12 flex justify-center items-center">
            <DsCheckBox
              color="blue"
              onChange={function noRefCheck(){}}
            >
              Xem danh sách nhóm
            </DsCheckBox>
          </div>
        </div>
        <hr className='w-full'/>
        <div className='flex flex-row'>
          <div class="basis-1/2 mr-4">
            <div className='my-4 text-start text-base font-medium'>Danh sách lựa chọn</div>
            <div className='mb-4'>
              <DsInput
                inputStyle="float-label"
                label="Tìm kiếm"
                message=""
                name="input-name"
                placeholder=""
                size="normal"
              />
            </div>
            <DsTable
              columns={[{
                title: 'STT',
                dataIndex: 'key',
                key: 'key',
              },
              {
                title: 'Danh sách',
                dataIndex: 'DsName',
                key: 'DsName',
              },
              {
                title: 'Thao tác',
                key: 'action',
                render: (_, record) => (
                  <span size="middle">
                    <a>Xóa</a>
                  </span>
                ),
              }]}
              dataSource={[
                {
                  key: '1',
                  DsName: 'AnhLK11 - Lê Kiều Anh - Ban CNTT - Admin ',
                  age: 32,
                },
                {
                  key: '2',
                  DsName: 'TuanNV - Nguyễn Văn Tuấn - Ban CNTT',
                  age: 42,
                },
                {
                  key: '3',
                  DsName: 'MinhPQ - Phạm Quang Minh - Ban CNTT',
                  age: 32,
                },
              ]}
              pagination={{
                showSizeChanger: false,
                total: 30
              }}
            />
          </div>
          <div class="basis-1/2 ml-4">
            <div className='flex justify-between items-center my-4 my-4 text-start text-base font-medium'>
              <h3>Danh sách được phân công</h3>
              <p>Tổng số: <span>13 người</span></p>
            </div>
            <div className='mb-4'>
              <DsInput
                inputStyle="float-label"
                label="Tìm kiếm"
                message=""
                name="input-name"
                placeholder=""
                size="normal"
              />
            </div>
            <DsTable
              columns={[{
                title: 'STT',
                dataIndex: 'key',
                key: 'key',
              },
              {
                title: 'Danh sách',
                dataIndex: 'DsName',
                key: 'DsName',
              },
              {
                title: 'Thao tác',
                key: 'action',
                render: (_, record) => (
                  <span size="middle">
                    <a>Xóa</a>
                  </span>
                ),
              }]}
              dataSource={[
                {
                  key: '1',
                  DsName: 'AnhLK11 - Lê Kiều Anh - Ban CNTT - Admin ',
                  age: 32,
                },
                {
                  key: '2',
                  DsName: 'TuanNV - Nguyễn Văn Tuấn - Ban CNTT',
                  age: 42,
                },
                {
                  key: '3',
                  DsName: 'MinhPQ - Phạm Quang Minh - Ban CNTT',
                  age: 32,
                },
              ]}
              pagination={{
                showSizeChanger: false,
                total: 30
              }}
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