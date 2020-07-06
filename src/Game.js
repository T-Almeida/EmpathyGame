import React from 'react';

class Game extends React.Component {

    constructor() {
        super();

        this.update_question_id = this.update_question_id.bind(this);

        this.state = {
            data: null,
            current_question_id: "1",
        };
    }

    async getData() {
        const res = await fetch("/empathy-game/json/questions-examples.json");
        const data_json = await res.json();
        console.log("print data log");
        console.log(res);
        console.log(data_json);
        return this.setState({ data: data_json });
    }
    
    componentDidMount() {
        this.getData();
    }

    update_question_id(id){
        this.setState({ current_question_id: id});
    }

    render() {
    if (this.state.data == null) {return <h1>Loading </h1>};

    const question = this.state.data[this.state.current_question_id];
    
    const responses = question["response"].map((answer)=>
    
        <button onClick={()=>this.update_question_id(answer.goto_id)} 
        className="btn btn-light"
        style={{marginLeft:10,marginRight:10}}   
        key={answer.goto_id}> {answer.text} </button>
    );

    return (
        <div>
            <h2>{question["query"]}</h2>
            <div>
                {responses}
            </div>
        </div>
        );
    }
}

export default Game;
