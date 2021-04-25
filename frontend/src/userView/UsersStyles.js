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
    grid-template-rows: 18vh auto;
    grid-template-areas: 'AuthorName AuthorImg AuthorImg'
    'AuthorDetail AuthorDetail AuthorDetail'
`;

export const AuthorName = styled.div`
    grid-area: AuthorName;
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
    display: grid;
    color: black;
    grid-template-rows: 4vh auto;
    grid-template-areas: 'UserPro UserPro UserPro'
    'Names Details Details'
`;

export const UserPro = styled.div`
    grid-area: UserPro;
    color: white;
    margin: 0.5rem;
`;

export const Names = styled.div`
    grid-area: Names;
    background: white;
    margin: 0.5rem;
`;

export const Details = styled.div`
    grid-area: Details;
    background: white;
    margin: 0.5rem;
`;

export const Supported = styled.div`
    grid-area: Supported;
    display: grid;
    color: black;
    grid-template-rows: 4vh auto;
    grid-template-areas: 'UserSup UserSup UserSup'
    'NamesSup DetailsSup DetailsSup'
`;

export const UserSup = styled.div`
    grid-area: UserSup;
    color: white;
    margin: 0.5rem;
`;

export const NameSup = styled.div`
    grid-area: NamesSup;
    background: white;
    margin: 0.5rem;
`;

export const DetailsSup = styled.div`
    grid-area: DetailsSup;
    background: white;
    margin: 0.5rem;
`;
