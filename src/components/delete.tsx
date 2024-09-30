import { deleteCreatures } from "@/lib/action";

export const DeleteButton = ({ id }: { id: string }) => {
    const DeleteCreatureWithId = deleteCreatures.bind(null, id);
    return (
        <form action={DeleteCreatureWithId}>
            <button>✖️</button>
        </form>
    );
};
