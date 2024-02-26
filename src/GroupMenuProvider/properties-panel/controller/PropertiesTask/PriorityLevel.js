import { DsSelect } from 'design_system'
import React from 'react'

const PriorityLevel = () => {
  return (
    <div>
        <div className='flex flex-row mb-4'>
          <div className='basis-1/2 mr-3'>
          <DsSelect
            allowClear
            label="Chọn mức độ ưu tiên"
            message=""
            name="input-name"
            options={[]}
            placeholder="Select something . . ."
            selectStyle="float-label"
            showSearch
            size="large"
            />
          </div>
        </div>
    </div>
  )
}

export default PriorityLevel