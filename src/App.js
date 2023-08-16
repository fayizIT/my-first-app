
// import './App.css'
// // import Header from './components/Header';
// import { useState } from 'react';
// import Counter from './components/Counter';

// function App(){
//   const [count,setCounter] =useState(0)
 
//  function addCount(){
//   setCounter(count+1)
    
//     console.log(count);
//   }

//   let obj = {
//     title:'1st Counter',
//     count
//   }

//   return (
//     <div className='App'>
//       <button onClick={addCount}>Click me</button>
//       <Counter {...obj}/>
//       <Counter title ='2nd Counter' count ={count}/>
//     </div>
//   );
  
// }


import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Counter from './components/Counter';
import Check from './components/Check';

function App() {
 
  const initialBackgroundColor = 'white'; // Initial background color
  const sampledata = 'Full Stack developer';
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(initialBackgroundColor);


  const [state,setState] =useState(false);

  

  const addCount = () => {
    setCount(count + 1);

    // Update the background color based on count
    if (count % 2 ===0) {
      setBackgroundColor('white');
    } else {
      setBackgroundColor('red');
    }
  };
  let obj ={
    title:"1st Counter",
    count
  }
  let obj2 ={
    title:"2nd Counter",
    count

  }



  return (
    <div className='App'>
      <button onClick={()=> setState(!state)}>checkinggggggggg</button>
   

<br/>
<br/>
      <button  onClick={addCount}>click me</button>
      <div style={{ backgroundColor: backgroundColor }}>{sampledata}</div>
      <Counter {...obj} />
      <Counter {...obj2}/>
      <Header   data={sampledata} />
      {state ?<Check/>:null}
    </div>
  );
}

export default App;






