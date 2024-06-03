import PropTypes from 'prop-types';
const Popup = ({popUp,newTask,setNewTask,handlePopup,addTask}) => {
  return (
    //   {/* popup ใช้&& short-circuit evaluation เมื่อเงื่อนไขตรงกับที่ต้องการ popup จะทำงาน */}
    popUp && (
      <div className="popup fixed inset-0 bg-gray-700 bg-opacity-65 flex justify-center items-center">
        <div className="justify-center items-center m-52 bg-white rounded-md px-4">
          <p className=" text-center font-mono text-2xl p-3">
            {" "}
            Let&apos;s add your tasks
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
    )
  )
}

Popup.propTypes = {
    popUp: PropTypes.bool.isRequired,
    newTask: PropTypes.string.isRequired,
    setNewTask: PropTypes.func.isRequired,
    handlePopup: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
  };
  
export default Popup