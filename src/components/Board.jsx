import { DragDropContext } from "react-beautiful-dnd";
import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Column from "./Column";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;
const Board = () => {
  const DATA = [
    {
      id: uuidv4(),
      name: "TODO",
      index: 0,
      items: [
        {
          id: uuidv4(),
          index: 0,
          name: "Learn React",
          inProgress: false,
          done: false,
        },
        {
          id: uuidv4(),
          index: 1,
          name: "Learn Redux",
          inProgress: false,
          done: false,
        },
        {
          id: uuidv4(),
          index: 2,
          name: "Learn GraphQL",
          inProgress: false,
          done: false,
        },
      ],
    },
    {
      id: uuidv4(),
      name: "PROGRESS",
      index: 1,
      items: [
        {
          id: uuidv4(),
          name: "Learn vue",
          index: 0,
          inProgress: true,
          done: false,
        },
        {
          id: uuidv4(),
          index: 1,
          name: "Learn vue-router",
          inProgress: true,
          done: false,
        },
        {
          id: uuidv4(),
          index: 2,
          name: "Learn vuex",
          inProgress: true,
          done: false,
        },
      ],
    },
    {
      id: uuidv4(),
      name: "DONE",
      index: 2,
      items: [
        {
          id: uuidv4(),
          index: 0,
          name: "learn javascript",
          inProgress: false,
          done: true,
        },
        {
          id: uuidv4(),
          index: 1,
          name: "learn typescript",
          inProgress: false,
          done: true,
        },
        {
          id: uuidv4(),
          index: 2,
          name: "learn hTML",
          inProgress: false,
          done: true,
        },
      ],
    },
  ];

  return (
    <DragDropContext>
      <Container>
        {DATA.map((data) => {
          return <Column key={data.id} columnData={data} />;
        })}
      </Container>
    </DragDropContext>
  );
};

export default Board;
