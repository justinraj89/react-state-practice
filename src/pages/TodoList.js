import { useState } from "react";
//=================================

const testArr = [
  "Do something fun",
  "play video games",
  "do dishes",
  "clean room",
];

function TodoList() {
  // State
  const [arr, setArr] = useState(
    testArr.map((item) => ({ name: item, checked: false, showDelete: false }))
  );
  const [inputText, setInputText] = useState('');

  // Functions
  function handleDelete(index) {
    let newArr = [...arr];
    let arrFiltered = newArr.filter((item, i) => i !== index);
    setArr(arrFiltered);
  }

  function handleCheck(index) {
    setArr((prevArr) => {
      const newArr = [...prevArr];
      newArr[index].isChecked = !newArr[index].isChecked;
      return newArr;
    });
    
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    let newArr = [...arr];
    if(!inputText) return;
    newArr.push({name: inputText, checked: false, showDelete: false});
    setArr(newArr)
    setInputText('')
  }

  return (
    <main className="h-auto flex flex-col justify-center items-center">
      <h1 className="font-extrabold mt-8 text-3xl">Todo List</h1>
      <ul className="w-[95vw] lg:w-1/4 mt-8">
        {arr.map((item, i) => (
          <div className="flex gap-4 pb-6 pt-4 justify-between" key={i}>
            <li className="w-full border-b pl-2">{item.name}</li>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => handleCheck(i)}
            />
            {item.isChecked && (
              <button
                onClick={() => handleDelete(i)}
                className="px-3 rounded-lg bg-red-500 text-white"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </ul>
      <form onSubmit={handleFormSubmit} className="mt-8 flex lg:w-1/4 justify-between gap-2 pb-12">
        <input className="w-full focus:outline-none border-b" type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="add something"/>
        <button className="bg-black text-white px-4 rounded-lg" type="submit">Submit</button>
      </form>
    </main>
  );
}

export default TodoList;
