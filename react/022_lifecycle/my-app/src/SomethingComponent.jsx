import React, { useState } from 'react';

function SomethingComponent() {
    const [value, setValue] = useState('');
    function onChange(e) {
        setValue(e.target.value);
    }
    return (
        <>
	        <input type="text" onChange={onChange}/>
	        <div>
		        {value}가 강해졌다 돌격해!
	        </div>
        </>
    )
}

export default SomethingComponent;