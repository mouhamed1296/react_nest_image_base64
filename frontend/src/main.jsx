import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App';
import Form from '../components/Form';
import Tab from '../components/Tab';

/* Routeur pour la navigation entre les différents interfaces */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Form />} />
      <Route path='/tableau' element={<Tab />} />
      <Route path="*" element={<div>Not found</div>} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
