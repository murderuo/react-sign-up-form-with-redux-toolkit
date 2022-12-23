function Form() {
  return (
    <>
      <form className="row ">
        <div className="col-lg-6 col-md-12 p-3">
          <div className="d-flex flex-column ">
            <label htmlFor="firstName" className="fw-bold">
              First Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg mt-2"
              id="firstName"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 p-3">
          <div className="d-flex flex-column ">
            <label htmlFor="lastName" className="fw-bold">
              Last Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg  mt-2"
              id="lastName"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 p-3">
          <div className="d-flex flex-column ">
            <label htmlFor="phonenumber" className="fw-bold">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control form-control-lg mt-2"
              id="phonenumber"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 p-3">
          <div className="d-flex flex-column ">
            <label htmlFor="email" className="fw-bold">
              E-mail
            </label>
            <input
              type="email"
              className="form-control form-control-lg mt-2"
              id="email"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 p-3">
          <div className="d-flex flex-column ">
            <label htmlFor="password" className="fw-bold">
              Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg mt-2"
              id="password"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 p-3">
          <div className="d-flex flex-column ">
            <label htmlFor="repassword" className="fw-bold">
              Re-Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg mt-2"
              id="repassword"
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-12 mt-3">
          <div className="d-flex flex-column gap-3 ">
            <div className="d-flex align-items-center gap-2">
              <input type="checkbox" name="advertising" id="adv" />
              <label class="form-check-label" for="adv">
                Yes, i wantto email for advertising mails.
              </label>
            </div>
            <div className="d-flex align-items-center gap-2">
              <input type="checkbox" name="agree" id="accept" />
              <label class="form-check-label" for="accept">
                Yes, i agree all rules
              </label>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 mt-3">
          <div className="mt-3">
            <button className="btn btn-primary">Create Account</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
