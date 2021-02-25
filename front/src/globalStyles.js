import styled from "styled-components";

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  label {
    margin-bottom: 10px;
    span {
      color: var(--red-clr);
    }
  }

  input {
    border-radius: none;
    border: var(--input-border);
    height: 2.5rem;
    padding: 0 10px;
    font-family: var(--primary-ff);
  }
`
