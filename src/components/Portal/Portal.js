import { createPortal } from 'react-dom';
import PortalForm from '../PortalForm/PortalForm';

function Portal({ modalConfig, setModalConfig }) {
  if (!modalConfig.isOpen) {
    return null;
  }

  const user = modalConfig.user;
  return createPortal(
    <h1 className=" bg bg-info container rounded w-50 p-4">
      <PortalForm
        user={user}
        modalConfig={modalConfig}
        setModalConfig={setModalConfig}
      />
    </h1>,
    document.getElementById('portal'),
  );
}

export default Portal;
