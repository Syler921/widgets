import React, { useState, useEffect } from "react";
import axios from 'axios'
import Dropdown from './Dropdown'
import Convert from './Convert'

//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const options = [
    {
        label:'Afrikaans',
        value:'af'
    },{
        label:'Arabic',
        value:'ar'
    },{
        label:'Hindi',
        value:'hi'
    },{
        label:'English',
        value:'en'
    }
]
const Translate = () => {
    const [language,setLanguage] = useState(options[0])
    const [text,setText] = useState('')

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text </label> 
                    <input
                        value={text}
                        onChange={(e)=>{setText(e.target.value)}}
                    />
                </div>
            </div>
           
            <Dropdown 
                selected={language} 
                label="Select language"
                onSelectedChange={setLanguage} 
                options={options}
            />
            <hr></hr>
            <h3 className="ui header">Output</h3>
            <Convert
                text={text}
                language={language}    
            />
        </div>
    )
}
export default Translate