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
    display: grid;
    color: black;
    border: 3px solid white;
    grid-template-areas: 'AuthorName AuthorImg AuthorImg'
    'AuthorBio AuthorBio AuthorDetail'
`;

export const AuthorName = styled.div`
    grid-area: AuthorName;
    margin: 0.5rem;
    background: white;
`;
export const AuthorBio = styled.div`
    grid-area: AuthorBio;
    margin: 0.5rem;
    background: white;
`;
export const AuthorImg = styled.div`
    grid-area: AuthorImg;
    margin: 0.5rem;
    background: white;
`;
export const AuthorDetail = styled.div`
    grid-area: AuthorDetail;
    margin: 0.5rem;
    background: white;
`;

export const Project = styled.div`
    grid-area: Project;
    background: pink;
`;
export const Supported = styled.div`
    grid-area: Supported;
    background: beige;
`;