import styled from 'styled-components';

export const ContactListContainer = styled.div`
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Name = styled.span`
  flex: 1;
  margin-right: 10px;
`;

export const Number = styled.span`
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;