import uuid from "react-uuid";

import { useState } from "react";
const aler = (
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">please enter valid task!</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Input = (props) => {
  const [task, setTask] = useState({
    id: uuid(),
    Task: "",
    completed: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask((prev) => {
      return {
        ...prev,
        Task: "",
        id: task,
      };
    });
    if (task.Task.trim().length === 0) {
      return (
        <p className="text-light bg-dark">
          Invalid input ... please type again
        </p>
      );
    }
    props.newTodos(task);
    console.log(task);
  };
  const handleChange = (e) => {
    setTask((prevTask) => {
      return {
        ...prevTask,
        Task: e.target.value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center ">
      <div
        className="input-group pt-5 mb-3"
        style={{ height: "32px", width: "200px" }}
      >
        <input
          type="text"
          className="form-control "
          onChange={handleChange}
          value={task.Task}
        />
        <button
          className="btn btn-primary"
          style={{ height: "38px", width: "53px" }}
          type="submit"
          id="button-addon2"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Input;
