import { useState } from "react";

const sampleArr = ["do dishes", "grocery shop", "cook dinner"];

function Test() {
  const [chores, setChores] = useState(
    sampleArr.map((item) => ({
      desc: item,
      isChecked: false,
    }))
  );

  const [choreInputVal, setChoreInputVal] = useState("");

  function handleDeleteCheckedItems() {
    let newArr = [...chores];
    newArr = newArr.filter((item, i) => item.isChecked === false);
    setChores(newArr);
  }

  function handleCheck(index) {
    let newArr = [...chores];
    newArr[index].isChecked = !newArr[index].isChecked;
    setChores(newArr);
  }

  function handleAddChore(e) {
    e.preventDefault();
    if (!choreInputVal) return;
    setChores((prevChores) => {
      return [
        ...chores,
        {
          desc: choreInputVal,
          isChecked: false,
        },
      ];
    });
    setChoreInputVal("");
  }

  return (
    <main className="flex flex-col justify-center items-center mb-20 font-mono">
      <section className="lg:w-1/3 mt-20">
        <h1 className="text-center mb-8 text-3xl">CHORES 🥸</h1>
        <ul>
          {chores.map((chore, i) => (
            <div key={i} className="flex gap-4 py-2 border-b justify-between">
              <li>{chore.desc}</li>
              <input
                type="checkbox"
                checked={chore.isChecked}
                onChange={() => handleCheck(i)}
              />
            </div>
          ))}
        </ul>

        <form onSubmit={handleAddChore} className="flex gap-4 mt-4 justify-between mt-8">
          <input
            type="text"
            value={choreInputVal}
            className="focus:outline-none border-b w-5/6"
            onChange={(e) => setChoreInputVal(e.target.value)}
            placeholder="add chore"
          />
          <button
            type="submit"
            className="px-2 bg-green-600 text-white rounded-lg py-1"
          >
            Submit
          </button>
        </form>

        {chores.some((chore) => chore.isChecked === true) && (
          <button
            onClick={handleDeleteCheckedItems}
            className="mt-4 px-2 rounded-lg bg-red-500 text-white w-full py-1"
          >
            delete checked items
          </button>
        )}
      </section>
    </main>
  );
}

export default Test;
