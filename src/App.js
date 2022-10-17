import './App.css';
import {Routes, Route} from 'react-router-dom'
import Authorization from './pages/AuthorizationPage';
import VideoServersPage from './pages/VideoServersPage';
import CamerasPage from './pages/CamerasPage';
import CameraPage from './pages/CameraPage';
import { useState } from 'react';

function App() {

  const videoservers = [
    {
      id: 1,
      name: 'Видеосервер 1',
      vid_camera_count: 2,
      available_plugins: ['FR', 'FC', 'LRP', 'Smoking'],
      vid_active_plugins: ['sss', 'ccss', 'dddd'],
      vid_payment_status: Date.now(),
      cameras: [
        {
          id: 1,
          name: 'Задний двор',
          connection_date: Date.now(),
          cam_available_plugins: ['asd', 'asd', 'dd'],
          cam_active_plugins: ['sss', 'ccss', 'dddd'],
          service_packages: "2 месяца",
          cam_payment_status: Date.now()
        },
        {
          id: 2,
          name: 'Вход в магазин',
          connection_date: Date.now(),
          cam_available_plugins: ['asd', 'asd', 'dd'],
          cam_active_plugins: ['sss', 'ccss', 'dddd'],
          service_packages: "2 месяца",
          cam_payment_status: Date.now()
        },
        {
          id: 3,
          name: 'Холодильники',
          connection_date: Date.now(),
          cam_available_plugins: ['asd', 'asd', 'dd'],
          cam_active_plugins: ['sss', 'ccss', 'dddd'],
          service_packages: "2 месяца",
          cam_payment_status: Date.now()
        },
      ],
    },
    {
      id: 2,
      name: 'Видеосервер 1',
      vid_camera_count: 2,
      available_plugins: ['FR', 'FC', 'LRP', 'Smoking'],
      vid_active_plugins: ['sss', 'ccss', 'dddd'],
      cameras: [
        {
          id: 1,
          name: 'Задний двор',
          connection_date: Date.now(),
          cam_available_plugins: ['asd', 'asd', 'dd'],
          cam_active_plugins: ['sss', 'ccss', 'dddd'],
          service_packages: "2 месяца",
          cam_payment_status: Date.now()
        },
        {
          id: 2,
          name: 'Вход в магазин',
          connection_date: Date.now(),
          cam_available_plugins: ['asd', 'asd', 'dd'],
          cam_active_plugins: ['sss', 'ccss', 'dddd'],
          service_packages: "2 месяца",
          cam_payment_status: Date.now()
        },
        {
          id: 3,
          name: 'Холодильники',
          connection_date: Date.now(),
          cam_available_plugins: ['asd', 'asd', 'dd'],
          cam_active_plugins: ['sss', 'ccss', 'dddd'],
          service_packages: "2 месяца",
          cam_payment_status: Date.now()
        },
      ],
      service_packages: "2 месяца",
      vid_payment_status: Date.now()
    },
    {
      id: 3,
      name: 'Видеосервер 1',
      vid_camera_count: 2,
      available_plugins: ['FR', 'FC', 'LRP', 'Smoking'],
      vid_active_plugins: ['sss', 'ccss', 'dddd'],
      service_packages: "2 месяца",
      vid_payment_status: Date.now(),
      cameras: [
        {
          id: 1,
          name: 'Задний двор',
          connection_date: Date.now(),
          cam_available_plugins: ['asd', 'asd', 'dd'],
          cam_active_plugins: ['sss', 'ccss', 'dddd'],
          service_packages: "2 месяца",
          cam_payment_status: Date.now()
        },
        {
          id: 2,
          name: 'Вход в магазин',
          connection_date: Date.now(),
          cam_available_plugins: ['asd', 'asd', 'dd'],
          cam_active_plugins: ['sss', 'ccss', 'dddd'],
          service_packages: "2 месяца",
          cam_payment_status: Date.now()
        },
        {
          id: 3,
          name: 'Холодильники',
          connection_date: Date.now(),
          cam_available_plugins: ['asd', 'asd', 'dd'],
          cam_active_plugins: ['sss', 'ccss', 'dddd'],
          service_packages: "2 месяца",
          cam_payment_status: Date.now()
        },
      ],
    },
  ]


  const service_packages = [
    {
      id: 1, 
      value: '2 месяца'
    },
    {
      id: 2, 
      value: '3 месяца'
    },
    {
      id: 3, 
      value: '6 месяцев'
    },
    {
      id: 4, 
      value: 'год'
    },
  ]

  const [isHaveAccess, setIsHaveAccess] = useState(false)

  return (
    <div className="App">
        <Routes>
          <Route path='/authorization' element={<Authorization/>}/>
          <Route path='/videoservers' element={<VideoServersPage videoservers={videoservers}/>}/>
          <Route path='/cameras' element={<CamerasPage isHaveAccess={isHaveAccess} setIsHaveAccess={setIsHaveAccess} cameras={videoservers[0].cameras} service_packages={service_packages} videoservers={videoservers}/>}/>
          <Route path='/cameras/1' element={<CameraPage videoservers={videoservers} camera={videoservers[0].cameras[0]}/>}/>
        </Routes>
    </div>
  );
}

export default App;
