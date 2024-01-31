import { useState } from "react";
import "./App.css";
import Sidenav from "./Pages/Sidenav";
import Forms from "./Pages/Form";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className='w-screen h-screen bg-gray-200 flex items-center justify-center'>
        <div className='bg-white p-0 md:p-3 lg:p-3 flex rounded-xl flex-col md:flex-row lg:felx-row h-[100%] w-[100%] md:h-[70%] md:w-[60%] lg:h-[70%] lg:w-[60%]'>
          <Sidenav />
          <Forms />
          
        </div>
      </main>
    </>
  );
}

export default App;
