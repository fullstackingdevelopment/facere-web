import { useState } from "react";
import Card from './Card';

function List({id='NOID', title='NOTITLE', tasks, taskFunc, delFunc, titleFunc, descFunc}) {
  const [visibleMenu, setVisibleMenu] = useState(false);

  function showMenu() {
    setVisibleMenu(!visibleMenu);
  };
  return(
    <>
      {
        !visibleMenu ? null : (
          <div>
            <input placeholder='TASKTITLE' 
            onChange={event => titleFunc(event.target.value)}></input>
            <input placeholder='TASKDESC' onChange={event => descFunc(event.target.value)}></input>
            <button onClick={() => taskFunc(id)}>CONFIRM</button>
          </div>
        )
      }
      <div>
        <p>{title}</p>
        <button onClick={() => showMenu()}>showMenu</button>
        <button onClick={() => delFunc(id)}>deleteFunc</button>
      </div>
      <div>
        {
          tasks.map((task, index) => {
            return(
              <Card key={index} title={task[0]} desc={task[1]}/>
            )
          })
        }
      </div>
    </>
  )
}

export default List;