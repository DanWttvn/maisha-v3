import styled from "styled-components";

export const Styled = styled.div`
  position: relative;
  padding-block: 20px;
`

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  color: ${({theme}) => theme.colors.lightGrey};
  font-weight: ${({ theme}) => theme.weights.semibold};
  pointer-events: none;
  transform: translateY(30px);
  transition: all 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
`

export const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid ${({theme}) => theme.colors.lightestGrey};
  padding: 6px 0;

  &:focus,
  &:not(:placeholder-shown) {
    border-bottom: 2px solid ${({theme}) => theme.colors.darkestRed};

   & + ${Label} {
      transform: translateY(0) scale(0.75);
      transform-origin: top left;
      color: ${({theme}) => theme.colors.darkestRed};
    }
  }
`;
