import { BrowserRouter, Route, Routes } from "react-router-dom";

import ClientePage from "../features/cliente/page/ClientePage";
import Home from "../features/home/page/Home";
import ProdutoPage from "../features/produto/page/ProdutoPage";
import EmpresaPage from "../features/empresa/page/EmpresaPage";
import ClienteForm from "../features/cliente/page/ClienteForm";
import EmpresaForm from "../features/empresa/page/EmpresaForm";
import ProdutoForm from "../features/produto/page/ProdutoForm";


export default function Router() {

   return (

       <BrowserRouter>

           <Routes>
               <Route path="/cliente" element={<ClientePage />} />
           </Routes>

           <Routes>
               <Route path="/cliente-form/:idCliente?" element={<ClienteForm />} />
           </Routes>

           <Routes>
               <Route path="/produto" element={<ProdutoPage />} />
           </Routes>

           <Routes>
               <Route path="/produto-form" element={<ProdutoForm />} />
           </Routes>

           <Routes>
               <Route path="/empresa" element={<EmpresaPage />} />
           </Routes>

            <Routes>
               <Route path="/empresa-form" element={<EmpresaForm />} />
           </Routes>

           <Routes>
               <Route path="/home" element={<Home />} />
           </Routes>

       </BrowserRouter>

   );
}
