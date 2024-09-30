"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const CreatureSchema = z.object({
    nombre: z.string().min(4),
    tipo: z.string().min(4),
    poder: z.string().min(1),
    entrenada: z.string().min(1),
});

export const saveCreature = async (prevState: any, formData: FormData) => {
    const validatedFields = CreatureSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.creature.create({
            data: {
                nombre: validatedFields.data.nombre,
                tipo: validatedFields.data.tipo,
                poder: validatedFields.data.poder,
                entrenada: validatedFields.data.entrenada,
            },
        });

    } catch (error) {
        return { message: "Error al crear a la criatura" };
    }

    revalidatePath("/master/master-lista-criaturas");
    redirect("/master/master-lista-criaturas");
};

export const saveCreatureKeeper = async (prevState: any, formData: FormData) => {
    const validatedFields = CreatureSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.creature.create({
            data: {
                nombre: validatedFields.data.nombre,
                tipo: validatedFields.data.tipo,
                poder: validatedFields.data.poder,
                entrenada: validatedFields.data.entrenada,
            },
        });

    } catch (error) {
        return { message: "Error al crear a la criatura" };
    }

    revalidatePath("/keeper/keeper-lista-criaturas");
    redirect("/keeper/keeper-lista-criaturas");
};

export const getCreatures = async (query: string) => {
    try {
        const creatures = await prisma.creature.findMany({
            where: {
                nombre: {
                    contains: query,
                },
            },
            orderBy: {
                creadoEn: "desc",
            },
        });
        return creatures;
    } catch (error) {
        throw new Error ("Error al obtener a las criaturas");
    }
};

export const getCreatureById = async (id: string) => {
    try {
        const creature = await prisma.creature.findUnique({
            where: { id },
        });
        return creature
    } catch (error) {
        throw new Error ("Error al obtener a las ID")
    }
};

export const updateCreature = async (
    id: string,
    prevState: any,
    formData: FormData
) => {
    const validatedFields = CreatureSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.creature.update({
            data: {
                nombre: validatedFields.data.nombre,
                tipo: validatedFields.data.tipo,
                poder: validatedFields.data.poder,
                entrenada: validatedFields.data.entrenada,
            },
            where: { id },
        });
    }   catch (error) {
        return { message: "Error al actualizar a la criatura" };
    }

    try {
        console.log("success");
    } catch (error) {
        return { message: "Error al actualizar a la criatura" };
    }

    revalidatePath("/master/master-lista-criaturas");
    redirect("/master/master-lista-criaturas");
};

export const updateCreatureKeeper = async (
    id: string,
    prevState: any,
    formData: FormData
) => {
    const validatedFields = CreatureSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.creature.update({
            data: {
                nombre: validatedFields.data.nombre,
                tipo: validatedFields.data.tipo,
                poder: validatedFields.data.poder,
                entrenada: validatedFields.data.entrenada,
            },
            where: { id },
        });
    }   catch (error) {
        return { message: "Error al actualizar a la criatura" };
    }

    try {
        console.log("success");
    } catch (error) {
        return { message: "Error al actualizar a la criatura" };
    }

    revalidatePath("/keeper/keeper-lista-criaturas");
    redirect("/keeper/keeper-lista-criaturas");
};

export const deleteCreatures = async (id: string) => {
    try {
        await prisma.creature.delete({
            where: { id },
        });
    } catch (error) {
        return { message: "Error al eliminar a la criatura" };
    }

    revalidatePath("/master/master-lista-criaturas");
};
