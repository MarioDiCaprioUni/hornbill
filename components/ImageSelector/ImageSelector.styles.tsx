import {MenuItem, Select, styled} from "@mui/material";


export const FieldWrapper = styled('div')`
  width: fit-content;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled('div')`
  width: 100px;
  padding: 10px;
  text-align: center;
  font-family: "Lato", serif;
  font-size: 1.2rem;
  background: linear-gradient(120deg, ${props => props.theme.palette.info.light}, ${props => props.theme.palette.info.main});
  border-radius: 10px;
`;

export const Image = styled('img')`
  width: 500px;
  max-width: 100%;
  height: 500px;
  object-fit: contain;
  border: none;
  border-radius: 5px;
  background: linear-gradient(120deg, ${props => props.theme.palette.primary.main}, ${props => props.theme.palette.secondary.main});
  cursor: pointer;
  
  @media(max-width: 500px) {
    height: calc(100vw - 20px);
  }
`;

export const SelectorInput = styled(Select)`
  width: 100%;
  border-radius: 14px;
  font-weight: bold;
  font-family: "Lato", serif;
  background: transparent;
  color: ${props => props.theme.palette.primary.main};

  .MuiSelect-icon {
    color: ${props => props.theme.palette.primary.main};
  }
`;

export const SelectorItem = styled(MenuItem)`
  font-family: "Lato", serif;
`;
