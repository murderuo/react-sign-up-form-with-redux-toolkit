import Form from '../Form/';
import Header from '../Header/';

function Main() {
  return (
    <>
      <div className="row">
        <div className="col-xxl-8 col-xl-12 mt-5 shadow">
          <div className="row border rounded">
            <div className="col-lg-4 col-md-12 container-bg rounded">
              <div className="letf-side-height rounded"></div>
            </div>
            <div className="col-lg-8 col-md-12 g-sm-0">
              <div className="bg-light  rounded ">
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
        <div className="col-xxl-4 col-xl-12 mt-5 ">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="border rounded p-3">test</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
