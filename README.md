todolist + TailwindCSS



React Concept
1.Hooks : function เชื่อมต่อกับstate (useState,useEffect)
2.states: props,this.state
3.Conditional rendering (เรนเดอร์แบบีเงื่อนไข)
        3.1 if-else,
        3.2 short-circuit evaluation (&&)เมื่อเงื่อนไขตรงตามต้องการ
        3.3 ternary Operator(?,:)
4.working with data : ดึงข้อมูล (useEffect),จัดการข้อมูลผู้ใช้(props),this.state


npm install react-icons
use icon => https://react-icons.github.io/react-icons/

install UUID (สร้างID แบบสุ่ม) =>https://www.npmjs.com/package/uuid
npm install uuid
    Create a UUID (ES6 module syntax)
    import { v4 as uuid } from 'uuid';
ใช้งานแบบนี้   id:uuid(),

setfunction ในการทำงาน 
function handlePopup
-setPopup เป็น open : เมื่อกดicon ดินสอ จะมีpopupเด้ง สำหรับใส่ข้อมูล 
-setpopup เป็น close : เมื่อกดbtn Back เพื่อปิดหน้าpopup  onclick=(()=>handle("close")) เมื่อทำการclick

setFunction addTask setข้อมูลtext ให้เป็นข้อมูลล่าสุดที่ใส่ลงไป
value = {newTask} =>กำหนดค่าให้เป็นnewtask และเมื่อมีการเปลี่ยนแปลง(event)ในvalue ให้setNewTask เป็นค่าปัจจุบันที่กรอกใหม่


function toggleComplete :ใช้กับcheckbox สำหรับเปลี่ยนสถานะการทำงาน โดยใช้id ในการกำหนดรายการนั้นๆ

ใช้ storedlist เพื่อเก็บค่าtodolist ในlocalStorage และใช้ JSON.parse(storedList) เพื่อเปลงข้อมูลstring เป็นobjectหรือarray

เรียกใช้ useEffect เมื่อtoDoList มีการเปลี่ยนแปลง
localStorage.setItem("todolist", JSON.stringify(toDoList)); 
"todolist" : ชื่อ หรือ key ในการเก็บข้อมูล
JSON.stringify :แปลง objectหรือ array เป็นstring โดยจะได้ข้อมูลแบบนี้
ถ้าข้อมูลมาแบบนี้
const toDoList = [
  { id: 1, text: "Task 1", complete: false },
  { id: 2, text: "Task 2", complete: true }
];

หลังจากใช้ JSON.stringify(toDoList) จะได้ข้อมูลดังนี้
'[{"id":1,"text":"Task 1","complete":false},{"id":2,"text":"Task 2","complete":true}]'


Ex ในการใช้JSON.stringify

1.แปลงobject เป็นstring JSON
const user = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
};

const jsonString = JSON.stringify(user);
console.log(jsonString);
// ผลลัพธ์: '{"id":1,"name":"John Doe","email":"john@example.com"}'



2.แปลง Array เป็นstring JSON
const tasks = [
  { id: 1, text: "Task 1", complete: false },
  { id: 2, text: "Task 2", complete: true }
];

const jsonString = JSON.stringify(tasks);
console.log(jsonString);
// ผลลัพธ์: '[{"id":1,"text":"Task 1","complete":false},{"id":2,"text":"Task 2","complete":true}]'


ทำการแยกหน้า เพื่อเรียนกใช้ component และเมื่อส่งprops ใช้ PropTypes (prop-types) ในแต่ละหน้าด้วย เพื่อให้component ถูกต้องยิ่งขึ้น (ป้องกันการแจ้งเตือนในproblems)
import PropTypes from 'prop-types';
และกำหนด ชื่อprops: PropTypes.ตรงนี้เลือกให้ถูกตามความต้องการ เช่น func, string, bool .isRequired
เช่น
ToDoList.propTypes = {     // ToDoList หมายถึงชื่อหน้า.jsx
    toDoList: PropTypes.arrayOf(    //toDoList คือชื่อprops
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            text:PropTypes.string.isRequired,
            complete:PropTypes.bool.isRequired
        })
    ).isRequired,
    delTask: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
   
}