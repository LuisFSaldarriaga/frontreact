import { ConsultHacedor } from './components/ConsultHacedor';
import { ConsultServicio } from './components/ConsultServicio';
import Home  from './components/Home';
import LinkPage  from './components/LinkPage';
import { Missing } from './components/Missing';
import { RegisterCliente } from './components/RegisterCliente';
import { RegisterHacedor } from './components/RegisterHacedor';
import { RequestServicio } from './components/RequestServicio';
import { Unauthorized } from './components/Unauthorized';
import Layout from './routes/Layout';
import Login  from "./components/Login";
import RequireAuth from './components/RequireAuth';

import { Routes, Route } from 'react-router-dom';

function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="login" element={<Login />} />
                <Route path="register_hacedor" element={<RegisterHacedor />} />
                <Route path="register_cliente" element={<RegisterCliente />} />
                <Route path="index" element={<LinkPage />} />
                <Route path="unauth" element={<Unauthorized />} />

                <Route element={<RequireAuth />}>
                <Route path="/" element={<Home />} />

                <Route path="solicitar_servicio" element={<RequestServicio />} />
                <Route path="consultar_hacedor" element={<ConsultHacedor />} />

                <Route path="consultar_servicio" element={<ConsultServicio />} />
                </Route>
                <Route path="*" element={<Missing />} />
            </Route>
        </Routes>
    );
}

export default App;