import { Todo, useTodoContext } from 'context/TodoContext';
import React from 'react';
import { Checkbox, Container } from './styles';

type Props = {
    todo: Todo;
};

const TodoItem: React.FC<Props> = ({ todo }) => {
    const { toggleTodo } = useTodoContext();

    return (
        <Container checked={todo.completed}>
            <Checkbox
                type="checkbox"
                value={todo.completed ? 'true' : 'false'}
                onChange={() => toggleTodo(todo.id)}
                checked={todo.completed}
            />
            <p>{todo.text}</p>
        </Container>
    );
};

export default TodoItem;
