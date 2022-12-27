import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import {  updateUser } from '../../store/userSlice';


function PortalForm({ user, modalConfig, setModalConfig }) {
  const [phoneNumber, setPhoneNumber] = useState('05xxxxxxxxx');

  const onFocusHandle = () => {
    setPhoneNumber('');
  };
  const onBlurHandle = () => {
    setPhoneNumber('05xxxxxxxxx');
  };

  const dispatch = useDispatch();

  const initialValues = { ...user };
  const valSchema = Yup.object({
    firstName: Yup.string().label('First Name').required(),
    lastName: Yup.string().label('Last Name').required(),
    //   phonenumber: Yup.object().shape({
    //     phonenumber: Yup.string()
    //       .phone('US', 'Please enter a valid phone number')
    //       .required('A phone number is required'),
    //   }),
    phonenumber: Yup.string()
      // .matches(/^(05)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/)
      .phone('TR', 'Please enter a valid phone number')
      .required('A phone number is required'),
    email: Yup.string().email().label('Email').required(),
    accept: Yup.boolean()
      .required('Required')
      .oneOf([true], 'You must accept the all rules'),
    password: Yup.string().min(4, 'Password must be 8 characters long'),
    // .matches(/[0-9]/, 'Password requires a number')
    // .matches(/[a-z]/, 'Password requires a lowercase letter')
    // .matches(/[A-Z]/, 'Password requires an uppercase letter')
    // .matches(/[^\w]/, 'Password requires a symbol'),
    repassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Must match "password" field value',
    ),
  });
  const { values, handleChange, handleReset, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      onSubmit: values => {
        // console.log(values);

        dispatch(updateUser(values));
        setModalConfig({ ...modalConfig, isOpen: false });
        // handleReset();
        // if (!errors) {
        // }
      },
      validationSchema: valSchema,
    });

  return (
    <>
      <form className="row" onSubmit={handleSubmit} onReset={handleReset}>
        <div className="col-lg-6 col-md-12 p-3">
          <div className="d-flex flex-column ">
            <label htmlFor="firstName" className="fw-bold">
              {values.firstName === 'corporation' ? 'Type Of' : 'First Name'}
            </label>
            <input
              type="text"
              className="form-control form-control-lg mt-2"
              id="firstName"
              onChange={handleChange}
              value={values.firstName}
              disabled={values.firstName === 'corporation' ? true : false}
            />
          </div>
          {touched.firstName && errors.firstName ? (
            <span className="text-danger">{errors.firstName}</span>
          ) : null}
        </div>
        <div className="col-lg-6 col-md-12 p-3">
          <div className="d-flex flex-column ">
            <label htmlFor="lastName" className="fw-bold">
              {values.firstName === 'corporation'
                ? 'corporation Name'
                : 'Last Name'}
            </label>
            <input
              type="text"
              className="form-control form-control-lg  mt-2"
              id="lastName"
              onChange={handleChange}
              value={values.lastName}
            />
            {touched.lastName && errors.lastName ? (
              <span className="text-danger">{errors.lastName}</span>
            ) : null}
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
              onChange={handleChange}
              value={values.phonenumber}
              placeholder={phoneNumber}
              onFocus={onFocusHandle}
              onBlur={onBlurHandle}
            />
            {touched.phonenumber && errors.phonenumber ? (
              <span className="text-danger">{errors.phonenumber}</span>
            ) : null}
          </div>
        </div>
        <div className="col-lg-6 col-md-12 p-3">
          <div className="d-flex flex-column ">
            <label htmlFor="email" className="fw-bold">
              E-mail
            </label>
            <input
              type="text"
              className="form-control form-control-lg mt-2"
              id="email"
              onChange={handleChange}
              value={values.email}
            />
            {touched.email && errors.email ? (
              <span className="text-danger">{errors.email}</span>
            ) : null}
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
              onChange={handleChange}
              value={values.password}
            />
            {touched.password && errors.password ? (
              <span className="text-danger">{errors.password}</span>
            ) : null}
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
              onChange={handleChange}
              value={values.repassword}
            />
            {touched.repassword && errors.repassword ? (
              <span className="text-danger">{errors.repassword}</span>
            ) : null}
          </div>
        </div>
        <div className="col-lg-12 col-md-12 mt-3">
          <div className="d-flex flex-column gap-3 ">
            <div className="d-flex align-items-center gap-2">
              <input
                type="checkbox"
                id="adv"
                onChange={handleChange}
                checked={values.adv}
              />
              <label className="form-check-label" htmlFor="adv">
                Yes, i wantto email for advertising mails.
              </label>
            </div>
            {/* <div className="d-flex align-items-center gap-2">
              <input
                type="checkbox"
                id="accept"
                onChange={handleChange}
                value={values.accept}
                checked={values.accept}
              />
              <label className="form-check-label" htmlFor="accept">
                Yes, i agree all rules
              </label>
              {touched.accept && errors.accept ? (
                <span className="text-danger">{errors.accept}</span>
              ) : null}
            </div> */}
          </div>
        </div>
        <div className="col-lg-12 col-md-12 mt-3">
          <div className="d-flex justify-content-center gap-2">
            <button
              className="btn btn-danger "
              type="reset"
              onClick={() => setModalConfig({ ...modalConfig, isOpen: false })}
            >
              Cancel
            </button>
            <button className="btn btn-primary ms-3" type="submit">
              Update Account
            </button>
            {/* <button
              className="btn btn-primary ms-3"
              onClick={() => dispatch(showmeState)}
            >
              show state
            </button> */}
          </div>
        </div>
      </form>
    </>
  );
}

export default PortalForm;
