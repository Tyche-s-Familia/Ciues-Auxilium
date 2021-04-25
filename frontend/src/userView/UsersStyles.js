import styled, {createGlobalStyle} from "styled-components"

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  text-align: center;
  grid-template-rows: 6vh 40vh 28vh 20vh 6vh;
  grid-template-areas: 'TopNav TopNav TopNav'
  'Author Author Author'
  'Project Project Project'
  'Supported Supported Supported'
  'Foot Foot Foot'
`;

export const Author = styled.div`
    grid-area: Author;
    background: red;
    grid-template-areas: 'AuthorName AuthorImg AuthorImg'
    'AuthorBio AuthorBio AuthorDetail'
`;

export const AuthorName = styled.div``;
export const AuthorBio = styled.div``;
export const AuthorImg = styled.div``;
export const AuthorDetail = styled.div``;

export const Project = styled.div`
    grid-area: Project;
    background: pink;
`;
export const Supported = styled.div`
    grid-area: Supported;
    background: beige;
`;