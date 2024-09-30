"use client"; // Hooks para NextJS 13+

import Link from 'next/link';
import "@/app/globals.css";

const LobbyMaestro: React.FC = () => {

    return (
        <div className="min-h-screen flex">

        {/* Background image */}
        <div
            className="bg-cover bg-left w-3/12 min-h-screen p-6"
            style={{
                backgroundImage: `url('/assets/images/master.png')`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',  
                backgroundRepeat: 'no-repeat'
            }}>
        </div>

        <div className="w-6/12 p-8">

            {/* Nav */}
            <div className="flex justify-end space-x-1 mb-6">
                <Link href="/master/master-lobby" className="text-black-600 bg-purple-200 p-3 rounded">
                    Inicio
                </Link>
                <Link href="/master/master-lista-criaturas" className="text-black-600 p-3">
                    Mis criaturas
                </Link>
                <Link href="/master/master-perfil" className="text-black-600 p-3">
                    Mi perfil
                </Link>
                <Link href="/login" className="text-black-600 p-3">
                    Cerrar sesión
                </Link>
            </div>

            <div className="flex items-start justify-center min-h-screen pt-20">
                <div className="text-white text-center">
                    <Link href="/master/master-lobby" className='text-4xl font-bold text-orange-600'>
                        El Santurario
                    </Link>
                    <h2 className="mt-8 text-2xl font-bold text-orange-600">Lobby del santurario</h2>
                    <p className="my-4 text-gray-600">Bienvenido Maestro, ¿preparado para la aventura?</p>
                </div>
            </div>

        </div>

        <div
            className="bg-cover bg-left w-3/12 min-h-screen"
            style={{
                backgroundImage: `url('/assets/images/caretaker.png')`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',  
                backgroundRepeat: 'no-repeat'
            }}>
        </div>
    </div>
    );
};

export default LobbyMaestro;
