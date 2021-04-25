import styled, {createGlobalStyle} from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  text-align: center;
  grid-template-rows: 6vh 6vh 6vh 76vh 6vh;
  grid-template-areas: 'TopNav TopNav TopNav'
  'Author Author Author'
  'Project Project Project'
  'Supported Supported Supported'
  'Foot Foot Foot';
`;

export const Author = styled.div`
    grid-area: Author;
    background: red;
`;
export const Project = styled.div`
    grid-area: Project;
    background: pink;
`;
export const Supported = styled.div`
    grid-area: Supported;
    background: beige;
`;