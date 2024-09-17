// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store.js'
import bg1 from './assets/17580.jpg'

createRoot(document.getElementById('root')).render(

    <Provider store={store}>,

    <App/>

    </Provider>
  
)
