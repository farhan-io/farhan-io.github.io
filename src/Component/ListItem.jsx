const ListItem = (props) => {
  return (
    <div className="d-flex justify-content-between ">
      <ul className="list-group">
        <li style={{ color: "dark", fontSize: "20px", listStyle: "none" }}>
          {props.item}
        </li>
      </ul>
      <button
        type="button"
        className="mb-2 btn btn-danger"
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        Delete {props.name}
      </button>
    </div>
  );
};

export default ListItem;
