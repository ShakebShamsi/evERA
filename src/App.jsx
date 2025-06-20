import { useState } from 'react'
import Background from './components/background/background';

const App = () => {
   let heroData = [
      { text1: "Redefine Roads",text2:"With evERA" },
      { text1: "Born to",text2:"Be Electric" },
      { text1: "Feel the",text2:"Electric Rush" }
   ]
   const [heroCount, setHeroCount] = useState(2);
   const [playStatus, setPlayStatus] = useState(false);
   
   return (
      <div>
         <Background playStatus={playStatus} heroCount={heroCount} />        
      </div>
   )
}

export default App
