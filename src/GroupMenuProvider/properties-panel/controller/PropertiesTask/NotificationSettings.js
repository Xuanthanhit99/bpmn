import { DsButton, DsCheckBox, DsIcon, DsInput } from "design_system";
import React, {useState, useEffect} from "react";

const NotificationSettings = () => {
  const [valueNguoiNhan, setValueNguoiNhan] = useState()
  const [arrayNguoiNhan, setArrayNguoiNhan] = useState([])

  const funtDeleteArrayNguoiNhan = (item) => {
    const dataFilter = arrayNguoiNhan?.filter(itemFilter => itemFilter !== item)
    setArrayNguoiNhan(dataFilter);
  }

  console.log("arrayNguoiNhan", arrayNguoiNhan);
  return (
    <div>
      <div className="mb-4">
        <DsCheckBox
          color="blue"
          size="large"
          onChange={function noRefCheck() {}}
        >
          <span className="text-sm font-normal text-[#596481]">
            Thông báo đến người được phân công tiếp theo{" "}
          </span>
        </DsCheckBox>
      </div>
      <div className="mb-4">
        <div className="flex flex-row items-center">
          <div className="w-11/12 mr-4">
            <DsInput
              inputStyle="float-label"
              label="Người nhận"
              message=""
              name="input-name"
              placeholder=""
              size="large"
              type="text"
              onChange={(value) => setValueNguoiNhan(value)}
            />
          </div>
          <div className="w-1/12">
            <DsButton
              color="gray"
              label="Thêm"
              onClick={() => setArrayNguoiNhan([...arrayNguoiNhan,valueNguoiNhan])}
              type="solid"
              disabled={arrayNguoiNhan?.find(itemfilNN => itemfilNN === valueNguoiNhan) ? true : false}
            />
          </div>
        </div>
        <div className="mt-4">
          <ul className="flex items-center justify-start">
            {arrayNguoiNhan && arrayNguoiNhan?.map((item,index) => {
              return <li key={index} className="w-fit border flex justify-center items-center border-[#0861BF] py-2 px-3 rounded-[40px] mr-3">
                <p className="mr-2 text-[#0861BF] text-base font-medium">{item}</p>
                <span onClick={() => funtDeleteArrayNguoiNhan(item)}
                  className="cursor-pointer flex justify-center items-center">
                  <DsIcon className="text-[#0861BF]" name="icon-bx-x" style={{}} />
                </span>
                </li>
            })}
          </ul>
        </div>
      </div>
      <div className="mb-4">
        <DsInput
          inputStyle="float-label"
          label="Kiểu nội dung"
          message=""
          name="input-name"
          placeholder=""
          size="large"
          type="text"
        />
      </div>
      <div className="flex flex-row items-center mb-4">
        <div className="mr-4 w-full">
          <DsInput
            inputStyle="float-label"
            label="Tiêu đề"
            message=""
            name="input-name"
            placeholder=""
            size="large"
            type="text"
          />
        </div>
        <div className="w-28">
          <DsButton
            color="gray"
            label="Chọn biến"
            onClick={function noRefCheck() {}}
            type="solid"
          />
        </div>
      </div>
      <div className="mb-4">
        <DsInput
          inputStyle="float-label"
          label="Nội dung"
          message=""
          name="input-name"
          placeholder=""
          size="large"
          type="textarea"
        />
      </div>
    </div>
  );
};

export default NotificationSettings;
