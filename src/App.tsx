import React, {useEffect, useState} from 'react';
import './App.css';
import getData from "./components/utils/getData";
import MainPage from "./components/MainPage";
import {Routes, Route} from 'react-router-dom';
import DetailPage from "./components/details/DetailPage";

const apiData = getData("https://api.spaceflightnewsapi.net/v3/articles");

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
                      <Route path="/testTaskCodeBridge" element={ <MainPage dataLoad = {dataLoad} parentCallback={dataHandler}/>}/>
                      <Route path="/detail" element={ <DetailPage />}/>
                  </Routes>
              </div>
      );
}

export default App;
