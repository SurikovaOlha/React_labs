import {useState} from "react";
import PortalExample from "./Modal";
import {createPortal} from "react-dom";
import ModalContent from "./ModalContent";

function FormComponent(props) {
  const [formData, setFormData] = useState({name: "",tel: "",email: ""});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
      <div className="mt-50">
        <h2>Портал та форма</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

          <label htmlFor="tel">Tel:</label>
          <input type="tel" id="tel" name="tel" value={formData.tel} onChange={handleChange}/>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

          <button onClick={() => setShowModal(true)}>
            Відправити
          </button>

          {showModal && createPortal(
              <ModalContent
                  onClose={() => setShowModal(false) }
                  data = {formData}
              />,
              document.body
          )}
        </form>
      </div>
  );
}

export default FormComponent;