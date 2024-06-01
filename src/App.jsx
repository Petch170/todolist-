import { useState } from "react";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { TbPencilPlus } from "react-icons/tb";
import { LuTrash2 } from "react-icons/lu";
import { v4 as uuid } from "uuid";

/* ทำdemo เพื่อtest state todolist  */
const deMoToDoList = [
  {
    // id: "1", ใช้เป็นuuid เพื่อgen id auto แทน
    id: uuid(),
    text: "test1",
    complete: false,
  },
  {
    // id: "2",
    id: uuid(),
    text: "test2",
    complete: false,
  },
];
console.log(deMoToDoList);

function App() {
  // const [toDoList, setToDoList] = useState([]);
  const [toDoList, setToDoList] =
    useState(
      deMoToDoList
    ); /* test usestate โดยใช้ข้อมูล deMoToDoList จะได้ข้อมูล2แถว*/
  const [popUp, setPopUp] = useState(false); /* popup ช่องกรอกข้อมูล */

  return (
    <div>
      {/* popup ใช้&& short-circuit evaluation เมื่อเงื่อนไขตรงกับที่ต้องการ popup จะทำงาน */}
      {popUp && (
        <div className="popup fixed inset-0 bg-gray-700 bg-opacity-65 flex justify-center items-center">
          <div className="justify-center items-center m-52 bg-white rounded-md px-4">
            <p className=" text-center font-mono text-2xl p-3">
              {" "}
              Let's add your tasks
            </p>
            <input type="text" value="" className=" border border-black p-32" />
            <div className="flex justify-center items-center ">
              <button className=" bg-red-500 px-10 py-2 m-5  text-lg rounded-md font-mono">
                {" "}
                Back
              </button>
              <button className=" bg-green-500 px-10 py-2 m-5 text-lg rounded-md font-mono">
                {" "}
                Add{" "}
              </button>
            </div>
          </div>
        </div>
      )}

      <h1 className=" text-blue-900 font-mono text-2xl justify-center items-center flex">
        Hello World
      </h1>
      <div>
        <div className="header flex justify-between items-center border-black border-b-2 py-2 m-2 ">
          <p className=" text-xl font-mono mx-3 text-center ml-3">My Tasks</p>
          <div className=" rounded-sm mr-3 bg-cyan-700">
            <p>
              <TbPencilPlus size={20} />
            </p>
          </div>
        </div>
        <div className="container flex flex-col">
          {/* useState:ใช้map toDoList เพื่อเข้าถึงข้อมูลแต่ละตัว */}
          {toDoList.map((listItem) => {
            return [
              <div
                className=" flex items-center justify-between  bg-blue-300 m-2 p-4 rounded-lg"
                key={listItem.id}
              >
                <div className="flex items-center">
                  <p className="checkbox  ">
                    <MdCheckBoxOutlineBlank size={30} className=" text-white" />
                  </p>
                  <p className="text ml-3 ">{listItem.text} </p>{" "}
                  {/* เข้าถึงข้อมูล text ใน deMoToDoList */}
                </div>
                <p className="delbox ">
                  <LuTrash2 size={20} className=" text-white" />
                </p>
              </div>,
            ];
          })}
          {/* เอาข้อมูลด้านล่างชุดเดียวไปmap  */}
          {/* <div className=" flex items-center justify-between  bg-blue-300 m-2 p-4 rounded-lg">
            <div className="flex items-center">
              <p className="checkbox  ">
                <MdCheckBoxOutlineBlank size={30} className=" text-white" />
              </p>
              <p className="text ml-3 ">lorexvxcv </p>
            </div>
            <p className="delbox ">
              <LuTrash2 size={20} className=" text-white" />
            </p>
          </div> */}
          {/* <div className=" flex items-center justify-between  bg-blue-300 m-2 p-4 rounded-lg">
            <div className="flex items-center">
              <p className="checkbox  ">
                <MdCheckBoxOutlineBlank size={30} className=" text-white" />
              </p>
              <p className="text ml-3 ">lorexvxcv </p>
            </div>
            <p className="delbox ">
              <LuTrash2 size={20} className=" text-white" />
            </p>
          </div>
          <div className=" flex items-center justify-between  bg-blue-300 m-2 p-4 rounded-lg">
            <div className="flex items-center">
              <p className="checkbox  ">
                <MdCheckBoxOutlineBlank size={30} className=" text-white" />
              </p>
              <p className="text ml-3 ">lorexvxcv </p>
            </div>
            <p className="delbox ">
              <LuTrash2 size={20} className=" text-white" />
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
