import { getCreatures } from "@/lib/action";
import Link from "next/link";

const Creatures = async ({query}: {query: string;}) => {
    const creatures = await getCreatures(query);
    return (
        <table className="table table-zebra">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th className="py-3 px-6">Nombre</th>
                    <th className="py-3 px-6">Tipo</th>
                    <th className="py-3 px-6">Poder</th>
                    <th className="py-3 px-6">Entrenado</th>
                    <th className="py-3 px-6">Editar</th>
                </tr>
            </thead>
            <tbody>
                {creatures.map((rs) => (
                    <tr key={rs.id} className="bg-white border-b">
                        <td className="py-3 px-6">{rs.nombre}</td>
                        <td className="py-3 px-6">{rs.tipo}</td>
                        <td className="py-3 px-6">{rs.poder}</td>
                        <td className="py-3 px-6">{rs.entrenada}</td>
                        <td className="flex justify-center gap-1 py-3">
                            <Link href={`/keeper/keeper-editar-criatura/${rs.id}`} className="px-3">✏️</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Creatures;