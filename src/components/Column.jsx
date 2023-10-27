import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Task from "./Task";

const Container = styled.div`
  width: 300px;
  min-height: 80vh;
  background-color: rgb(239, 224, 203);
`;

const Count = styled.span`
  font-size: 24px;
  color: gray;
  margin-left: 10px;
  line-height: 24px;
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Column = ({ columnData }) => {
  return (
    <Container>
      <h2>
        {columnData.name} <Count>{columnData.items.length}</Count>
      </h2>
      <Droppable droppableId={columnData.id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {columnData.items.map((item) => (
              <Task key={item.id} taskData={item} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
