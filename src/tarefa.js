export function Tarefa({ tarefa, deleteFunction, updateFunction }) {
    return (
        <div className="tarefa">
            {tarefa.texto}
            <button onClick={() => deleteFunction(tarefa.id)}>X</button>
            <button onClick={() => updateFunction(tarefa.id)}>Completa</button>
        </div>
    )
}