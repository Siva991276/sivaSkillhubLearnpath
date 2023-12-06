
import { Route, Routes } from 'react-router-dom';
import './App.css';


import Designation1 from './task';
import Fillter from './fillter';
import Movie from './filltertask';
import Jobs from './browsejobs';
import Weather from './climate';

import Fillterjob from './fillterjob';
import Dummyfillter from './dummyfillter';
import Asses from './assesment';
import Chapter from './chapter';
import Parag1 from './parag';
import Single1 from './firstquestion';
import Multipule from './secondquestion';
import Third from './thitdquestion';
import Fourthquestion from './fourthquestion';
import Option1 from './fifth';
import Writing from './sixth';
import Sixth from './seventh';
import View from './view';
import Exist from './paragview';
import Coding from './coding';
import Codingview from './codingview';










function App() {
  return (
    <div className="App">
      <Routes>
      
        <Route exact path='/task' element={<Designation1 />} />
        <Route exact path='/fillter' element={<Fillter />} />
        <Route exact path='/filltertask' element={<Movie />} />
        <Route exact path='/browsejobs' element={<Jobs />} />
        <Route exact path='/climate' element={<Weather />} />
        <Route exact path='/dummy' element={<Dummyfillter />} />
       <Route exact path='/cricket' element={<Fillterjob />} />
       <Route exact path='/assesment' element={<Asses />} />
       <Route exact path='/chapter' element={<Chapter />} />
       <Route exact path='/parag' element={<Parag1/>} />
       <Route exact path='/firstquestion' element={<Single1/>} />
       <Route exact path='/secondquestion' element={<Multipule/>} />
       <Route exact path='/thitdquestion' element={<Third/>} />
       <Route exact path='/fourthquestion' element={<Fourthquestion/>} />
       <Route exact path='/fifth' element={<Option1/>} />
       <Route exact path='/sixth' element={<Writing/>} />
       <Route exact path='/seventh' element={<Sixth/>} />
        <Route exact path='/view' element={<View/>} />
        <Route exact path='/paragview' element={<Exist/>} />
        <Route exact path='/coding' element={<Coding/>} />
        <Route exact path='/codingview' element={<Codingview/>} />
       
       
      



        
      </Routes>


    </div>
  )
}

export default App;
