import UpdateCreature from "@/components/editar-criaturas";
import { getCreatureById } from "@/lib/action";
import Link from "next/link";
import { notFound } from "next/navigation";

const UpdateCreaturePage = async ({ params }: { params: { id: string }}) => {
    const id = params.id;
    const creature = await getCreatureById(id)

    if (!creature) {
        notFound();
    }

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
                <Link href="/master/master-lista-criaturas" className="text-black-600 bg-purple-200 p-3 rounded">
                    Mis criaturas
                </Link>
                <Link href="/master/master-perfil" className="text-black-600 p-3">
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
                <h2 className="mt-8 text-2xl font-bold text-orange-600">Mis criaturas</h2>
                <p className="mt-4 text-gray-600">Explora y gestiona todas las criaturas mágicas que has recolectado. Cada una tiene habilidades únicas y características especiales.</p>
            </div>

            <div className="max-w-md mx-auto m-10">
                <h1 className="text-2xl text-center pb-10">Modifica a tu criatura</h1>
                <UpdateCreature creature={creature}/>
            </div>
        </div>
    </div>

    );
};

export default UpdateCreaturePage;