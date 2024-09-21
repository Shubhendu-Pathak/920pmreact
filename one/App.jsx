import React from 'react';
import ReactDOM from 'react-dom/client'

let a = React.createElement('h1',{},'HEADING')

let b = () => {
    return <img src=""/>

}

let c = <div>
    {a}
    { b() }
</div>

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(c)