import styled from 'styled-components';

const Fill = styled.div`
  height: 100vh;
  width: 100vw;
`;

const FlexFill = styled(Fill)`
  display: flex;
`;

const CenteredFlexFill = styled(Fill)`
  justify-content: center;
  align-items: center;
`;

export { CenteredFlexFill, Fill, FlexFill };
