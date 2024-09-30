"use client";

import React, { Suspense, useState } from 'react';
import TableData from "@/components/lista-criaturas";
import "@/app/globals.css";
import Link from 'next/link';
import Search from '@/components/search';
import { Spinner } from '@/components/spinner';

const ListaCriaturasMaster: React.FC = async ({
        searchParams,
    }: {
        searchParams?: {
            query?: string;
        };
    }) => {
    const query = searchParams?.query || "";

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

            <div className="flex justify-center m-10">
                <Link href="/master/master-crear-criaturas">
                    <button className="mt-6 bg-purple-500 text-white px-5 py-3 rounded">
                        Añadir nueva criatura
                    </button>
                </Link>
            </div>

            <div className="flex space-x-8 mb-8">
                <div className="w-full">
                    <Search />
                    <Suspense key={query} fallback={<Spinner />}>
                        <TableData query={query}/>
                    </Suspense>
                </div>
            </div>

        </div>
    </div>

    );
};

export default ListaCriaturasMaster;