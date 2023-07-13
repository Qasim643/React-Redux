import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './Users'

// ============================================================================================================================
                          // Sending data between components using props 
                          // using file is : Users.jsx 
// ============================================================================================================================
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className='app'>
//       <h1>This is the App.jsx file</h1>
//       <Users data={{name:"Qasim", age:21}}/>
//     </div>
//   )
// }

// export default App





// ========================================================================================================
import Homecontainer from './containers/Homecontainer'
function App(){
  return(


    <div>
      <div className='add-to-cart'>
        <img src="https://th.bing.com/th/id/R.c4d8cbb6c4f755d24daa6d7bd9c8f289?rik=m3j4SQWkVuGOOw&pid=ImgRaw&r=0" alt="" />
      </div>
      <h1>Home Component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src="https://th.bing.com/th/id/OIP.WmdWk4lJy3holsHZAtcTEwAAAA?pid=ImgDet&rs=1" alt="" />
        </div>
        <div className='text-wrapper item'>
          <span>
            I-Phone
          </span>
          <br />
          <span>
            Price: $1000.00
          </span>
        </div>
        <div className='btn-wrapper item'>
          <button>Add To Cart</button>
        </div>
      </div>

    </div>
  )


}

export default App;