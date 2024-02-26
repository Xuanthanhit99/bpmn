import { DsDatePicker, DsIcon, DsInput, DsSelect } from "design_system";
import React, {useState} from "react";

const SetDeadlines = () => {
  const [noteNotification, setNoteNotification] = useState(true)
  return (
    <div>
      {noteNotification && <div className="rounded-lg pl-4 pr-3 text-sm font-normal text-[#2E3A5B] bg-[#EBF3F9] mb-4 h-11 flex items-center justify-between">
        <p>Ngày làm việc chỉ gồm 8 tiếng. Ngày bình thường gồm 24 tiếng</p>
        <span onClick={() => setNoteNotification(false)} className="cursor-pointer">
          <DsIcon className="text-[#2E3A5B]" name="icon-bx-x" style={{}} />
        </span>
      </div>}
      <div className="flex flex-row">
        <div className="basis-1/4">
          <DsInput
            inputStyle="float-label"
            label="Khoảng thời gian"
            message=""
            name="input-name"
            placeholder=""
            size="large"
            type="text"
          />
        </div>
        <div className="basis-1/4 mx-4">
          <DsSelect
            allowClear
            label="Đơn vị thời gian"
            message=""
            name="input-name"
            options={[]}
            placeholder=""
            selectStyle="float-label"
            showSearch
            size="large"
          />
        </div>
        <div className="basis-1/4 mr-4">
          <DsDatePicker
            allowClear
            format="DD/MM/YYYY HH:mm:ss"
            inputStyle="float-label"
            label="Lịch"
            message=""
            name="date-picker"
            picker="date"
            showTime
            size="large"
          />
        </div>
        <div className="basis-1/4">
          <DsDatePicker
            allowClear
            format="DD/MM/YYYY HH:mm:ss"
            inputStyle="float-label"
            label="Múi giờ"
            message=""
            name="date-picker"
            picker="time"
            showTime
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default SetDeadlines;
