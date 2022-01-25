import MenuItem from 'components/MenuItem';
import React, { useState } from 'react';
import { Container, Content, Menu, Title } from './styles';

type Props = {
    children: React.ReactNode;
    selected: string;
    setSelected: (selected: string) => void;
};

const menusData = [
    {
        name: 'All',
        selected: true
    },
    {
        name: 'Active',
        selected: false
    },
    {
        name: 'Completed',
        selected: false
    }
];

const Layout: React.FC<Props> = ({ children, selected, setSelected }) => {
    const [menus, setMenus] = useState(menusData);

    const handleClick = (name: string) => {
        setMenus(
            menus.map((menu) => {
                if (menu.name === name) return { ...menu, selected: true };
                return { ...menu, selected: false };
            })
        );
        setSelected(name);
    };

    return (
        <Container>
            <Title>#todo</Title>
            <Menu>
                {menus.map((menu, index) => (
                    <MenuItem key={index} item={menu} onClick={handleClick} />
                ))}
            </Menu>
            <Content>{children}</Content>
        </Container>
    );
};

export default Layout;
