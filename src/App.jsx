import { useEffect, useState } from "react";
// import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
// import { TbPencilPlus } from "react-icons/tb";
// import { LuTrash2 } from "react-icons/lu";
import { v4 as uuid } from "uuid";
import Popup from "./Popup";
import Header from "./Header";
import ToDoList from "./ToDoList";
/* ทำdemo เพื่อtest state todolist  */
// const deMoToDoList = [
//   {
//     // id: "1", ใช้เป็นuuid เพื่อgen id auto แทน
//     id: uuid(),
//     text: "test1",
//     complete: false,
//   },
//   {
//     // id: "2",
//     id: uuid(),
//     text: "test2",
//     complete: false,
//   },
// ];
// console.log(deMoToDoList);

function App() {
  // const [toDoList, setToDoList] =
  //   useState(
  //     deMoToDoList
  //   ); /* test usestate โดยใช้ข้อมูล deMoToDoList จะได้ข้อมูล2แถว*/

  const [toDoList, setToDoList] = useState(() => {
    const storedList = localStorage.getItem("toDoList");
    return storedList ? JSON.parse(storedList) : [];
  });

  const [popUp, setPopUp] = useState(false); /* popup ช่องกรอกข้อมูล */
  const [newTask, setNewTask] = useState(""); /* กรอกข้อมูลในช่องpopup */

  // เทสsetpopup ก่อนใส่เงื่อนไข
  // function handlePopup(){
  //   setPopUp(true)
  // }

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(toDoList));
  }, [toDoList]);

  function handlePopup(action) {
    /* ใส่เงื่อนไขให้popup สามารถใช้คำอื่นแทนactionได้ เช่น status*/
    if (action === "open") {
      setPopUp(true);
    } else {
      setPopUp(false);
      setNewTask(""); /* ล้างค่าที่กรอกค้างไว้ ตอนกรอกข้อมูลแล้วกดback */
    }
  }

  function addTask() {
    if (newTask !== "") {
      /* ถ้ามีข้อความ หรือข้อมูลใส่ลงไปจะทำการsetToDoListต่อ */
      setToDoList((current) => {
        /* จะทำการupdate todolist */
        return [
          /* ส่งค่าใหม่เข้ารายการ */ ...current,
          {
            id: uuid(),
            text: newTask,
            complete: false,
          },
        ];
      });
      setNewTask(
        ""
      ); /* เคลียร์ข้อมูลที่ทำรายการเสร็จแล้ว เพื่อรอรับข้อมูลใหม่ */
      setPopUp(false); /* หลังจากเพิ่มaddtaskใหม่แล้ว ให้ทำการปิดpopup */
    }
  }

  function toggleComplete(id) {
    /*  รับparameter id ที่ต้องการเปลี่ยนสถานะ */
    setToDoList((current) => {
      /* ใช้setToDoList ในการupdate state todolist และเข้าถึงค่าปัจจุบันของtodolsit*/
      return current.map((item) => {
        /* ตรวจสอบID ว่าตรงไหม ถ้าตรงให้เปลี่ยนแปลงค่า complete และคืนค่าใหม่ให้ todolist */
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete /* เปลี่ยนค่าcomplete เดิม  */,
          };
        }
        return item;
      });
    });
  }

  function delTask(id) {
    setToDoList((current) => {
      return current.filter(
        (item) => item.id !== id
      ); /*กรองid ที่ไม่ตรงกับที่อยากลบออก */
    });
  }

  return (
    <div className=" mx-10 h-svh max-w-[1600px]">
      <Popup
        popUp={popUp}
        handlePopup={handlePopup}
        addTask={addTask}
        newTask={newTask}
        setNewTask={setNewTask}
      />

      <Header handlePopup={handlePopup} />
      <ToDoList
        toDoList={toDoList}
        toggleComplete={toggleComplete}
        delTask={delTask}
      />

      {/* ย้าย Popup ไปอีกไฟล์เพื่อให้ดูง่ายๆ และดึงprops มาใช้แทน */}
      {/* ในหน้านี้ดีง prop มาใช้แทน */}
      {/* <Popup
      popUp={popUp}
      handlePopup={handlePopup}
      addTask={addTask}
      newTask={newTask}
      setNewTask={setNewTask}
      /> */}

      {/* popup ใช้&& short-circuit evaluation เมื่อเงื่อนไขตรงกับที่ต้องการ popup จะทำงาน */}
      {/* {popUp && (
        <div className="popup fixed inset-0 bg-gray-700 bg-opacity-65 flex justify-center items-center">
          <div className="justify-center items-center m-52 bg-white rounded-md px-4">
            <p className=" text-center font-mono text-2xl p-3">
              {" "}
              Let's add your tasks
            </p>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className=" border border-black p-32"
            />
            <div className="flex justify-center items-center ">
              <button
                className=" bg-red-500 px-10 py-2 m-5  text-lg rounded-md font-mono"
                onClick={() => handlePopup("close")}
              >
                {" "}
                Back
              </button>
              <button
                className=" bg-green-500 px-10 py-2 m-5 text-lg rounded-md font-mono"
                onClick={addTask}
                // onClick={()=>addTask()}
              >
                {" "}
                Add{" "}
              </button>
            </div>
          </div>
        </div>
      )} */}

      {/* <div> */}
        {/* ย้ายไป Header.jsx */}
        {/* ในหน้านี้ดึง props มาใช้แทน<Header handlePopup={handlePopup}/> */}
        {/* <div className="header flex justify-between items-center border-black border-b-2 py-2 m-2 ">
          <p className=" text-xl font-mono mx-3 text-center ml-3">My Tasks</p>
          <div
            className=" rounded-sm mr-3 bg-cyan-700"
            onClick={() => handlePopup("open")}
          >
            {" "}
            {/* setpopup เป็นtrue เมื่อกดicon ให้ตรงเงื่อนไข */}
        {/* <p>
              <TbPencilPlus size={20} />
            </p> */}
        {/* </div> */}
        {/* </div> */}

        {/* ย้ายไปหน้า ToDoList.jsx */}
        {/* <div className="container flex flex-col"> */}
        {/* useState:ใช้map toDoList เพื่อเข้าถึงข้อมูลแต่ละตัว */}
        {/* {toDoList.map((listItem) => {
            return [
              <div
                className=" flex items-center justify-between  bg-blue-300 m-2 p-4 rounded-lg"
                key={listItem.id}
              >
                <div className="flex items-center">
                  <p
                    className="checkbox "
                    onClick={() => toggleComplete(listItem.id)}
                  >
                    {listItem.complete ? (
                      <MdOutlineCheckBox size={30} className=" text-black" />
                    ) : (
                      <MdCheckBoxOutlineBlank
                        size={30}
                        className=" text-white"
                      />
                    )}
                  </p>
                  <p className="text ml-3 ">{listItem.text} </p>{" "} */}
        {/* เข้าถึงข้อมูล text ใน deMoToDoList */}
        {/* </div>
                <p className="delbox " onClick={() => delTask(listItem.id)}>
                  <LuTrash2 size={20} className=" text-white" />
                </p>
              </div>,
            ];
          })} */}

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
      {/* </div> */}
    </div>
    // </div>
  );
}

export default App;
