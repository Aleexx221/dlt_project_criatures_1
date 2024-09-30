"use client";

import { updateCreatureKeeper } from "@/lib/action";
import { Creature } from "@prisma/client";
import Link from "next/link";
import { useFormState } from "react-dom";

const UpdateCreatureKeeper = ({ creature }: { creature: Creature }) => {
    const UpdateCreatureWithId = updateCreatureKeeper.bind(null, creature.id);
    const [state, formAction] = useFormState(UpdateCreatureWithId, null);

    return(
        <div>
            <form action={formAction}>
                <div className="grid grid-cols-2 gap-8 w-full">
                    <div>
                        <label htmlFor="nombre" className="block text-purple-600">Nombre Mágico de la Criatura</label>
                        <input name="nombre" id="nombre" type="text" className="w-full p-2 mt-2 border rounded-md bg-gray-200" placeholder="Nombre" defaultValue={creature.nombre}/>
                    </div>

                    <div>
                        <label htmlFor="tipo" className="block text-purple-600">Tipo de Criatura</label>
                        <select name="tipo" id="tipo" className="w-full p-2 mt-2 border rounded-md bg-gray-200" defaultValue={creature.tipo}>
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
                        <select name="poder" id="poder" className="w-full p-2 mt-2 border rounded-md bg-gray-200" defaultValue={creature.poder}>
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
                        <select name="entrenada" id="entrenada" className="w-full p-2 mt-2 border rounded-md bg-gray-200" defaultValue={creature.entrenada}>
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
                            Editar Criatura
                        </button>
                    </div>
                </div>
            </form>
            <div className="flex justify-center p-5">
                <Link href="/keeper/keeper-lista-criaturas">
                    <button className="bg-purple-600 text-white font-bold py-4 px-6 rounded-md hover:bg-purple-700 transition-colors duration-300">
                        Volver
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default UpdateCreatureKeeper;