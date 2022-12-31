import { useState } from "react";
import List from "./List";

function Article() {
  const [lists, setLists] = useState({});
  const [listTitle, setListTitle] = useState('');

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');

  function addList() {
    const newLists = {};
    // This runs if the lists object IS empty
    if (!Object.keys(lists).length) {
      newLists['0'] = {
        title: listTitle,
        tasks: [],
      };
      setLists(newLists);
    // This runs if the lists object IS NOT empty
    } else {
      let newIndex = 0;
      for (const [key, value] of Object.entries(lists)) {
        newIndex++;
        const index = key;
        newLists[index] = {
          title: value.title,
          tasks: value.tasks,
        };
        if (newIndex === Object.keys(lists).length) {
          newLists[newIndex] = {
            title: listTitle,
            tasks: [],
          };
        };
        setLists(newLists);
      };
    };
  };

  function deleteList(i) {
    const newLists = {};
    let newI = 0;
    lists[i] = null;
    // Creating a new 'lists' object from non-null values
    for (const [key, value] of Object.entries(lists)) {
      if (value) {
        newLists[newI] = {
          title: value.title,
          tasks: value.tasks,
        };
        newI++;
      };
      setLists(newLists);
    };
  };

  function addTask(index) {
    lists[index].tasks.push([taskTitle, taskDesc]);
    setLists(lists);
  };

  /*
  let request = new XMLHttpRequest();
  let test;
  request.open('GET', 'https://gmdevapi.com/api/Mongo')
  request.send();
  request.onload = ()=>{
    const data = JSON.parse(request.response);
    console.log(data)
  }
  */
  
  return (
    <>
      <div className='Article'>
        <input placeholder='ADDLIST'
        onChange={event => setListTitle(event.target.value)}></input>
        <button onClick={() => addList()}>ADDTOLISTS</button>
        {
          Object.entries(lists).map(([index, list]) => {
            if (Object.keys(lists).length) {
              if (list) {
                return (
                  <List key={index} id={index} title={list.title}
                  tasks={list.tasks} taskFunc={addTask} delFunc={deleteList}
                  titleFunc={setTaskTitle} descFunc={setTaskDesc} />
                )
              }
            }
          })
        }
      </div>
    </>
  )
}

export default Article;