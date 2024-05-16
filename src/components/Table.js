function Table(props) {
  const {data} = props;

  const tr = data.map((item, index) => {
        let sum = 0;
        let average = 0;

        return (<tr key={'tr-' + index}>
          <td>{item.title}</td>

          {item.rating.map((td, index) => {
            sum = sum + td
            average = (index + 1)

            return (
                <td key={'td-rating' + index}>{td}</td>
            );
          })}

          <td>Середнє значення {Math.round(sum / average)}</td>
        </tr>)
      }
  )

  return (
      <div>
        <h2>1</h2>

        <table className="table">
          <tbody>
            {tr}
          </tbody>
        </table>
      </div>
  );
}

export default Table;
