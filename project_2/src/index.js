import react from 'react'   
import reactDOM from 'react-dom' 
import App from './App'  

// Here goes the js code:
let currentTime= new Date().getHours()
let greetings=''
let heading_color=''
console.log(currentTime)
if (currentTime<=11) {
    greetings='Morning'
    heading_color='red'
} else if(currentTime>=12 && currentTime<=17){
    greetings='Afternoon'
    heading_color='green'
} else if(currentTime>=18 && currentTime<=24){
    greetings='Evening'
    heading_color='blue'
}
// 1-12=morning
// 12-18=afternoon
// 18-24=evening

reactDOM.render(
<div>
<h1>The react module is working.</h1>
{/* In order to fetch date and time info from the user machine: */}

<h2 style={{color:heading_color}}>Hello user it's {greetings} here. </h2>
<App/>


</div>    
    
    
, document.getElementById('root'))
