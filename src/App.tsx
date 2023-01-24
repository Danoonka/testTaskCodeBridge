import React, {useEffect, useState} from 'react';
import './App.css';
import getData from "./components/utils/getData";
import MainPage from "./components/MainPage";
import {Routes, Route} from 'react-router-dom';
import DetailPage from "./components/details/DetailPage";

const apiData = getData("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8e72dab7b1b64a8d85cfe29583de44c6");

function App() {
    const [dataLoad, setDataLoad] = useState(null)
    let data = apiData.read()
    // let dataLoad = apiData;

    const dataHandler=(childData:any)=>{
        setDataLoad(childData)
    }

    useEffect(()=>{
        setDataLoad(data)
    })

      return (
              <div className="App">
                  <Routes>
                      <Route path="/" element={ <MainPage dataLoad = {dataLoad} parentCallback={dataHandler}/>}/>
                      <Route path="/detail" element={ <DetailPage />}/>
                  </Routes>
              </div>
      );
}

export default App;
