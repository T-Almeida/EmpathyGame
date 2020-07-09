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

  return data === null ? (
    <h1>Loading </h1>
  ) : (
    <div>
      <Question id={currentQuestionId} question={data.data} />
      <Options
        id={currentQuestionId}
        options={data.data}
        updateQuestionId={updateQuestionId}
      />
    </div>
  );
};

export default Game;
