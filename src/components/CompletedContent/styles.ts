import { Delete } from '@styled-icons/fluentui-system-filled/Delete';
import { motion } from 'framer-motion';
import styled from 'styled-components';
export const Container = styled(motion.div)``;
export const Todos = styled.div`
    padding: 1rem;
`;
export const Item = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const DeleteIcon = styled(Delete)`
    width: 1.5rem;
    color: ${({ theme }) => theme.colors.text.light};

    transition: color 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.text.main};
    }
`;
export const DeleteButton = styled.button`
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
`;
export const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
export const DeleteAllButton = styled.button`
    width: 7.75rem;
    height: 2.25rem;
    border-radius: 4px;
    background: ${(props) => props.theme.colors.red.main};
    transition: background 0.3s ease-in-out;
    &:hover {
        background: ${(props) => props.theme.colors.red.dark};
    }

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InnerDeleteIcon = styled(DeleteIcon)`
    color: white;
    &:hover {
        color: white;
    }
`;
