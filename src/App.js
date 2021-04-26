import React,{useState} from "react";
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'

import Header from './components/Header'
import Route from './components/Route'

const items = [
    {
        title: 'what is react ',
        content: 'test'
    }, {
        title: 'what is react 2',
        content: 'test2'
    },
    {
        title: 'what is react 3',
        content: 'test 3'
    }
]

const options = [
    {
        label:'Blue color',
        value:'bluge'
    },
    {
        label:'Red color',
        value:'red'
    },{
        label:'Green color',
        value:'green'
    }
]

export default () => {
    const [selected,setSelected] = useState(options[0])
  
    return <div>
        <Header/>
        <Route path="/">
            <Accordion items={items}/>
        </Route> 
        <Route path="/list">
            <Search/>
        </Route>
        <Route path="/dropdown">
            <Dropdown
                label="select color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </Route>
        <Route path="/translate">
            <Translate/>
        </Route>
        
    </div>
}