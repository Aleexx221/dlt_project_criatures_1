"use client"; // Hooks para NextJS 13+

import Link from 'next/link';
import "@/app/globals.css";

const PerfilMaster: React.FC = () => {

    return (
        <div className="min-h-screen flex">

        {/* Background image */}
        <div
            className="bg-cover bg-left w-1/6 min-h-screen p-6"
            style={{
                backgroundImage: `url('/assets/images/master.png')`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',  
                backgroundRepeat: 'no-repeat'
            }}>
        </div>

        <div className="w-5/6 p-8">

            {/* Nav */}
            <div className="flex justify-end space-x-1 mb-6">
                <Link href="/master/master-lobby" className="text-black-600 p-3">
                    Inicio
                </Link>
                <Link href="/master/master-lista-criaturas" className="text-black-600 p-3">
                    Mis criaturas
                </Link>
                <Link href="/master/master-perfil" className="text-black-600 bg-purple-200 p-3 rounded">
                    Mi perfil
                </Link>
                <Link href="/login" className="text-black-600 p-3">
                    Cerrar sesión
                </Link>
            </div>

            <div className="text-white">
                <Link href="/master/master-lobby" className='text-4xl font-bold text-orange-600'>
                    El Santurario
                </Link>
                <h2 className="mt-8 text-2xl font-bold text-orange-600">Mi perfil</h2>
                <p className="my-4 text-gray-600">Este es el lugar donde podrás gestionar, actualizar y personalizar la información de tu perfil.</p>
            </div>

            {/* Filtros */}
            <div className="flex flex-col mb-8 space-y-4">
                <div className="">
                    <label htmlFor="search1" className="block text-purple-600">Nombre Mágico</label>
                    <input id="search1" type="text" className="w-full max-w-xs p-2 mt-2 border rounded-md bg-gray-200" placeholder="Nombre" />
                </div>

                <div className="">
                    <label htmlFor="search2" className="block text-purple-600">Correo Mágico</label>
                    <input id="search2" type="text" className="w-full max-w-xs p-2 mt-2 border rounded-md bg-gray-200" placeholder="Nombre" />
                </div>

                <div className="">
                    <label htmlFor="search3" className="block text-purple-600">Rol</label>
                    <input id="search3" type="text" className="w-full max-w-xs p-2 mt-2 border rounded-md bg-gray-200" placeholder="Nombre" />
                </div>

                <div className="">
                    <label htmlFor="description" className="block text-purple-600">Descripción</label>
                    <textarea id="description" className="w-1/2 h-60 p-2 mt-2 border rounded-md bg-gray-200" placeholder="Escribe tu descripción"></textarea>
                </div>
            </div>

        </div>
    </div>
    );
};

export default PerfilMaster;
