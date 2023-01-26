import { useState } from "react";
import List from "./List";
import './styling/Article.css';

function Article() {
  const [lists, setLists] = useState({});
  const [listTitle, setListTitle] = useState('');

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');

  function addList() {
    const newLists = {};
    // Checking if the input is either whitespace or blank
    if (/\s+$/.test(listTitle) || listTitle ==='') {
      alert('Remove any excess whitespace from the LISTINPUT')
      return;
    };
    // Creating a new 'lists' state from scratch, if there's no current 'lists' state
    if (!Object.keys(lists).length) {
      newLists['0'] = {
        title: listTitle,
        tasks: [],
      };
      setLists(newLists);
    // If there is a current 'lists' state, we merely add new lists into it
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

  function deleteList(index) {
    const newLists = {};
    let newIndex = 0;
    lists[index] = null;
    // Creating a new 'lists' object from non-null values
    for (const [key, value] of Object.entries(lists)) {
      if (value) {
        newLists[newIndex] = {
          title: value.title,
          tasks: value.tasks,
        };
        newIndex++;
      };
      setLists(newLists);
    };
  };

  function addTask(index) {
    const newLists = {...lists};
    // Pushing the new task into the 'lists' state
    newLists[index].tasks.push([taskTitle, taskDesc]);
    setLists(newLists);
  };

    function delTask(listId, taskId) {
    const newLists = {...lists};
    const tasks = [...lists[listId].tasks];
    const tasksValues = Object.values(tasks);
    let newList = [];
    let index = 0;
    tasks[taskId] = [null, null];
    for (const task of tasks) {
      if (task[0]) {
        newList.push(task);
        index++
      };
    };
    newLists[listId].tasks = newList;
    setLists(newLists);
    alert('updated');
  };
  
  return (
    <>
      <div className='Article'>
        <input placeholder='ADDLIST'
        onChange={event => setListTitle(event.target.value)}></input>
        <button onClick={() => addList()}>ADDTOLISTS</button>
        { 
        // Rendering the lists
          Object.entries(lists).map(([index, list]) => {
            if (Object.keys(lists).length) {
              if (list) {
                return (
                  <List key={index} id={index} title={list.title}
                  tasks={list.tasks} taskFunc={addTask} delFunc={deleteList}
                  titleFunc={setTaskTitle} descFunc={setTaskDesc} 
                  delTask={delTask}/>
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