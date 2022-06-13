import React, { useState } from 'react';

const Parent = () => {
    const [ v, setV ] = useState({
        a: 101,
        b: 'hello',
        c: 'world'
    })
    
    return (
        <div>
        <Child one={v.a} two={v.b} three={v.c} onChange={value => {
            console.log(v)
            return setV({...v, ...value})
        }} />
        {v.id}
        </div>
    )
}

const Child = (props) => { 
    const [input, setInput] = useState();

    const onChange = (event) => {
        console.log(event)

        const {name, value} = event.target
        console.log(name, value)
        // console.log(name)
        // console.log(value)
        // console.log(typeof name)
        // console.log(typeof value)

        setInput({[name]: value}) // [name]은 구조분해할당 아닙니다. 대괄호가 없으면 'name'으로 들어가기 때문에 변수명으로 넣기 위한 코드입니다.
        props.onChange(input)
    }
    return (
        <div>
            <p>{props.one}</p>
            <p>{props.two}</p>
            <p>{props.three}</p>
            <input type="text" name="id" onChange={onChange} />
        </div>
    )
}


function App() {
    return (
        <div>
            <Parent/>
        </div>
    );
}

export default App;