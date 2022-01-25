import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    height: 100%;

    @media (max-width: 768px) {
        gap: 0.5rem;
    }
`;
export const Input = styled.input`
    width: 29.75rem;
    height: 3.5rem;
    border-radius: 12px;

    transition: border-color 0.3s ease-in-out;

    &:focus,
    &:hover {
        outline: none;

        border-color: ${(props) => props.theme.colors.text.light};
    }

    @media (max-width: 768px) {
        width: 12rem;
    }
`;
export const Button = styled.button`
    height: 3.5rem;
    width: 6.8rem;

    font-size: 0.875rem;
    border-radius: 0.75rem;

    transition: background 0.3s ease-in-out;

    &:hover {
        background: ${(props) => props.theme.colors.blue.dark};
    }
`;
