import { useState } from "react";
import Card from './Card';
import './styling/List.css';

/*
"tasks" is the object used to store the tasks
"taskFunc" is the function responsible for adding new tasks
"delFunc" is the function responsible for deleting the "list" state
"titleFunc" is the function responsible for modifying the "listTitle"/"title" state
"descFunc" is the function responsible for modifying the "taskDesc" state
*/

function List({id='NOID', title='NOTITLE', tasks, taskFunc, delFunc, titleFunc, descFunc,
delTask}) {
  const [visibleMenu, setVisibleMenu] = useState(false);

  function showMenu() {
    setVisibleMenu(!visibleMenu);
  };

  return(
    <>
      <div className='List'>
        {
        // Task creation menu
          !visibleMenu ? null : (
            <div>
              <input placeholder='TASKTITLE' 
              onChange={event => titleFunc(event.target.value)}></input>
              <input placeholder='TASKDESC' onChange={event => descFunc(event.target.value)}></input>
              <button onClick={() => taskFunc(id)}>CONFIRM</button>
            </div>
          )
        }
        <div className='List-header'>
          <p>{title}</p>
          <button onClick={() => showMenu()}>showMenu</button>
          <button onClick={() => delFunc(id)}>deleteFunc</button>
        </div>
      <div>
        {
          // Rendering the tasks
          tasks.map((task, index) => {
            return(
              <Card key={index} listId={id} id={index} title={task[0]} desc={task[1]}
              delTask={delTask}/>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default List;