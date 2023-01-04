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
    const newLists = {...lists};
    // Pushing the new task into the 'lists' state
    newLists[index].tasks.push([taskTitle, taskDesc]);
    setLists(newLists);
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
        // Rendering the lists
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