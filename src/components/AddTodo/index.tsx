import { Todo, useTodoContext } from 'context/TodoContext';
import React, { useState } from 'react';
import { Button, Container, Input } from './styles';

const AddTodo: React.FC = () => {
    const { addTodo, todos } = useTodoContext();
    const [text, setText] = useState<string>('');

    const handleClick = () => {
        const todo: Todo = {
            id: todos.length + 1,
            text: text,
            completed: false
        };

        addTodo(todo);
        setText('');
    };
    return (
        <Container
            onSubmit={(e) => {
                e.preventDefault();
                handleClick();
            }}
        >
            <Input
                placeholder="add details"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button>Add</Button>
        </Container>
    );
};

export default AddTodo;
