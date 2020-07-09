import React, { Fragment } from 'react';

const Question = (props) => {
  const question = props.question[props.id];

  return (
    <Fragment>
      <h2>{question['query']}</h2>
    </Fragment>
  );
};

export default Question;
