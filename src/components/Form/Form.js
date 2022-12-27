import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import 'yup-phone';
import { addUser } from '../../store/userSlice';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

function Form() {
  const [phoneNumber, setPhoneNumber] = useState('05xxxxxxxxx');

  const onFocusHandle = () => {
    setPhoneNumber('');
  };
  const onBlurHandle = () => {
    setPhoneNumber('05xxxxxxxxx');
  };

  const dispatch = useDispatch();

  const selectOptions = [
    { value: 'personal', label: 'Personal account' },
    { value: 'corporation', label: 'corporation account' },
  ];

  const initialValues = {
    id: '',
    type: 'personal',
    firstName: '',
    lastName: '',
    phonenumber: '',
    email: '',
    password: '',
    repassword: '',
    adv: false,
    accept: false,
  };
  const valSchema = Yup.object({
    type: Yup.string().label('record type ').required(),
    // firstName: Yup.string().label('First Name').required(),
    firstName: Yup.string().when('type', {
      is: val => (val === 'personal' ? true : false),
      then: Yup.string().label('First Name').required(),
    }),
    lastName: Yup.string().when('type', {
      is: val => (val === 'personal' ? true : false),
      then: Yup.string().label('Last Name').required(),
      otherwise: Yup.string().label('Corparation name ').required(),
    }),

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
  const {
    values,
    handleChange,
    handleReset,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
  } = useFormik({
    initialValues,
    onSubmit: values => {
      const newValues =
        values.type === 'personal'
          ? { ...values }
          : { ...values, firstName: 'corporation' };

      console.log(newValues);

      dispatch(addUser(newValues));
      handleReset();
      // if (!errors) {
      // }
    },
    validationSchema: valSchema,
  });

  const handleSelectChange = val => {
   
    setFieldValue('type',val.value)
    // console.log(values);
  };

  return (
    <>
      <form className="row" onSubmit={handleSubmit} onReset={handleReset}>
        <div className="col-lg-12 col-md-12 p-3">
          <div className="d-flex gap-3 justify-content-around">
            <div className="d-flex gap-3 align-items-center justify-content-between">
              <label className="form-check-label" htmlFor="type">
                Record Type: 
              </label>
              <Select
                inputId="type"
                defaultValue={selectOptions[0]}
              
                onChange={handleSelectChange}
                options={selectOptions}
                isSearchable={false}
              />
              {/* <select id="type" onChange={handleChange}>
                <option value="personal">kişisel</option>
                <option value="corporation">şirket</option>
              </select> */}
              {/* {JSON.stringify(values.type)} */}
              {touched.type && errors.type ? (
                <span className="text-danger">{errors.type}</span>
              ) : null}
            </div>
          </div>
        </div>
        <hr />
        {values.type === 'personal' ? (
          <>
            <div className="col-lg-6 col-md-12 p-3">
              <div className="d-flex flex-column ">
                <label htmlFor="firstName" className="fw-bold">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg mt-2"
                  id="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                />
              </div>
              {touched.firstName && errors.firstName ? (
                <span className="text-danger">{errors.firstName}</span>
              ) : null}
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
                  onChange={handleChange}
                  value={values.lastName}
                />
                {touched.lastName && errors.lastName ? (
                  <span className="text-danger">{errors.lastName}</span>
                ) : null}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-lg-12 col-md-12 p-3">
              <div className="d-flex flex-column ">
                <label htmlFor="firstName" className="fw-bold">
                  corporation Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg mt-2"
                  id="lastName"
                  onChange={handleChange}
                  value={values.lastName}
                />
              </div>
              {touched.lastName && errors.lastName ? (
                <span className="text-danger">{errors.lastName}</span>
              ) : null}
            </div>
          </>
        )}

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
            <div className="d-flex align-items-center gap-2">
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
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 mt-3">
          <div className="mt-3 ">
            <button
              className="btn btn-danger "
              type="reset"
              onClick={handleReset}
            >
              Reset Form
            </button>
            <button className="btn btn-primary ms-3" type="submit">
              Create Account
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
