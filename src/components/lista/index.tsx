import { Itarefa } from "../../types/tarefa";
import Item from "./item";
import style from "./Lista.module.scss";

interface Props {
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props) {
    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do Dia</h2>
            <ul>
                { tarefas.map(item => (
                 <Item 
                 selecionaTarefa={selecionaTarefa}
                 key={item.id}
                 tarefa={item.tarefa}
                 tempo={item.tempo}
                 selecionado={item.selecionado}
                 completado={item.completado}
                 id={item.id}
                 />
                ))}
              </ul>

        </aside>
    )
}
export default Lista;