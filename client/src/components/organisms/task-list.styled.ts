import { styled } from 'styled-components';

export const $Container = styled.div`
    padding: 0 20px;
    margin: 0 20px;
    border-radius: 12px;
    overflow-y: auto;
    flex: 1;
    background: white;
    color: black;

    &:empty {
        background: black;
        color: white;
    }
`;