import styled from 'styled-components';
import { Fill } from '../Container';

const Grid = styled(Fill)`
  grid-template-columns: 1fr 2fr;
  display: grid;
`;

const GridItem = styled.div`
  display: flex;
  margin: 0;
`;

export { Grid, GridItem };
