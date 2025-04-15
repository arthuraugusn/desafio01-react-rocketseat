import { ClipboardCheck, Trash2 } from "lucide-react";
import styles from "./TodoList.module.css";
import { TodoInterface } from "../types/Todo.interface";
import { Checkbox } from "./Checkbox";

interface TodoListProps {
  todoList: TodoInterface[];
  onCompleteTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export function TodoList({
  todoList,
  onCompleteTodo,
  deleteTodo,
}: TodoListProps) {
  return (
    <div className={styles.todoList}>
      <div className={styles.counters}>
        <p className={styles.counterCreated}>
          Tarefas Criadas<span>{todoList.length}</span>
        </p>
        <p className={styles.counterFinished}>
          Concluídas
          <span>
            {todoList.length > 0
              ? `${todoList.filter((todo) => todo.isCompleted).length} de ${
                  todoList.length
                }`
              : 0}
          </span>
        </p>
      </div>
      <>
        {todoList.length === 0 ? (
          <div className={styles.todoListEmpty}>
            <ClipboardCheck className={styles.clipboardIcon} />
            <div>
              <span>Você ainda não tem tarefas cadastradas</span>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        ) : (
          todoList.map((todo) => {
            return (
              <div key={todo.id} className={styles.todoListItems}>
                <div>
                  <Checkbox
                    isCompleted={todo.isCompleted}
                    setIsCompleted={() => {
                      onCompleteTodo(todo.id);
                    }}
                  />
                  <p className={`${styles.todo} ${todo.isCompleted ? styles.todoCompleted : ""}`}>{todo.todo}</p>
                </div>
                <Trash2
                  className={styles.iconTrash}
                  onClick={() => deleteTodo(todo.id)}
                />
              </div>
            );
          })
        )}
      </>
    </div>
  );
}
