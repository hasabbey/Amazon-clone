import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {initialState, reducer} from '../src/Utility/Reducer.jsx'
import {DataProvider} from '../src/Components/DataProvider/DataProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>

    <App />

    </DataProvider>
     
   
  </React.StrictMode>,
)
