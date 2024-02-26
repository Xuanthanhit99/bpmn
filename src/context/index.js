import React, { createContext, useReducer, useState } from 'react'

export const TodoContext = createContext()

const ContextProvider = ({ children }) => {
  // State
  const [todos, setTodos] = useState(null)
  const [isModal,setIsModal] = useState(false);
  function uuid() {
    var temp_url = URL.createObjectURL(new Blob());
    var uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);
    return uuid.substr(uuid.lastIndexOf('/') + 1); // remove prefix (e.g. blob:null/, blob:www.test.com/, ...)
  }

  console.log("jsonKJ", todos?.["bpmn2:definitions"]?.["bpmn2:process"]);
  // useEffect

  const paramsCreateApi =
    {
      "ID": 0,
      "WorkflowCode": `{${uuid()}}`,
      "TaskCode": `{${uuid()}}`,
      "TaskName": "string",
      "TaskType": "string",
      "MarkerType": "string",
      "Description": "string",
      "IsFirstTask": 0,
      "IsAsync": 0,
      "RunInBackground": 0,
      "Priority": "string",
      "IsNotice": 0,
      "SLA": 0,
      "TimeUnit": "string",
      "SLACalendar": "string",
      "ServerID": 0,
      "MailInfo": {
        "MailUrlApi": "string",
        "MailSubject": "string",
        "MailFrom": "string",
        "MailTo": "string",
        "MailCc": "string",
        "MailBcc": "string",
        "TemplateFile": "string"
      },
      "ConditionConfig": {
        "DataConfig": [
          {
            "Type": "string",
            "Value": "string"
          }
        ],
        "ExpiryDateConfig": {
          "Unit": "string",
          "Value": 0
        }
      },
      "AssignmentType": "string",
      "UserID": 0,
      "UserIds": [
        0
      ],
      "Users": [
        {
          "ID": 0,
          "Code": "string",
          "Name": "string",
          "Email": "string",
          "Department": "string",
          "DepartmentUnit": "string",
          "AccountType": "string",
          "GroupId": 0,
          "RoleId": 0,
          "PermissionId": 0,
          "Position": "string",
          "AvatarPath": "string",
          "Address": "string",
          "Gender": "string",
          "DateOfBirth": "string",
          "PhoneNumber": "string",
          "UserName": "string",
          "Password": "string",
          "CreatedDate": "2023-09-29T03:12:18.084Z",
          "CreatedBy": 0,
          "ModifiedDate": "2023-09-29T03:12:18.084Z",
          "ModifiedBy": 0,
          "RememberMe": true,
          "ReturnUrl": "string",
          "Msg": "string"
        }
      ],
      "GroupUserID": 0,
      "TaskSteps": [
        {
          "ID": 0,
          "StepCode": "{Da52E1F0-A02f-bCfA-bC9C-f4eD3f36eB64}",
          "BpmnCode": "B7Dc0ddb-1EF4-5c78-481d-DbAcAcE8287D}",
          "BpmnType": "string",
          "StepTypeObject": "string",
          "ObjectCode": "45242cCC-decE-f2c8-aCed-b72f4BB51F04}",
          "ObjectData": "string",
          "Condition": "string",
          "Postion": 0,
          "StepTriggers": [
            {
              "ID": 0,
              "StepTriggerCode": "{3e96fCe6-4d47-cD24-1C57-be2F5B3748fB}",
              "BpmnCode": "{EA9a2beb-f4ab-e7ad-c1da-3e72deeE1D1D}",
              "BpmnType": "string",
              "StepCode": "A9db0857-2B69-9bAb-afD7-2025EAFCb20A}",
              "TriggerCode": "{9D63fE5A-621C-b15C-42Cd-C1f2234badfa}",
              "PostionType": "string",
              "Postion": 0,
              "Condition": "string",
              "CreatedDate": "2023-09-29T03:12:18.085Z",
              "CreatedBy": 0,
              "ModifiedDate": "2023-09-29T03:12:18.085Z",
              "ModifiedBy": 0
            }
          ],
          "CreatedDate": "2023-09-29T03:12:18.085Z",
          "CreatedBy": 0,
          "ModifiedDate": "2023-09-29T03:12:18.085Z",
          "ModifiedBy": 0
        }
      ],
      "Color": 0,
      "Width": "string",
      "Height": "string",
      "Status": 0,
      "CreatedDate": "2023-09-29T03:12:18.085Z",
      "CreatedBy": 0,
      "ModifiedDate": "2023-09-29T03:12:18.085Z",
      "ModifiedBy": 0
    }

  const funtModal = () => {
    setIsModal(!isModal)
  }
  
  // const funtOnBpmnObject = (params) => {
  //   setTodos(params)
  // }

  const todoContextData = {
    isModal,
    funtModal,
    setTodos
  }

  // return
  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  )
}

export default ContextProvider