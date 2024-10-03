import Modal from "../components/Modal";
import Button from "../components/Button";

import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement</p>
    </Modal>
  );

  return (
    <div className="relative">


      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        iaculis ligula ut condimentum volutpat. Aenean erat felis, faucibus in
        rhoncus id, euismod id nibh. Aenean in dapibus ex. Fusce vehicula
        sollicitudin iaculis. Etiam at maximus justo. Mauris commodo arcu
        iaculis urna laoreet venenatis. Cras justo lacus, rutrum non molestie
        viverra, pellentesque nec libero.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        iaculis ligula ut condimentum volutpat. Aenean erat felis, faucibus in
        rhoncus id, euismod id nibh. Aenean in dapibus ex. Fusce vehicula
        sollicitudin iaculis. Etiam at maximus justo. Mauris commodo arcu
        iaculis urna laoreet venenatis. Cras justo lacus, rutrum non molestie
        viverra, pellentesque nec libero.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        iaculis ligula ut condimentum volutpat. Aenean erat felis, faucibus in
        rhoncus id, euismod id nibh. Aenean in dapibus ex. Fusce vehicula
        sollicitudin iaculis. Etiam at maximus justo. Mauris commodo arcu
        iaculis urna laoreet venenatis. Cras justo lacus, rutrum non molestie
        viverra, pellentesque nec libero.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        iaculis ligula ut condimentum volutpat. Aenean erat felis, faucibus in
        rhoncus id, euismod id nibh. Aenean in dapibus ex. Fusce vehicula
        sollicitudin iaculis. Etiam at maximus justo. Mauris commodo arcu
        iaculis urna laoreet venenatis. Cras justo lacus, rutrum non molestie
        viverra, pellentesque nec libero.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        iaculis ligula ut condimentum volutpat. Aenean erat felis, faucibus in
        rhoncus id, euismod id nibh. Aenean in dapibus ex. Fusce vehicula
        sollicitudin iaculis. Etiam at maximus justo. Mauris commodo arcu
        iaculis urna laoreet venenatis. Cras justo lacus, rutrum non molestie
        viverra, pellentesque nec libero.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        iaculis ligula ut condimentum volutpat. Aenean erat felis, faucibus in
        rhoncus id, euismod id nibh. Aenean in dapibus ex. Fusce vehicula
        sollicitudin iaculis. Etiam at maximus justo. Mauris commodo arcu
        iaculis urna laoreet venenatis. Cras justo lacus, rutrum non molestie
        viverra, pellentesque nec libero.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        iaculis ligula ut condimentum volutpat. Aenean erat felis, faucibus in
        rhoncus id, euismod id nibh. Aenean in dapibus ex. Fusce vehicula
        sollicitudin iaculis. Etiam at maximus justo. Mauris commodo arcu
        iaculis urna laoreet venenatis. Cras justo lacus, rutrum non molestie
        viverra, pellentesque nec libero.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        iaculis ligula ut condimentum volutpat. Aenean erat felis, faucibus in
        rhoncus id, euismod id nibh. Aenean in dapibus ex. Fusce vehicula
        sollicitudin iaculis. Etiam at maximus justo. Mauris commodo arcu
        iaculis urna laoreet venenatis. Cras justo lacus, rutrum non molestie
        viverra, pellentesque nec libero.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        iaculis ligula ut condimentum volutpat. Aenean erat felis, faucibus in
        rhoncus id, euismod id nibh. Aenean in dapibus ex. Fusce vehicula
        sollicitudin iaculis. Etiam at maximus justo. Mauris commodo arcu
        iaculis urna laoreet venenatis. Cras justo lacus, rutrum non molestie
        viverra, pellentesque nec libero.{" "}
      </p>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>

      {showModal && modal}
    </div>
  );
}

export default ModalPage;
