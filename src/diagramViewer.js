import { useEffect, useState, useContext } from "react";
import BpmnViewer from "bpmn-js/lib/Modeler";
import { is } from 'bpmn-js/lib/util/ModelUtil';

import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import camundaModdleDescriptor from "camunda-bpmn-moddle/resources/camunda";
import DiagramUrl from "../src/components/bpmnxml.bpmn";
import ReplaceProvider from "./ReplaceProvider/index";
import $ from "jquery";
import magicModdleDescriptorList from "./magics";

import { debounce } from "min-dash";
import CustomEdit from "./Edit";
// use Camunda BPMN Moddle extension
import customRendererModuleColor from "./custom-modeler/color-picker";
import customRendererModuleStartEvent from "./custom-modeler/EventSettingElement";
import customAddModalRendererModuleElement from "./custom-modeler/modal-element";
import customRendererModuleRules from "./custom-modeler/resize-all-reles";
import customRendererModuleFlowSetting from "./custom-modeler/FlowSetting";
import customRendererModuleEndEvent from "./custom-modeler/EndEvent";
import customRendererIntermediateThrowEvent from "./custom-modeler/IntermediateThrowEvent";
import customRendererExclusiveGateway from "./custom-modeler/gateway/ExclusiveGateway"


//menu-left
import customRendererModuleStartEvenDraw from "./menu-left/start-event/draw";
import customRendererModuleStartEvenPalette from "./menu-left/start-event/palette";
import customRendererModuleImmediateDraw from "./menu-left/Immediate/draw";
import customRendererModuleImmediatePalette from "./menu-left/Immediate/palette";
import customRendererModuleEndEvenDraw from "./menu-left/end-event/draw";
import customRendererModuleEndEvenPalette from "./menu-left/end-event/palette";
import customRendererModuleExclusiveGatewayDraw from "./menu-left/Exclusive-Gateway/draw";
import customRendererModuleExclusiveGatewayPalette from "./menu-left/Exclusive-Gateway/palette";
import customRendererModuleParallelGatewayDraw from "./menu-left/Parallel-Gateway/draw";
import customRendererModuleParallelGatewayPalette from "./menu-left/Parallel-Gateway/palette";
import customRendererModuleInclusiveGatewayDraw from "./menu-left/Inclusive-Gateway/draw";
import customRendererModuleInclusiveGatewayPalette from "./menu-left/Inclusive-Gateway/palette";
import customRendererModuleTaskDraw from "./menu-left/Task/draw";
import customRendererModuleTaskPalette from "./menu-left/Task/palette";
import customRendererModuleBlackboxPoolDraw from "./menu-left/Blackbox-Pool/draw";
import customRendererModuleBlackboxPoolPalette from "./menu-left/Blackbox-Pool/palette";
import customRendererModuleLaneDraw from "./menu-left/Lane/draw";
// import customRendererModuleLanePalette from "./menu-left/Lane/palette";
import customRendererModuleGroupDraw from "./menu-left/Group/draw";
import customRendererModuleGroupPalette from "./menu-left/Group/palette";
import customRendererModuleTextDraw from "./menu-left/Text/draw";
import customRendererModuleTextPalette from "./menu-left/Text/palette";
// import {CreateAppendAnythingModule, CreateAppendElementTemplatesModule} from './GroupMenuProvider';
import "bpmn-js-connectors-extension/dist/connectors-extension.css";
//end
import "bpmn-js-properties-panel/dist/assets/properties-panel.css";
import DeleteElementProvider from "./DeleteElementProvider/DeleteElementProvider";
// import CamundaExtensionModule from 'camunda-bpmn-moddle';
import xmljs from "xml-js";
import { Buffer } from "buffer";

//modal
import PropertiesPanel from "./GroupMenuProvider/properties-panel";

import reducedPaletteModule from "./GroupMenuProvider/modeler/features/reduced-palette";
import reducedContextPadModule from "./GroupMenuProvider/modeler/features/reduced-context-pad";

import customModdleExtension from "./GroupMenuProvider/modeler/moddle/custom.json";
import { DsButton, DsIcon, DsLogo } from "design_system";
import MyCommandInterceptor from "./MycommandInterceptor";

// end modal
// @ts-ignore
import {
  addStyle
} from './Helper';
import axios from "axios";
import { useParams } from "react-router-dom";

addStyle(`
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    padding: 10px;
  }

  .icon-red {
    background: red !important;
  }
`);
window.Buffer = Buffer;
function VideoPlayer() {
  const [data, setData] = useState(null);
  const [numberUndoRedo, setNumberUndoRedo] = useState(50);
  const [dataApiObject, setDataApiObject] = useState(null);
  const [dataApiArrayObject, setDataApiArrayObject] = useState([]);
  const [dataApiArrayGateway, setDataApiArrayGateway] = useState([]);
  const [dataApiArrayTaskList, setDataApiArrayTaskList] = useState([]);
  const [dataApiArrayFlowSequences, setDataApiArrayFlowSequences] = useState([]);
  const [dataApiXmlLocal, setDataApiXmlLocal] = useState();
  const [dataApiXmlLocalView, setDataApiXmlLocalView] = useState();
  let { userId } = useParams();
  // const [set]
  useEffect(() => {
    var container = $("#js-drop-zone");
    const $propertiesContainer = document.querySelector("#properties-other");
    // viewer instance
    var bpmnViewer = new BpmnViewer({
      container: "#js-canvas",
      keyboard: {
        bindTo: document.body,
      },
      propertiesPanel: {
        parent: "#js-properties-panel",
      },
      additionalModules: [
        //setColorElement
        MyCommandInterceptor,
        // customRendererModule,
        customRendererModuleColor,
        customRendererModuleStartEvent,
        customRendererModuleRules,
        customAddModalRendererModuleElement,
        ReplaceProvider,
        //modal
        reducedContextPadModule,
        reducedPaletteModule,
        //end modal
        CustomEdit,
        DeleteElementProvider,
        customRendererModuleFlowSetting,
        customRendererModuleEndEvent,
        customRendererIntermediateThrowEvent,
        customRendererExclusiveGateway,
        //menu-left
        customRendererModuleStartEvenDraw,
        customRendererModuleStartEvenPalette,
        customRendererModuleImmediateDraw,
        customRendererModuleImmediatePalette,
        customRendererModuleEndEvenDraw,
        customRendererModuleEndEvenPalette,
        customRendererModuleExclusiveGatewayDraw,
        customRendererModuleExclusiveGatewayPalette,
        customRendererModuleParallelGatewayDraw,
        customRendererModuleParallelGatewayPalette,
        customRendererModuleInclusiveGatewayDraw,
        customRendererModuleInclusiveGatewayPalette,
        customRendererModuleTaskDraw,
        customRendererModuleTaskPalette,
        customRendererModuleBlackboxPoolDraw,
        customRendererModuleBlackboxPoolPalette,
        // customRendererModuleLaneDraw,
        // customRendererModuleLanePalette,
        customRendererModuleGroupDraw,
        customRendererModuleGroupPalette,
        // customRendererModuleTextDraw,
        customRendererModuleTextPalette,
        //end
      ],
      moddleExtensions: {
        camunda: camundaModdleDescriptor,
        // magic: magicModdleDescriptor,magicModdleDescriptorList
        magic: magicModdleDescriptorList,
        custom: customModdleExtension,
      },
    });

    const propertiesPanel = new PropertiesPanel({
      container: $propertiesContainer,
      modeler: bpmnViewer,
    });

    bpmnViewer.on("elementTemplates.errors", (event) => {
      const { errors } = event;

      showTemplateErrors(errors);
    });

    var cli = window.cli;

    function createNewDiagram() {
      openDiagram(data);
    }

    function showTemplateErrors(errors) {
      console.error("Failed to parse element templates", errors);

      const errorMessage = `Failed to parse element templates:
      
          ${errors.map((error) => error.message).join("\n    ")}
      
      Check the developer tools for details.`;

      document.querySelector(".error-panel pre").textContent = errorMessage;
      document.querySelector(".error-panel").classList.toggle("hidden");
    }

    async function openDiagram(xml) {
      try {
        //undo - redo
        var commandStack = bpmnViewer.get("commandStack");
        document
          .getElementById("properties-undo")
          .addEventListener("click", function (event) {
            commandStack.undo();
          });

        document
          .getElementById("properties-rendo")
          .addEventListener("click", function (event) {
            commandStack.redo();
          });

          let zoomScroll = bpmnViewer.get('zoomScroll');
          document.getElementById("zoom-bpmn--left").addEventListener("click", () => {
            zoomScroll.stepZoom(-1);
          })
          document.getElementById("zoom-bpmn--right").addEventListener("click", () => {
            zoomScroll.stepZoom(1);
          })

        await bpmnViewer.importXML(xml);

        container.removeClass("with-error").addClass("with-diagram");
      } catch (err) {
        container.removeClass("with-diagram").addClass("with-error");

        container.find(".error pre").text(err.message);

        console.error(err);
      }
    }

    // if(dataApiXmlLocalView) {
      // openDiagram(dataApiXmlLocalView)
    // }

    async function exportDiagram(aladin) {
      try {
        var result = await bpmnViewer.saveXML({ format: true });
        cli.save("bpmn");

        alert("Diagram exported. Check the developer tools!");

      } catch (err) {
        console.error("could not save BPMN 2.0 diagram", err);
      }
    }


    //open file folder
        var $file = $("[data-open-file]");

        function readFile(file, done) {
          if (!file) {
            return done(new Error("no file chosen"));
          }
    
          var reader = new FileReader();
    
          reader.onload = function (e) {
            done(null, e.target.result);
          };
    
          reader.readAsText(file);
        }
    
        $file.on("change", function () {
          readFile(this.files[0], function (err, xml) {
            if (err) {
              alert("could not read file, see console");
              return console.error("could not read file", err);
            }
            // console.log("first", dataApiXmlLocalView)
            openDiagram(xml);
          });
          
        });

        // get xml
        if(dataApiXmlLocalView) {
          // console.log("dataApiXmlLocalView", dataApiXmlLocalView);
          openDiagram(dataApiXmlLocalView);            
        }
        const getAPiNewXml = async (item) => {
            try {
              const data = await axios.post('http://localhost:7748/bpmnxml',{params: item});
              // console.log("data", data?.data);
              // console.log("1331", xmljs?.json2xml(data?.data,{compact: true, ignoreComment: true, spaces: 4}));
              let dataApiView = xmljs?.json2xml(data?.data,{compact: true, ignoreComment: true, spaces: 4})
              openDiagram(dataApiView);
              setDataApiXmlLocalView(dataApiView)
            } catch (error) {
              console.log(error)
            }
              // console.log("first", dataApiXmlLocalView)
        }
        if(userId) {
          getAPiNewXml(userId)
        }
        // save xml
        if(dataApiXmlLocal) {
        document.getElementById("view-api--xml").addEventListener("click",async () => {
            try {
              const data = await axios.post('http://localhost:7748/xml',{params: dataApiXmlLocal});
              let dataApiView = xmljs?.json2xml(data?.data,{compact: true, ignoreComment: true, spaces: 4})
              openDiagram(dataApiView);
            } catch (error) {
              console.log(error)
            }
        })
      }

        // end
        $(function () {
          $("#js-create-diagram").click(function (e) {
            e.stopPropagation();
            e.preventDefault();
    
            createNewDiagram();
          });
    
          var downloadLink = $("#js-download-diagram");
          var downloadSvgLink = $("#js-download-svg");
    
          $(".buttons a").click(function (e) {
            if (!$(this).is(".active")) {
              e.preventDefault();  
              e.stopPropagation();
            }
          });
    
          function setEncoded(link, name, data) {
            var encodedData = encodeURIComponent(data);
    
            if (data) {
              link.addClass("active").attr({
                href: "data:application/bpmn20-xml;charset=UTF-8," + encodedData,
                download: name,
              });
            } else {
              link.removeClass("active");
            }
          }
    
          var exportArtifacts = debounce(async function () {
            try {
              const { svg } = await bpmnViewer.saveSVG();
    
              setEncoded(downloadSvgLink, "diagram.svg", svg);
            } catch (err) {
              console.error("Error happened saving SVG: ", err);
    
              setEncoded(downloadSvgLink, "diagram.svg", null);
            }
    
            try {
              const { xml } = await bpmnViewer.saveXML({ format: true });
              // console.log("first", xmljs.xml2json(xml, {compact: true, spaces: 4}))
              const jsonKJ = xmljs.xml2json(xml, { compact: true, spaces: 4 });
              console.log("jsonKJ", JSON.parse(jsonKJ));
              const xmlToObject = JSON.parse(jsonKJ)
              setData(jsonKJ);
              setDataApiObject(xmlToObject?.['bpmn2:definitions']?.['bpmn2:process'])
              setDataApiXmlLocal(xmlToObject)
              // console.log("data", xml.map(item => console.log("first", item)));
              // console.log(xml  )
              setEncoded(downloadLink, "diagram.bpmn", xml);
            } catch (err) {
              console.error("Error happened saving diagram: ", err);
              setEncoded(downloadLink, "diagram.bpmn", null);
            }
          }, 500);
    
          bpmnViewer.on("commandStack.changed", exportArtifacts);
        });

    // load external diagram file via AJAX and open it
    $.get(DiagramUrl, openDiagram, "text");
    $("#save-button").click(exportDiagram);
  }, []);

  function uuid() {
    var temp_url = URL.createObjectURL(new Blob());
    var uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);
    return uuid.substr(uuid.lastIndexOf('/') + 1); // remove prefix (e.g. blob:null/, blob:www.test.com/, ...)
  }

  useEffect(() => {
    // console.log("dataApiObject", dataApiObject);
    if(dataApiObject) {
    //event
    const startEventTask  = dataApiObject?.['bpmn2:startEvent'] ? dataApiObject?.['bpmn2:startEvent']?.length ? dataApiObject?.['bpmn2:startEvent']?.map(item => {
      // console.log("item", item);

      return {
        "EventCode": `${uuid()}`,
        "eventName": item?._attributes?.name,
        "eventType": item?.["bpmn2:messageEventDefinition"] ? "message" : item?.["bpmn2:timerEventDefinition"] ? "timer" : "empty",
        "eventMaker": item?.["bpmn2:intermediateThrowEvent"] ? "Intermediate" : item?.["bpmn2:endEvent"] ? "endEvent" : "startEvent"
      }
    }) : [
      {
        "EventCode": `${uuid()}`,
        "eventName": dataApiObject?.["bpmn2:startEvent"]?._attributes?.name,
        "eventType": dataApiObject?.["bpmn2:startEvent"]?.["bpmn2:messageEventDefinition"] ? "message" : dataApiObject?.["bpmn2:startEvent"]?.["bpmn2:timerEventDefinition"] ? "timer" : "empty",
        "eventMaker": dataApiObject?.["bpmn2:intermediateThrowEvent"] ? "Intermediate" : dataApiObject?.["bpmn2:endEvent"] ? "endEvent" : "startEvent"
      }
    ] : []
  
    const endEventTask  = dataApiObject?.['bpmn2:endEvent'] ? dataApiObject?.['bpmn2:endEvent']?.length ?  dataApiObject?.['bpmn2:endEvent']?.map(item => {
      return {
        "EventCode": `${uuid()}`,
        "eventName": "End",
        "eventType": "EMPTY",
        "eventMaker": "END"
      }
    }) : [
      {
        "EventCode": `${uuid()}`,
        "eventName": "End",
        "eventType": "EMPTY",
        "eventMaker": "END"
      }
    ] : []
    let startEventTaskConcat = [...startEventTask,...endEventTask]
  
    setDataApiArrayObject(startEventTaskConcat);

    //gateway
    const inclusiveGatewayTask  = dataApiObject?.['bpmn2:inclusiveGateway'] ? dataApiObject?.['bpmn2:inclusiveGateway']?.length ? dataApiObject?.['bpmn2:inclusiveGateway']?.map(item => {
      return {
        "EventCode": `${uuid()}`,
        "eventName": "Gateway name 1",
        "eventType": "EXCLUSIVE",
        "eventMaker": "DIVERGING"
      }
    }) : [
      {
        "EventCode": `${uuid()}`,
        "eventName": "Gateway name 1",
        "eventType": "EXCLUSIVE",
        "eventMaker": "DIVERGING"
      }
    ] : []
  
    const exclusiveGatewayTask  = dataApiObject?.['bpmn2:exclusiveGateway'] ? dataApiObject?.['bpmn2:exclusiveGateway']?.length ? dataApiObject?.['bpmn2:exclusiveGateway']?.map(item => {
      return {
        "EventCode": `${uuid()}`,
        "eventName": "Gateway name 1",
        "eventType": "EXCLUSIVE",
        "eventMaker": "DIVERGING"
      }
    }) : [
      {
        "EventCode": `${uuid()}`,
        "eventName": "Gateway name 1",
        "eventType": "EXCLUSIVE",
        "eventMaker": "DIVERGING"
      }
    ] : []

    const parallelGatewayTask  = dataApiObject?.['bpmn2:parallelGateway'] ? dataApiObject?.['bpmn2:parallelGateway']?.length ? dataApiObject?.['bpmn2:parallelGateway']?.map(item => {
      return {
        "EventCode": `${uuid()}`,
        "eventName": item?.name,
        "eventType": "EXCLUSIVE",
        "eventMaker": "DIVERGING"
      }
    }) : [
      {
        "EventCode": `${uuid()}`,
        "eventName": "Gateway name 1",
        "eventType": "EXCLUSIVE",
        "eventMaker": "DIVERGING"
      }
    ] : []

    let gatewayTaskConcat = [...exclusiveGatewayTask,...inclusiveGatewayTask,...parallelGatewayTask]
    setDataApiArrayGateway(gatewayTaskConcat);
    //task
    const TaskListArray  = dataApiObject?.['bpmn2:task'] ? dataApiObject?.['bpmn2:task']?.length ? dataApiObject?.['bpmn2:task']?.map((item,index) => {
      return {
        "EventCode": `${uuid()}`,
        "eventName": "Task 1",
        "eventType": "CREATE_ORDER",
        "eventMaker": "NONE",
        "IsFirstTask": index
      }
    }) : [{
      "EventCode": `${uuid()}`,
      "eventName": "Task 1",
      "eventType": "CREATE_ORDER",
      "eventMaker": "NONE",
      "IsFirstTask": 1
    }] : []
  
    setDataApiArrayTaskList(TaskListArray);
    // FlowSequences
    const FlowSequencesStartArrayOut  = dataApiObject?.['bpmn2:sequenceFlow'] ? dataApiObject?.['bpmn2:sequenceFlow']?.length ? dataApiObject?.['bpmn2:sequenceFlow']?.map((item,index) => {
      return {
        "flowCode": `${uuid()}`,
        "flowName": "Start to Save",
        "flowType": "SEQUENCE",
        "originElement": `${uuid()}`,
        "originElementType": "EVENT",
        "destinationElement": `${uuid()}`,
        "destinationElementType": "TASK"
      }
    }) : [{
      "flowCode": `${uuid()}`,
      "flowName": "Start to Save",
      "flowType": "SEQUENCE",
      "originElement": `${uuid()}`,
      "originElementType": "EVENT",
      "destinationElement": `${uuid()}`,
      "destinationElementType": "TASK"
    }] : []
  
    setDataApiArrayFlowSequences(FlowSequencesStartArrayOut);
  }

  }, [dataApiObject])

  const paramsApiCrete ={
  "ProcessCode": `${uuid()}`,
  "WorkflowCode": `${uuid()}`,
  "workflowName": "Quy trình testing",
  "XmlDisplay": "string",
  "configObject": {
    "Events": dataApiArrayObject,
    "Gateways":  dataApiArrayGateway,
    "Tasks": dataApiArrayTaskList,
    "FlowSequences": dataApiArrayFlowSequences,
  }
  }

  const onClickSaveApi = async () => {
    try {
      const data = await axios.post('http://localhost:7748/xml',paramsApiCrete,{
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      if(data) {
        // console.log(data)
      }
    } catch (error) {
      // console.log(error)
    }
}
  return (
    <>
      {/* <div className='header'> */}
      <DsLogo style="1" />
      <div className="flex justify-between items-center px-6 py-5 border-b border-[#DBE0E6] ">
        <div className="text-3xl font-bold text-[#2E3A5B]">
          Thêm mới Workflow
        </div>
        <div className="flex items-center">
          <div className="mr-6">
            <input type="file" data-open-file value="" id="input-file--folderbpmn" style={{ display: "none"}}/>
            <DsButton
              className='mr-6'
                color="gray"
                label="Import file"
                onClick={() => document.getElementById("input-file--folderbpmn").click()}
                prefixIcon={<DsIcon name='icon-bx-import' className="mr-2"/>}
                type="light"
              />
          </div>
          <div className="mr-6">
            <a
              id="js-download-diagram"
              href
              style={{display: "none"}}
            >
            </a>
            <DsButton
              className='mr-6'
                color="gray"
                label="Export"
                onClick={() => document.getElementById("js-download-diagram").click()}
                prefixIcon={<DsIcon name='icon-bx-export' className="mr-2"/>}
                type="light"
              />
          </div>
          <DsButton
            className="mr-6"
            color="red"
            label="Hủy"
            onClick={function noRefCheck() {}}
            prefixIcon={<DsIcon name="icon-bx-x-circle" />}
            type="light"
          />
          <p
            id="view-api--xml"
            href
            style={{display: "none"}}
          >
          </p>
          <DsButton
            className=''
            // id="view-api--xml"
            color="red"
            label="Lưu"
            shape="rounded"
            // onClick={() => document.getElementById("view-api--xml").click()}
            onClick={() => onClickSaveApi()}
            prefixIcon={<DsIcon name='icon-bx-save' />}
            type="solid"
          />
        </div>
      </div>
      <div className="flex justify-start items-center px-6 py-3 border-b border-[#DBE0E6] ">
        <div className="border-r flex border-[#DBE0E6] h-12 justify-center items-center">
          <div className="mr-6">Môi trường: <span>Dev</span></div>
          <div className="mr-6">Ver: <span>1.0</span></div>
        </div>
        <div className="border-r flex border-[#DBE0E6] h-12 justify-center items-center">
          <p
            id="properties-undo"
            // href
            style={{display: "none"}}
          >
          </p>
          <DsButton
            className='mx-6 !bg-white flex'
            color=""
            label=""
            shape="rounded"
            onClick={() => document.getElementById("properties-undo").click()}
            prefixIcon={<DsIcon name='icon-bx-undo' className="text-[#2E3A5B]"/>}
            type="light"
            size="small"
          />
          <p
            id="properties-rendo"
            // href
            style={{display: "none"}}
          >
          </p>
          <DsButton
            className='mx-6 !bg-white'
            color=""
            label=""
            onClick={() => document.getElementById("properties-rendo").click()}
            prefixIcon={<DsIcon name='icon-bx-redo' className="text-[#2E3A5B]"/>}
            type="light"
          />
        </div>
        <div className="border-r flex border-[#DBE0E6] h-12 justify-center items-center">
          <div>
          <p
            id="zoom-bpmn--left"
            href
            style={{display: "none"}}
          >
          </p>
          <DsButton
            className='mx-6 !bg-white'
            color=""
            label=""
            onClick={() => {
              document.getElementById("zoom-bpmn--left").click()
              setNumberUndoRedo(-25 + numberUndoRedo)
            }}
            prefixIcon={<DsIcon name='icon-bx-zoom-out' className="text-[#2E3A5B]"/>}
            type="light"
          />
          </div>
          <span>{numberUndoRedo}%</span>
          <div>
          <p
            id="zoom-bpmn--right"
            href
            style={{display: "none"}}
          >
          </p>
          <DsButton
            className='mx-6 !bg-white'
            color=""
            label=""
            onClick={() => {
              document.getElementById("zoom-bpmn--right").click()
              setNumberUndoRedo(25 + numberUndoRedo)
            }}
            prefixIcon={<DsIcon name='icon-bx-zoom-in' className="text-[#2E3A5B]"/>}
            type="light"
          />
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="content" id="js-drop-zone">
        <div id="other-properties"></div>
        <div className="canvas" id="js-canvas"></div>
        <div id="js-properties-panel"></div>
        <div id="modeler-container"></div>
        <div id="properties-container"></div>
        <div id="properties-other" style={{height: "270px"}}></div>
      </div>
      {/* <BaseViewer /> */}
    </>
  );
}

const diagramViewer = () => {
  return <VideoPlayer />;
};

export default diagramViewer;
