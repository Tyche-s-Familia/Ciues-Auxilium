import styled from "styled-components"

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  text-align: center;
  grid-template-rows: 6vh 48vh 40vh 6vh;
  grid-template-areas: 'TopNav TopNav TopNav'
  'ProjectInfo ProjectInfo ProjectInfo'
  'Updates Updates Updates'
  'Foot Foot Foot'
`;

export const ProjectInfo = styled.div`
    grid-area: ProjectInfo;
    background: white;
    margin: 0.5rem;
`;

export const Updates = styled.div`
    grid-area: Updates;
    margin: 0.5rem;
    display: grid;
    grid-template-rows: 3vh auto;
    grid-template-areas: 'ProjectUpdates ProjectUpdates ProjectUpdates'
    'UpdateDate Description Description'
`;

export const ProjectUpdates = styled.div`
    grid-area: ProjectUpdates;
    color: white;
    margin: 0.5rem;
`;
export const UpdateDate = styled.div`
    grid-area: UpdateDate;
    background: white;
    margin: 0.5rem;
`;
export const Description = styled.div`
    grid-area: Description;
    background: white;
    margin: 0.5rem;
`;
