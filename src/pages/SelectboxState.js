import { useState } from "react";
import { stateData } from "../utils/data";
//====================================

//=====================================================

function SelectboxState() {
  // State
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [displaySelection, setDisplaySelection] = useState(false);
  const [error, setError] = useState(false);

  // Functions
  function handleStateSelect(e) {
    let stateName = e.target.value;
    let selected = stateData.find((state) => state.name === stateName);
    setSelectedState(selected);
  }
  //---------------------------
  function handleCitySelect(e) {
    let cityname = e.target.value;
    let selected = selectedState.cities.find(
      (city) => city.cityName === cityname
    );
    setSelectedCity(selected);
  }
  //-----------------------------
  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedCity) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
    }
    setDisplaySelection(true);
    setTimeout(() => {
      setSelectedState("");
      setSelectedCity("");
      setDisplaySelection(false);
    }, 2500);
  }
  //========================================

  return (
    <main className="flex flex-col items-center pt-12">
      <h1 className="font-extrabold text-3xl pb-8 text-center">
        Select city and state
      </h1>

      <form onSubmit={handleSubmit} className="flex justify-between gap-2 px-4">
        <select
          value={selectedState?.name || ""}
          onChange={handleStateSelect}
          className="w-fit focus:outline-none border-2 p-1 rounded-lg"
        >
          <option value={null}>Select a state</option>
          {stateData.map((state, i) => (
            <option value={state.name} key={i}>
              {state.name}
            </option>
          ))}
        </select>

        <select
          value={selectedCity.cityName}
          onChange={handleCitySelect}
          className="w-fit focus:outline-none border-2 p-1 rounded-lg"
        >
          <option value={null}>select a city</option>
          {selectedState.cities?.map((city, i) => (
            <option value={city.cityName} key={i}>
              {city.cityName}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="py-1 px-4 rounded-lg bg-black text-white"
        >
          submit
        </button>
      </form>

      {error && <div className="pt-8 font-bold">You must select a city and state 🤬</div>}

      {displaySelection && selectedState && selectedCity && (
        <>
          <div className="pt-8 font-bold text-xl">
            You selected {selectedCity.cityName}, {selectedState.name}
          </div>
          <div className="w-full pt-8 flex justify-center px-2">
            <img src={selectedCity.imgSrc} alt={selectedCity.cityName} className="border-4 border-black lg:w-1/3"/>
          </div>
        </>
      )}
    </main>
  );
}

export default SelectboxState;

