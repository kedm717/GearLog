import React , {useState} from 'react';
import { useHistory } from "react-router";

export default function WritePage(){
    const history = useHistory();
    const [inputs, setInputs] =useState({
        title : '',
        content : '',
        image : null,
    })

      const handleSubmit = () => {

      }

      const handleChange = () => {

      }


    return (
        <div className = "wp_content">
            <input 
            name="title"
            onChange = {handleChange}
            >
            </input>
            <textarea
            name = "content"
            onChange = {handleChange}>
            </textarea>
        </div>
    );
}
