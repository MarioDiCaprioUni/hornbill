import {MenuItem, Select, styled} from "@mui/material";


export const FieldWrapper = styled('div')`
  width: 500px;
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
  user-select: none;
`;

export const Image = styled('img')`
  width: 100%;
  max-width: 500px;
  height: 300px;
  object-fit: scale-down;
  border: none;
  border-radius: 5px;
  background: linear-gradient(120deg, ${props => props.theme.palette.primary.main}, ${props => props.theme.palette.secondary.main});
  cursor: pointer;
  
  @media(max-width: 500px) {
    height: calc(100vw / 5 * 3);
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

  .MuiSelect-select {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const SelectorItem = styled(MenuItem)`
  font-family: "Lato", serif;
  display: flex;
  gap: 10px;
`;
