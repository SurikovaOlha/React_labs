 function ModalContent(props) {
   console.log(props)
   // const [name, tel, email] = props.data;
   // const [onClose] = props;

  return (
      <div className="modal">
        <div className="content">
          <h2>Данні з форми</h2>

          <ul>
            <li>Ім'я: {props.data.name}</li>
            <li>Телефон: {props.data.tel}</li>
            <li>Email: {props.data.email}</li>
          </ul>
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
  );
 }

 export default ModalContent;