import { useState } from 'react';
import Form from '../Form/';
import FormList from '../FormList/';
import Header from '../Header/';
import Portal from '../Portal/';

function Main() {
  // const [isOpen, setIsOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    user: {},
  });

  return (
    <>
      <div className={'row mx-auto position-relative'}>
        <div className="position-absolute mt-5 modalantiblur" id="portal"></div>

        <div className="col-xxl-6 col-xl-12 mt-5 shadow">
          <div className={`row border rounded  ${modalConfig.isOpen ? 'bgblur' : ''}`}>
            <div className="col-lg-4 col-md-12 container-bg rounded">
              <div className="letf-side-height rounded"></div>
            </div>
            <div className="col-lg-8 col-md-12 g-sm-0">
              <div className={`bg-light  rounded `}>
                <div className="container">
                  <div className="d-flex flex-column gap-3 px-5 py-5">
                    <Header />
                    <hr />
                    <div>
                      <Form />
                      <div className="fw-bold mt-3">
                        Already have an acoount?
                        <span className="text-primary"> Log in</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-12 mt-5 ">
          <div className={`row ${modalConfig.isOpen ? 'bgblur' : ''}`}>
            <div className="col-lg-12 ">
              <table className="table table-hover ">
                <thead className="rounded p-5 bg-secondary ">
                  <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>PhoneNumber</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>
                      <div className="d-flex justify-content-center">
                        Action
                      </div>
                    </th>
                  </tr>
                </thead>
                <FormList
                  modalConfig={modalConfig}
                  setModalConfig={setModalConfig}
                />
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
