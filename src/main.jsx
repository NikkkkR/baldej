import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import ParentComponent from './parentComponent'



createRoot(document.getElementById('root')).render(
     <ParentComponent />
)
