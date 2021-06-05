const AddTodo = props => {
    return (
      <div>
          <input type="text" value={props.value} onChange={props.onChange} />
          <button onClick={props.add}>追加</button>
      </div>
    );
  };
  
  export default AddTodo;
  