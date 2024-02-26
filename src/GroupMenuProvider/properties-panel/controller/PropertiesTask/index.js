import React from 'react'
import {DsButton, DsCheckBox, DsInput, DsSelect, DsTable, DsTabs} from "design_system"
import BaseInformation from './BaseInformation'
import SetDeadlines from './SetDeadlines'
import NotificationSettings from './NotificationSettings'
import PriorityLevel from './PriorityLevel'
const index = ({funtBpmnELement}) => {
  return (
    <div className='AssignmentRules p-4'>
        <div className='AssignmentRules-header'>
            <h3>Thuộc tính Task</h3>
            <div className='cursor-pointer' onClick={() => {
              funtBpmnELement("")
              document.getElementById("element-properties--modal").style.display = "none"
              document.getElementById("properties-other").classList.remove("properties-other--propertiesTask")
            }}>X</div>
        </div>
        <div className='h-hmodal flex flex-col justify-between'>
          <div className=''>
            <DsTabs
              color="blue"
              defaultActiveKey="1"
              items={[
                {
                children: <BaseInformation />,
                key: '1',
                label: 'Thông tin cơ bản'
                },
                {
                children: <SetDeadlines />,
                key: '2',
                label: 'Cài đặt deadline'
                },
                {
                children: <NotificationSettings />,
                key: '3',
                label: 'Cài đặt thông báo'
                },
                {
                  children: <PriorityLevel />,
                  key: '4',
                  label: 'Mức độ ưu tiên'
                  }
              ]}
              size="large"
              type="line"
              width="fit-content"
            />
          </div>
          <div className='flex justify-end items-center border-t border-[#DBE0E6] h-14'>
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
    </div>
  )
}

export default index