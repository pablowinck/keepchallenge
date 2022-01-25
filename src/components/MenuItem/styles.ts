import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
    user-select: none;
    cursor: pointer;

    span {
        width: 5.25rem;
        text-align: center;
        font-weight: 600;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: color 0.3s ease-in-out;

    &:hover {
        color: ${(props) => props.theme.colors.text.light};
    }
`;
export const Selected = styled.div`
    height: 4px;
    width: 5.25rem;

    border-radius: 4px 4px 0 0;
    background: ${(props) => props.theme.colors.blue.main};

    position: absolute;
    bottom: -1rem;
`;
export const Motion = styled(motion.div)`
    height: 100%;
    width: 100%;
    position: relative;
`;
