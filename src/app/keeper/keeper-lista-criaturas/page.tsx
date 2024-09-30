"use client";

import React, { Suspense, useState } from 'react';
import TableData from "@/components/keeper-lista-criaturas";
import "@/app/globals.css";
import Link from 'next/link';
import Search from '@/components/search';
import { Spinner } from '@/components/spinner';

const ListaCriaturasCuidador: React.FC = async ({
        searchParams,
    }: {
        searchParams?: {
            query?: string;
        };
    }) => {
    const query = searchParams?.query || "";

    const [filter, setFilter] = useState({
        dragon: false,
        fenix: false,
        golem: false,
        grifo: false,
        vampiro: false,
    });

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFilter({
            ...filter,
            [name]: checked,
        });
    };

    return (
        <div className="min-h-screen flex">

        {/* Background image */}
        <div
            className="bg-cover bg-left w-1/6 min-h-screen p-6"
            style={{
                backgroundImage: `url('/assets/images/caretaker.png')`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',  
                backgroundRepeat: 'no-repeat'
            }}>
        </div>

        <div className="w-5/6 p-8">

            {/* Nav */}
            <div className="flex justify-end space-x-1 mb-6">
                <Link href="/keeper/keeper-lobby" className="text-black-600 p-3">
                    Inicio
                </Link>
                <Link href="/keeper/keeper-lista-criaturas" className="text-black-600 bg-purple-200 p-3 rounded">
                    Mis criaturas
                </Link>
                <Link href="/keeper/keeper-perfil" className="text-black-600 p-3">
                    Mi perfil
                </Link>
                <Link href="/login" className="text-black-600 p-3">
                    Cerrar sesión
                </Link>
            </div>

            <div className="text-white">
                <Link href="/keeper/keeper-lobby" className='text-4xl font-bold text-orange-600'>
                    El Santurario
                </Link>
                <h2 className="mt-8 text-2xl font-bold text-orange-600">Mis criaturas</h2>
                <p className="mt-4 text-gray-600">Explora y gestiona todas las criaturas mágicas que has recolectado. Cada una tiene habilidades únicas y características especiales.</p>
            </div>

            <div className='flex justify-center m-10'>
                <Link href="/keeper/keeper-crear-criaturas">
                    <button className="mt-6 bg-purple-500 text-white px-5 py-3 rounded">Añadir nueva criatura</button>
                </Link>
            </div>

            <div className="w-full">
                <Search />
                <Suspense key={query} fallback={<Spinner />}>
                    <TableData query={query}/>
                </Suspense>
            </div>
            
        </div>
    </div>

);
};

export default ListaCriaturasCuidador;