import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const TaskItem = styled.div`
  background-color: rgb(177, 177, 236);
  min-width: 200px;
  text-align: center;
  border-radius: 10px;
`;
const Task = ({ taskData }) => {
  return (
    <Draggable
      draggableId={taskData.id}
      key={taskData.id}
      index={taskData.index}
    >
      {(provided) => (
        <TaskItem ref={provided.innerRef} {...provided.draggableProps}>
          {taskData.name}
          {provided.placeholder}
        </TaskItem>
      )}
    </Draggable>
  );
};

export default Task;
