import { useState } from "react";

function List({id='NOID', title='NOTITLE', tasks, taskFunc, delFunc, titleFunc, descFunc}) {
  const [visibleMenu, setVisibleMenu] = useState(false);

  function showMenu() {
    setVisibleMenu(!visibleMenu);
  };
  return(
    <>
      {
        !visibleMenu ? null : (
          <p>test</p>
        )
      }
      <div className='List'>
        <p>{title}</p>
        <button onClick='showMenu()'>showMenu</button>
        <button onClick='delFunc()'>deleteFunc</button>
        
      </div>
    </>
  )
}

export default List;