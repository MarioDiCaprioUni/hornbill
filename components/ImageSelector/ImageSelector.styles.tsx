import {Select, styled} from "@mui/material";


export const FieldWrapper = styled('div')`
  width: fit-content;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Image = styled('img')`
  width: 500px;
  max-width: 100%;
  height: 500px;
  object-fit: contain;
  border: none;
  border-radius: 5px;
  background: linear-gradient(120deg, ${props => props.theme.palette.primary.main}, ${props => props.theme.palette.secondary.main});
  
  @media(max-width: 500px) {
    height: calc(100vw - 20px);
  }
`;

export const SelectorInput = styled(Select)`
  width: 100%;
  border-radius: 14px;
  font-weight: bold;
  font-family: "Lato", serif;
  background: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.background.default};
`;
