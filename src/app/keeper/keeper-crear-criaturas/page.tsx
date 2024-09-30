"use client"; // Hooks para NextJS 13+

import Link from 'next/link';
import "@/app/globals.css";
import { useFormState } from 'react-dom';
import { saveCreatureKeeper } from '@/lib/action';

const CrearCriaturasCuidador: React.FC = () => {
    const [state, formAction] = useFormState(saveCreatureKeeper, null);
    return (
        <div className="min-h-screen flex">

            {/* Background image */}
            <div
                className="bg-cover bg-left w-1/6 min-h-screen"
                style={{
                    backgroundImage: `url('/assets/images/caretaker.png')`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',  
                    backgroundRepeat: 'no-repeat'
                }}>
            </div>

            <div className="w-5/6 p-8 flex flex-col justify-start"> {/* Cambiado para justificar al inicio */}

                {/* Nav */}
                <div className="flex justify-end space-x-4 mb-4"> {/* Reducido margen inferior */}
                    <Link href="/keeper/keeper-lobby" className="text-black-600 p-3">
                        Inicio
                    </Link>
                    <Link href="/keeper/keeper-lista-criaturas" className="text-black-600 p-3">
                        Mis criaturas
                    </Link>
                    <Link href="/keeper/keeper-perfil" className="text-black-600 p-3">
                        Mi perfil
                    </Link>
                    <Link href="/login" className="text-black-600 p-3">
                        Cerrar sesión
                    </Link>
                </div>

                <div className="text-white mb-12">
                    <Link href="/keeper/keeper-lobby" className='text-4xl font-bold text-orange-600'>
                        El Santurario
                    </Link>
                    <h2 className="mt-2 text-2xl font-bold text-orange-600">Mis criaturas</h2>
                    <p className="mt-2 text-gray-600">Explora y gestiona todas las criaturas mágicas que has recolectado. Cada una tiene habilidades únicas y características especiales.</p>
                </div>

                <div className="flex flex-col items-center mb-8 space-y-4">
                    <div>
                        <h2 className="mt-4 text-4xl font-bold text-orange-500 text-center">Creador de Criaturas Mágicas</h2>
                    </div>

                    <form action={formAction}>
                        <div className="grid grid-cols-2 gap-8 w-full">
                            <div>
                                <label htmlFor="nombre" className="block text-purple-600">Nombre Mágico de la Criatura</label>
                                <input name="nombre" id="nombre" type="text" className="w-full p-2 mt-2 border rounded-md bg-gray-200" placeholder="Nombre" />
                            </div>

                            <div>
                                <label htmlFor="tipo" className="block text-purple-600">Tipo de Criatura</label>
                                <select name="tipo" id="tipo" className="w-full p-2 mt-2 border rounded-md bg-gray-200">
                                    <option value="" disabled selected>Selecciona un tipo</option>
                                    <option value="dragon">Dragón</option>
                                    <option value="fenix">Fénix</option>
                                    <option value="golem">Gólem</option>
                                    <option value="grifo">Grifo</option>
                                    <option value="vampiro">Vampiro</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="poder" className="block text-purple-600">Nivel de Poder</label>
                                <select name="poder" id="poder" className="w-full p-2 mt-2 border rounded-md bg-gray-200">
                                    <option value="" disabled selected>Selecciona un nivel</option>
                                    <option value="1">I</option>
                                    <option value="2">II</option>
                                    <option value="3">III</option>
                                    <option value="4">IV</option>
                                    <option value="5">V</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="entrenada" className="block text-purple-600">¿Entrenada?</label>
                                <select name="entrenada" id="entrenada" className="w-full p-2 mt-2 border rounded-md bg-gray-200">
                                    <option value="" disabled selected>Selecciona Si o No</option>
                                    <option value="si">Sí</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>

                        {/* Botón de registrar */}
                        <div className="flex justify-center w-full mt-8 pt-5">
                            <div className='mx-3'>
                                <button className="bg-purple-600 text-white font-bold py-4 px-6 rounded-md hover:bg-purple-700 transition-colors duration-300">
                                    Registrar Criatura
                                </button>
                            </div>

                        </div>
                    </form>
                        <div className='mx-3'>
                            <Link href="/keeper/keeper-lista-criaturas">
                                <button className="bg-purple-600 text-white font-bold py-4 px-6 rounded-md hover:bg-purple-700 transition-colors duration-300">
                                    Volver
                                </button>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default CrearCriaturasCuidador;
