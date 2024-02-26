import React, { useState } from "react";
import {
  DsButton,
  DsCheckBox,
  DsInput,
  DsSelect,
  DsTable,
  DsTabs,
} from "design_system";
import SelectVariable from "./SelectVariable";
import SelectFunction from "./SelectFunction";
export default function PropertiesGateway({ funtBpmnELement }) {
  const [isOpenVarialbe, setIsOpenVarialbe] = useState(false);
  const [isOpenFunction, setIsOpenFunction] = useState(false);
  const funtOffModalVarialbe = () => {
    setIsOpenVarialbe(!isOpenVarialbe)
  }
  const funtOffModalFunction = () => {
    setIsOpenFunction(!isOpenFunction)
  }
  return (
    <>
      <div className="AssignmentRules p-4">
        <div className="AssignmentRules-header">
          <h3>Thuộc tính Gateway</h3>
          <div
            className="cursor-pointer"
            onClick={() => {
              funtBpmnELement("");
              document.getElementById(
                "element-properties--modal"
              ).style.display = "none";
              document
                .getElementById("properties-other")
                .classList.remove("properties-other--propertiesGateway");
            }}
          >
            X
          </div>
        </div>
        <div className="h-hmodal flex flex-col justify-between">
          <div className="flex flex-row mt-4">
            <div class="basis-1/6 mr-6 text-xl font-medium text-[#2E3A5B]">
              Task2
            </div>
            <div class="basis-5/6 flex">
              <div className="w-full mr-4 flex">
                <div className="w-8 flex text-xs font-normal justify-center items-start !rounded-l border bg-[#F4F5F6] border-[#DBE0E6]">
                  1
                </div>
                <DsInput
                  inputStyle="float-label"
                  label="Your name"
                  message=""
                  name="input-name"
                  placeholder=""
                  size="large"
                  type="textarea"
                  className="w-full !rounded-l-none"
                />
              </div>
              <div>
                <DsButton
                  color="gray"
                  label="Chọn biến"
                  onClick={() => setIsOpenVarialbe(true)}
                  type="solid"
                  className="mb-4"
                />
                <DsButton
                  color="gray"
                  label="Chọn hàm"
                  onClick={() => setIsOpenFunction(true)}
                  type="solid"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center border-t border-[#DBE0E6] h-14">
            <DsButton
              color="blue"
              label="Hủy"
              onClick={function noRefCheck() {}}
              type="light"
              className="mr-2"
            />
            <DsButton
              color="blue"
              label="Lưu thông tin"
              onClick={function noRefCheck() {}}
              type="solid"
              className="ml-2"
            />
          </div>
        </div>
      </div>
      {isOpenVarialbe && (
        <div className="bg-[#4A4A4ACC] w-full flex justify-center items-center z-10">
          <SelectVariable funtOffModalVarialbe={funtOffModalVarialbe}/>
        </div>
      )}
      {isOpenFunction && (
        <div className="bg-[#4A4A4ACC] w-full flex justify-center items-center z-10">
          <SelectFunction funtOffModalFunction={funtOffModalFunction}/>
        </div>
      )}
    </>
  );
}

// export default index;
