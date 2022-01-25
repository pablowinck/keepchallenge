import styled from 'styled-components';

export const Container = styled.div<{ checked }>`
    padding: 0.25rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;

    color: ${(props) =>
        props.checked ? '#8B8B8B' : props.theme.colors.text.main};
`;
export const Checkbox = styled.input`
    -webkit-appearance: none;
    padding: 0;
    height: 1.5rem;
    width: 1.5rem;
    background: white;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #828282;
    box-sizing: border-box;

    &:checked {
        background: ${(props) => props.theme.colors.blue.main};

        display: grid;
        place-items: center;

        &:after {
            content: '✓';
            color: white;
            position: relative;
            display: block;
            font-size: 1rem;
            font-weight: bold;
            top: -2px;
        }
    }
`;
