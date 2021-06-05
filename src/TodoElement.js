
const TodoElement = props => {

  return (
    <li>
        {props.content}
        <button onClick={props.onDelete}>削除</button>
    </li>
  );
};

export default TodoElement;
