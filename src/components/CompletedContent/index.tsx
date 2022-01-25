import TodoItem from 'components/TodoItem';
import { useTodoContext } from 'context/TodoContext';
import React from 'react';
import {
    Container,
    DeleteAllButton,
    DeleteButton,
    DeleteIcon,
    Footer,
    InnerDeleteIcon,
    Item,
    Todos
} from './styles';

const CompletedContent: React.FC = () => {
    const { todos, removeTodo, removeAllTodos } = useTodoContext();
    return (
        <Container
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
        >
            <Todos>
                {todos
                    .filter((todo) => todo.completed)
                    .map((todo, index) => (
                        <Item
                            key={index}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.1 * index }}
                        >
                            <TodoItem todo={todo} />
                            <DeleteButton onClick={() => removeTodo(todo.id)}>
                                <DeleteIcon />
                            </DeleteButton>
                        </Item>
                    ))}
            </Todos>
            <Footer>
                <DeleteAllButton onClick={() => removeAllTodos()}>
                    <InnerDeleteIcon />
                    delete all
                </DeleteAllButton>
            </Footer>
        </Container>
    );
};

export default CompletedContent;
