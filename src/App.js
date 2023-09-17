import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [editedValue, setEditedValue] = useState("");
  const [editedIndex, setEditedIndex] = useState(-1);
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setEditedValue(event.target.value);
  };

  const handleSubmit = () => {
    if (editedIndex !== -1) {
      const newData = [...data];
      newData[editedIndex] = editedValue;
      setData(newData);
      setEditedValue("");
      setEditedIndex(-1);
    } else {
      setData((prev) => [...prev, editedValue]);
      setInputValue("");
    }
  };

  const onEdit = (index) => {
    setEditedIndex(index);
    setEditedValue(data[index]);
    setInputValue(data[index]);
  };
  //setInputValue(value);

  // // setData(newData)
  // // object format = {key: "", name: "", description: "", status: false, dueData: ""}
  // //const data = [object, object]
  // for (let i = 0; i < data.length; i++) {
  //   if (data[i].key === "qwqwq") {
  //     data[i] = null | undefined;
  //   }
  // }
  // //data = [null, {..}, null, {...}, ]

  const onDelete = (e) => {
    setData((prevdata) => prevdata.filter((item) => item !== e));
  };

  return (
    <div>
      <div>
        <h1>Todo</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Write Task here"
          onChange={handleChange}
          value={inputValue}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          {editedIndex !== -1 ? "Save" : "Submit"}
        </button>
        <div>
          <div></div>
        </div>
      </div>
      <br />
      {data.map((x, i) => {
        return (
          <div key={i}>
            <h3>{x}</h3>
            <input type="checkbox" value=""></input>
            <button onClick={() => onDelete(x)}>X</button>
            <button onClick={() => onEdit(i)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
