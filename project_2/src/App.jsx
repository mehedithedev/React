import react from 'react'
import List from './list'

function App(){
    return (
        <div>
            <h1>This is a h1 element inside React App</h1>
            <p>This one is rendered from a seperate jsx file.</p>

            <h2>Here goes a list:</h2>
            <List/>
        </div>
    )
} 

export default App;