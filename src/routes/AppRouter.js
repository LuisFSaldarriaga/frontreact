// import react from 'react';
// import Login from '../components/Login';
// import { NavbarUI } from '../components/NavbarUI';
// import { RegisterCliente } from '../components/RegisterCliente';
// import { RegisterHacedor } from '../components/RegisterHacedor';
// import { RequestServicio } from '../components/RequestServicio';
// import { ConsultHacedor } from '../components/ConsultHacedor';
// import { ConsultServicio } from '../components/ConsultServicio';
// import { DetailsServicio } from '../components/DetailsServicio';
// import { Unauthorized } from '../components/Unauthorized';
// import { Missing } from '../components/Missing';
// import Layout from './Layout';

// import { Routes, Route } from 'react-router-dom';



// function AppRouter() {

//     return (
//         <Routes>
//             <Route path='/' element={<Layout />}>
//                 {/* Rutas publicas */}
//                 <Route path='/index' element={<Login />} />
//                 <Route path='/login' element={<Login />} />
//                 <Route path='/registrar_cliente' element={<RegisterCliente />} />
//                 <Route path='/registrar_hacedor' element={<RegisterHacedor />} />
//                 <Route path='/unauth' element={<Unauthorized />} />


//                 {/* Rutas protegidas */}
//                 {/* Rutas cliente */}
                
//                 <Route path='/consultar_hacedor' element={<ConsultHacedor />} />
//                 <Route path='/solicitar_servicio' element={<RequestServicio />} />
//                 {/* Rutas hacedor */}
//                 <Route path='/consultar_servicio' element={<ConsultServicio />} />
//                 <Route path='/detalles_servicio' element={<DetailsServicio />} />
                

//                 {/* Nopage */}
//                 <Route path='*' element={<Missing />} />
//             </Route>
//         </Routes>
//     )
// }

// export default AppRouter;