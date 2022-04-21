import React from "react";
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import './Form.css';

export default function Form({ handleSubmit, handleChanges, newTask }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleChanges} type="text" value={newTask} />
      <button type="submit">
        <FaPlus size={20} />
      </button>
    </form>
  );
}

Form.protoTypes = {
  handleChanges: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
}
