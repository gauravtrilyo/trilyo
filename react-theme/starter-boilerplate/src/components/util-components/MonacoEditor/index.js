
import Editor from '@monaco-editor/react'
import React,{useEffect, useState} from "react"
import axios from 'axios';

function MonacoEditor() {
  const [items, setItems] = useState([]);
  
  useEffect(()=>{
    const fetchItems= async()=>{
      const API_URL = 'https://jsonplaceholder.typicode.com/todos';
      const requestData  =  await axios.get(API_URL);
      setItems(requestData.data)
    }
    fetchItems();
  }, [])
  
  console.log(items);

  return (
    <div className="">
        <h1 style={{alignItems:'self-start'}}>Monaco Editor</h1>
        <div className="editor" >
        <Editor 
            
            height="80vh"
            width="70vw"
            defaultLanguage = "javascript"
            // defaultValue={items}
            defaultValue={items.reduce((acc, item) => acc.concat(item.title).concat("\n"), "")}
        />
        </div>
    </div>
  );
}

export default MonacoEditor;