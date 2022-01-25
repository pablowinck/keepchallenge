import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
    h1 {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${(props) => props.theme.colors.text.dark};
    }
`;

export const Todos = styled.div`
    padding: 1rem;
`;
