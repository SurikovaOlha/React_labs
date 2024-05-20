function Sudoku(props) {
  const toggleClass = (e) => {
    e.target.classList.toggle("active");
  };

  const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const initSudoku = rows.map((item, index) => {
          return (
              <tr key={'tr-sudoku-' + index}>
                {rows.map((td, index) => {
                  return (
                      <td key={'td-sudoku-' + index}
                          onClick={ toggleClass }>
                      </td>
                  );
                })}
              </tr>
          )
        }
    )

  return (
      <div className="mt-50">
        <h2>Пункт 2</h2>

        <table className="sudoku">
          <tbody>
             {initSudoku}
          </tbody>
        </table>
      </div>
  );
}

export default Sudoku;
