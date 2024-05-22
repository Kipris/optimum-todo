import { styled } from 'styled-components';

export const $Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    color: white;
`;

export const $Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 20px auto;
    background: gray;
    border-radius: 12px;
`;

export const $FormContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0;
`;

export const $Separator = styled.div`
    width: 100%;
    height: 1px;
    background: black;
    margin: 20px 0;
`;
