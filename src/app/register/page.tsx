"use client"; // Hooks para NextJS 13+

import Link from 'next/link';
import '../globals.css';

const Login: React.FC = () => {

    return (
        <div className="min-h-screen flex">

        {/* Background image */}
        <div
            className="bg-cover bg-left w-7/12 min-h-screen h-full p-6"
            style={{
                backgroundImage: `url('/assets/images/register.png')`,
                backgroundSize: '140%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: 'scaleX(-1)'
            }}
        >
        </div>


        <div className="w-5/12 p-8">

            <div className="text-white m-4">
                <h2 className="mt-8 text-2xl font-bold text-orange-600">Únete al santuario</h2>
                <p className="my-4 text-gray-600">Elige si serás un cuidador o maestro de criaturas.<br /> Completa los detalles para comenzar</p>
            </div>

            <div className="flex flex-col m-4 mb-8 space-y-4">
                <div className="">
                    <label htmlFor="search2" className="block text-purple-600">Nombre Mágico</label>
                    <input id="search2" type="text" className="w-full p-2 mt-2 border rounded-md bg-gray-100" placeholder="Nombre" />
                </div>

                <div className="">
                    <label htmlFor="search2" className="block text-purple-600">Correo Mágico</label>
                    <input id="search2" type="text" className="w-full p-2 mt-2 border rounded-md bg-gray-100" placeholder="tunombre@santuario.com" />
                </div>

                <div className="">
                    <label htmlFor="search2" className="block text-purple-600">Rol</label>
                    <select id="entrenada" className="w-full p-2 mt-2 border rounded-md bg-gray-100">
                        <option value="" disabled selected>Seleccione su rol</option>
                        <option value="si">Maestro</option>
                        <option value="no">Cuidador</option>
                    </select>
                </div>

                <div className="">
                    <label htmlFor="search3" className="block text-purple-600">Palabra Mágica</label>
                    <input id="search3" type="text" className="w-full p-2 mt-2 border rounded-md bg-gray-100" placeholder="Introduzca su contraseña" />
                </div>
            </div>

            <div className="flex justify-center pt-4 mt-8">
                <button className="bg-purple-600 text-white py-4 px-10 rounded-md hover:bg-purple-700">
                    Registrarme en el santuario
                </button>
            </div>

            <div className="flex justify-center mt-8">
                <p className="text-gray-500">
                    ¿Ya tienes cuenta? <Link href="/login" className="text-purple-600 hover:text-purple-800 underline">Inicia sesión</Link> con tus datos para continuar
                </p>
            </div>

        </div>
    </div>
    );
};

export default Login;
