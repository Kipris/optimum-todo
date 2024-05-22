import { styled } from 'styled-components';

export const $Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    padding: 10px 20px;
    margin: 20px 0;
    border: 1px solid black;
    border-radius: 8px;
`;

export const $Name = styled.div<{ $isCompleted: boolean }>`
    display: flex;
    flex: 1;
    font-size: 18px;
    position: relative;
    margin-right: 20px;
    text-decoration: ${({ $isCompleted }) => $isCompleted ? 'line-through' : 'none'};
`;

export const $Box = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;
