/* eslint-disable react/prop-types */
import styled from "styled-components";
// import Input from "./Input";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* grid-template-columns: 24rem 1fr 1.2fr; */
  gap: 0.8rem;
  padding: 1.5rem 0;

  input{
    border: 1px solid #ccc;
    width: 100%;
  }

  button{
    width: 100%;
  }
  


  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;



function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      { label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
