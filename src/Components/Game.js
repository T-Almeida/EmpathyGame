import React, { useState, useEffect } from 'react';
import Question from './Question';
import Options from './Options';

const Game = () => {
  const [data, setData] = useState(null);
  const [currentQuestionId, setCurrentQuestionId] = useState('1');

  const getData = async (dataLink) => {
    const res = await fetch(dataLink);
    const data_json = await res.json();

    console.log('print data log');
    console.log(res);
    console.log(data_json);

    setData({ data: data_json });
  };

  useEffect(() => {
    getData('/empathy-game/json/questions-examples.json');
  }, []);

  const updateQuestionId = (id) => {
    setCurrentQuestionId(id);
  };

  const currentData = data === null ? null : data.data[currentQuestionId];

  return data === null ? (
    <h1>Loading </h1>
  ) : (
    <div>
      <Question id={currentQuestionId} question={currentData.query} />
      <Options
        id={currentQuestionId}
        options={currentData.response}
        updateQuestionId={updateQuestionId}
      />
    </div>
  );
};

export default Game;
