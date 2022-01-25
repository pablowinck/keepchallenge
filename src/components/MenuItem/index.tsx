import React from 'react';
import { Container, Motion, Selected } from './styles';

type Props = {
    item: { name: string; selected: boolean };
    onClick: (name: string) => void;
};

const MenuItem: React.FC<Props> = ({ item, onClick }) => {
    return (
        <Container>
            <span onClick={() => onClick(item.name)}>{item.name}</span>
            <Motion
                initial={{ opacity: 0 }}
                animate={{ opacity: item.selected ? 1 : 0 }}
            >
                {item.selected && <Selected />}
            </Motion>
        </Container>
    );
};

export default MenuItem;
