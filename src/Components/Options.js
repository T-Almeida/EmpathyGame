import React from 'react';

const Options = (props) => {
  return props.options.map((answer) => {
    return (
      <button
        onClick={() => props.updateQuestionId(answer.goto_id)}
        className='btn btn-light'
        style={{ marginLeft: 10, marginRight: 10 }}
        key={answer.goto_id}
      >
        {' '}
        {answer.text}{' '}
      </button>
    );
  });
};

export default Options;
