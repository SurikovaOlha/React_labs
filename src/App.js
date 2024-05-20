import './App.css';
import Table from "./components/lab1/Table";
import NumberParameters from "./components/lab1/NumberParameters";
import Three from "./components/lab1/Three";
import List from "./components/lab2/List";
import Sudoku from "./components/lab2/Sudoku";
import FormComponent from "./components/lab2/FormComponent";

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
      <List/>
      <Sudoku/>
      <FormComponent/>
    </div>
  );
}

export default App;
