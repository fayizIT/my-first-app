// import React from 'react'

// function Counter(props) {


//     //destructring
//     const  {title,count}= props

    
//   return (
//     <div>
//          <h1>{title}:{count}</h1>
//     </div>
//   )
// }

// export default Counter



import React from "react";
function Counter({title,count}){



  //destructruing
  
  return(
    <div>
      <h1>{title}:{count}</h1>
    </div>
  )
}

export default Counter;