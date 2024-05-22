import { styled } from 'styled-components';

export const $Container = styled.div`
    position: relative;
    width: 50%;

    &:nth-child(1) {
        padding-right: 15px;
    }

    &:nth-child(2) {
        padding-left: 15px;
    }
`;

export const $Form = styled.form`
    display: flex;
    width: 100%;
`;

export const $ErrorMessage = styled.div`
    color: darkred;
    margin-top: 10px;
`;
