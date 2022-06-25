import React, { useState } from 'react';

const FormCheckout = () => {
  const [name, setName] = useState('');
  const [addres, setAddres] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const saveOrder = () => {
    console.log(name, addres, phone, email, password);
  };

  return (
    <div>
      <form action="">
        <div>
          <input
            value={name}
            type="text"
            name="name"
            placeholder="isi nama"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            value={addres}
            type="text"
            name="addres"
            placeholder="isi alamat"
            onChange={(e) => {
              setAddres(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            value={phone}
            type="number"
            name="phone"
            placeholder="isi nomor telp/wa"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            value={email}
            type="email"
            name="email"
            placeholder="isi email kamu"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            value={password}
            type="password"
            name="password"
            placeholder="isi password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button onClick={saveOrder} type="submit">
          Checkout
        </button>
      </form>
    </div>
  );
};

export default FormCheckout;
