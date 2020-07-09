import React from 'react';

const Options = (props) => {
  const questions = props.options[props.id].response;

  return questions.map((answer) => {
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
