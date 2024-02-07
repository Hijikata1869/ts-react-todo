import React, { useState } from "react";

const App: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);

  const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onClickAdd = (event: React.MouseEvent) => {
    event.preventDefault();
    const newTodos = [...incompleteTodos, inputText];
    setIncompleteTodos(newTodos);
    setInputText("");
  };

  const onClickComplete = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    const targetTodo = incompleteTodos[index];
    const newCompleteTodos = [...completeTodos, targetTodo];
    setCompleteTodos(newCompleteTodos);
    incompleteTodos.splice(index, 1);
  };

  const onClickBack = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    const targetTodo = completeTodos[index];
    const newIncompleteTodos = [...incompleteTodos, targetTodo];
    setIncompleteTodos(newIncompleteTodos);
    completeTodos.splice(index, 1);
  };

  const onClickDelete = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    completeTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos];
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <div className="App">
      <div className="input-area">
        <p>TODOを入力</p>
        <form>
          <input
            type="text"
            id="input-todo"
            value={inputText}
            onChange={onChangeTodoText}
          />
          <button onClick={onClickAdd}>追加</button>
        </form>
      </div>
      <div className="incomplete-area">
        <p className="list-title">未完了のTODOリスト</p>
        <ul>
          {incompleteTodos.map((incompleteTodo, index) => (
            <li key={index}>
              <div>
                <p>{incompleteTodo}</p>
                <button onClick={(event) => onClickComplete(event, index)}>
                  完了
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="list-title">完了したTODOリスト</p>
        <ul>
          {completeTodos.map((completeTodo, index) => (
            <li key={index}>
              <div>
                <p>{completeTodo}</p>
                <button onClick={(event) => onClickBack(event, index)}>
                  戻す
                </button>
                <button onClick={(event) => onClickDelete(event, index)}>
                  削除
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
