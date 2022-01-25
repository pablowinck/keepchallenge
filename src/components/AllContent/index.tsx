import AddTodo from 'components/AddTodo';
import TodoItem from 'components/TodoItem';
import { useTodoContext } from 'context/TodoContext';
import { motion } from 'framer-motion';
import React from 'react';
import { Container, Todos } from './styles';

const AllContent: React.FC = () => {
    const { todos } = useTodoContext();

    const getDuration = (index: number): number => {
        const max = 1;
        const duration = index * 0.1;

        return duration >= max ? max : duration;
    };
    return (
        <Container
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
        >
            <AddTodo />
            <Todos>
                {todos.map((todo, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: getDuration(index) }}
                    >
                        <TodoItem todo={todo} />
                    </motion.div>
                ))}
            </Todos>
        </Container>
    );
};

export default AllContent;
