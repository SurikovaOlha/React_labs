import './App.css';
import Table from "./components/Table";
import NumberParameters from "./components/NumberParameters";
import Three from "./components/Three";

const data = [
  {
    title: "Іноземна мова",
    rating: [90, 73, 63]
  },
  {
    title: "База даних",
    rating: [80, 86, 96]
  },
  {
    title: "Фізика",
    rating: [90, 93, 93]
  },
]

const number = 125;

const threeNumber = 1;

function App() {
  return (
    <div className="App">
      <h2>Лабораторна робота №1</h2>
      <Table data={data} />
      <NumberParameters number={number} />
      <Three number={threeNumber} />
    </div>
  );
}

export default App;
