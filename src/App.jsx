import React from 'react'
import {ScrollTrigger,SplitText} from  'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger,SplitText);
//they are now available globally in youur application

function App() {
  return (
    <div className="text-7xl flex-center h-[100vh]">Hello GSAP!</div>
  )
}

export default App