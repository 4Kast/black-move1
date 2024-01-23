import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { alertVisibility } from '../store/alertStore';
import classes from './FormAddress.module.css';

const InputField = memo(({ name, error, value, placeholder, setValue, setWasTouched, isValid, errorMessage }) => {
  const handleChange = ({ target }) => {
    setWasTouched(false);
    setValue(target.value);
  };

  const classValidation = error ? classes.invalid : isValid ? classes.valid : '';

  return (
    <div className={classes.inputField}>
      <label htmlFor={name}>{name}</label>
      <input
        type='text'
        placeholder={placeholder}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={() => setWasTouched(true)}
        className={classValidation}
      />
      {error && <p className={classes.alert}>{errorMessage || 'Invalid value'}</p>}
    </div>
  );
});

const FormAddress = ({ compraFinalizada }) => {
  const { value: nome, isValid: nomeIsValid, error: nomeError, setValue: setNome, setWasTouched: setNomeWasTouched } = useInput((value) => value.trim() !== '');

  const cartState = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, []);

  const submitForm = (e) => {
    e.preventDefault();

    setNomeWasTouched(true);

    if (nomeIsValid) {
      compraFinalizada();
      navigate('/finalizado', { state: { nome, cartState } });
    } else {
      dispatch(alertVisibility('Fill out the form correctly.', 'bad'));
    }
  };

  return (
    <form onSubmit={submitForm} className={classes.form}>
      <InputField placeholder='Your Name' name='Name' value={nome} isValid={nomeIsValid} error={nomeError} setValue={setNome} setWasTouched={setNomeWasTouched} />
      <button className='btn-style'>Finalize Order</button>
    </form>
  );
};

export default FormAddress;
