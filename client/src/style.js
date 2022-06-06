import styled from "styled-components";

export const Container = styled.div`
  background-color: #f0f0f0;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WrapperCommon = `
  background-color: white;
  padding: 20px;
`;

export const ButtonCommon = `
    border: none;
    border-radius: 4px;
    background-color: #6246ca;
    color: white;
    cursor: pointer;
`;

export const InfoContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
`;

export const InfoText = styled.p`
  margin-left: 24px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Th = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #ddd;
`;

export const Td = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;
