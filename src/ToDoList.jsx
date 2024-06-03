// import React from 'react'
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { LuTrash2 } from "react-icons/lu";
import PropTypes from 'prop-types';

const ToDoList = ({toDoList,toggleComplete,delTask}) => {
  return (
    <div className="flex flex-col">
      {/* useState:ใช้map toDoList เพื่อเข้าถึงข้อมูลแต่ละตัว */}
      {toDoList.map((listItem) => {
        return [
          <div
            className={`flex items-center justify-between my-2 p-4 rounded-lg  ${listItem.complete? 'bg-green-500':'bg-red-300'}`}
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
                  <MdCheckBoxOutlineBlank size={30} className=" text-white "  />
                )}
              </p>
              <p className="text ml-3 ">{listItem.text} </p>{" "}
              {/* เข้าถึงข้อมูล text ใน deMoToDoList */}
            </div>
            <p className="delbox " onClick={() => delTask(listItem.id)}>
              <LuTrash2 size={20} className=" text-red-600" />
            </p>
          </div>,
        ];
      })}
    </div>
  );
};

ToDoList.propTypes = {
    toDoList: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            text:PropTypes.string.isRequired,
            complete:PropTypes.bool.isRequired
        })
    ).isRequired,
    delTask: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
   
}
export default ToDoList;
