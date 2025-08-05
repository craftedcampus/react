import React from 'react';

const Try = () => {
  const containerStyle = {
    maxWidth: '400px',
    margin: '80px auto',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    color: '#34dbeb',
  };

  const nameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const designationStyle = {
    fontSize: '16px',
    color: '#eb346e',
  };

  return (
    <div style={containerStyle}>
      <div style={nameStyle}>Mohammad Nouman</div>
      <div style={designationStyle}>Full Stack Developer</div>
    </div>
  );
};

export default Try;

// import React, { useState } from 'react';

// const TodoApp = () => {
//   const [task, setTask] = useState('');
//   const [todos, setTodos] = useState([]);

//   const addTask = () => {
//     if (task.trim()) {
//       setTodos([...todos, task]);
//       setTask('');
//     }
//   };

//   const removeTask = (index) => {
//     const newTodos = todos.filter((_, i) => i !== index);
//     setTodos(newTodos);
//   };

//   return (
//     <div>
//       <input value={task} onChange={(e) => setTask(e.target.value)} />
//       <button onClick={addTask}>Add</button>
//       <ul>
//         {todos.map((item, i) => (
//           <li key={i}>
//             {item} <button onClick={() => removeTask(i)}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;













// import React, {useState,useEffect} from 'react';
// const Try = () => {
//   const [time, setTime]=useState(new Date().toLocaleTimeString());
//   useEffect(()=>{
//     const interval=setInterval(()=>{
//       setTime(new Date().toLocaleTimeString());
//     },1000);
//     return()=> clearInterval(interval);
//   },[]);
//   return(
//      <><h1>{time}</h1></>
//   );
// };
// export default Try;




































// import React, {useState, useEffect} from 'react';
// const Try = ()=>{
//   const [text,setText]=useState('');
//   return(
//     <div>
//       <>
//     <input type='text' onChange={(e)=>setText(e.target.value)} placeholder='Type Something ... '/>
//     </>
//     <p>Characters: {text.length}</p>
//     </div>
//   );
// };
// export default Try;
























// import React, {useState, useEffect} from 'react';

// const Try = () => {
//     const [show,setShow]=useState(true);
    
//   return (
//     <div>
//       <button onClick={()=>setShow(!show)}>
//         {show?'Hide':'show'} Text
//       </button>
//       {show && <p>This is some text you can toggle</p>}
//     </div>
//   );
// };

// export default Try;












































// import React, {useState, useEffect} from 'react';

// const Try = () => {
//     const [count,setCount]=useState(0);
//     useEffect(()=>{
//         document.title=`Count: ${count}`;
//     },[count]);
//   return (
//     <div>
//       <h1>Hello from Crafted Campus Project No.:{count}</h1>
//       <button onClick={()=>setCount(count+1)}>ADD</button>
//       <button onClick={()=>setCount(count-1)}>SUB</button>
//       <button onClick={()=>setCount(0)}>RESET</button>
//     </div>
//   );
// };

// export default Try;

