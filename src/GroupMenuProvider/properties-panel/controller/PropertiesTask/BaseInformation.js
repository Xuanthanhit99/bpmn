import { DsButton, DsInput } from 'design_system'
import React from 'react'

const BaseInformation = () => {
  return (
    <div>
        <div className='flex flex-row mb-4'>
          <div className='basis-1/2 mr-3'>
            <DsInput
              inputStyle="float-label"
              label="UID"
              message=""
              name="input-name"
              placeholder=""
              size="large"
              disabled="true"
            />
          </div>
          <div className='basis-1/2 ml-3'>
            <DsInput
              inputStyle="float-label"
              label="Tên Task"
              message=""
              name="input-name"
              placeholder=""
              size="large"
            />
          </div>
        </div>
        <div className='mb-4'>
          <DsInput
            inputStyle="float-label"
            label="Mô tả Task"
            message=""
            name="input-name"
            placeholder=""
            size="large"
            type="textarea"
          />
        </div>
        <div className='flex flex-row mb-4 items-center'>
          <div className='basis-1/2'>
            <DsInput
              inputStyle="float-label"
              label="Tên yêu cầu"
              message=""
              name="input-name"
              placeholder=""
              size="large"
              disabled="true"
            />
          </div>
          <div className='basis-1/2 ml-6'>
          <DsButton
            color="gray"
            label="Chọn biến"
            onClick={function noRefCheck(){}}
            type="solid"
          />
          </div>
        </div>
        <div>
          <DsInput
            inputStyle="float-label"
            label="Mô tả Task"
            message=""
            name="input-name"
            placeholder=""
            size="large"
            type="textarea"
          />
        </div>
    </div>
  )
}

export default BaseInformation