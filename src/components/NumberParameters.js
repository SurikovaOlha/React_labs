function NumberParameters(props) {
  const {number} = props;

  return (
      <div className="table mt-50">
        <h2>2</h2>

        Не проста математична дія, косинус числа {number} = {Math.cos(number)}
      </div>
  );
}

export default NumberParameters;