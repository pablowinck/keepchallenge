import styled from 'styled-components';
export const Container = styled.div`
    color: ${(props) => props.theme.colors.text.main};

    padding: 2rem 20vw 1.5rem 20vw;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
export const Title = styled.div`
    font-size: 2.25rem;
    font-weight: 700;

    display: flex;
    justify-content: center;
`;
export const Menu = styled.div`
    display: flex;
    justify-content: space-around;

    padding: 1rem 0;
    border-bottom: 1px solid #bdbdbd;

    margin-top: 3rem;
`;
export const Content = styled.div``;
