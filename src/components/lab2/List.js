import {useEffect, useState} from "react";

function List(props) {

  let [ListPerson, setListPerson] = useState(null)

  useEffect(() => {
    fetch("https://mocki.io/v1/89ad9795-b983-40aa-9a48-81706df79567")
        .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setListPerson(data))
  }, [])

  const initList = ListPerson && ListPerson.map((person, index) => {
        return (
            <li key={'li-' + index}>
              <div className="logo" style={{backgroundColor: person.color}}>{person.logo}</div>

              <div>
                <div className="name">{person.name}</div>
                <div className="city">{person.city}</div>
              </div>
            </li>)
      }
  )

  return (
      <div className="mt-50">
        <h2>Лабораторна робота №2</h2>
        <h2>Пункт 1</h2>

        <ul className="list mt-50">
          {initList}
        </ul>
      </div>
  );
}

export default List;
