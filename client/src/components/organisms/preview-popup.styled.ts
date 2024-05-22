import { styled } from 'styled-components';

export const $Backdrop = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
`;

export const $Container = styled.form`
    background: white;
    padding: 40px 20px 20px;
    width: 50%;
    height: auto;
    max-height: 50%;
    border-radius: 12px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow-y: auto;
    text-align: center;
`;
