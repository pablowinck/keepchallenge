import { createContext, useContext, useState } from 'react';

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

type TodoContextType = {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    removeAllTodos: () => void;
};

const TodoContext = createContext<TodoContextType>({} as TodoContextType);

const TodoContextProvider: React.FC = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (todo: Todo): void => {
        setTodos((currentTodos) => [...currentTodos, todo]);
    };

    const removeTodo = (id: number): void => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const removeAllTodos = (): void => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const toggleTodo = (id: number): void => {
        setTodos((currentTodos) =>
            currentTodos.map((currentTodo) =>
                currentTodo.id === id
                    ? {
                          ...currentTodo,
                          completed: !currentTodo.completed
                      }
                    : currentTodo
            )
        );
    };

    const value = {
        todos: todos,
        addTodo: addTodo,
        removeTodo: removeTodo,
        toggleTodo: toggleTodo,
        removeAllTodos: removeAllTodos
    };

    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    );
};

export const useTodoContext = (): TodoContextType => {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error(
            'useTodoContext must be used within a TodoContextProvider'
        );
    }

    return context;
};

export default TodoContextProvider;
