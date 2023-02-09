import React, { useState } from "react";
import Button from "../Button";

const TodoRender = (props) => {
  const { _id, title } = props.item;
  const { hanldedelete, hanldeEdit, togglehideshow, handleupdatoe } = props;
  const [newtoggle, setnewtoggle] = useState(togglehideshow);

  const hanldeEditTodo = () => {
    hanldeEdit(title);
    setnewtoggle(!newtoggle);
  };
  const hanldeUpdated = () => {
    setnewtoggle(!newtoggle);
    handleupdatoe(_id);
  };
  return (
    <>
      <div className="listing">
        <h2>
          ({_id} ) {title}
        </h2>
        {newtoggle ? (
          <Button name="Edit" action={hanldeEditTodo} />
        ) : (
          <Button name="save" action={hanldeUpdated} cls="savebtn" />
        )}
        <Button name="Delete" action={() => hanldedelete(_id)} />
        {/*  */}
      </div>
    </>
  );
};

export default TodoRender;
