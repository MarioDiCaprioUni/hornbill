import {styled} from "@mui/material";


export const SelectorWrapper = styled('div')`
  width: 100%;
  padding: 20px;
  margin-top: 75px;
  display: flex;
  justify-content: center;
  gap: 100px;
  
  @media(max-width: 1150px) {
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 50px;
  }
`;

export const SelectorSeparatorForSmallScreens = styled('hr')`
  width: 100%;
  max-width: 500px;
  display: none;
  
  @media(max-width: 1150px) {
    display: block;
  }
`;
