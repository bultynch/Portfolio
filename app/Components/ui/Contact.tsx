'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaInstagram, FaSquareFacebook } from 'react-icons/fa6';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess('Mensaje enviado correctamente.');
      } else {
        setError('Error al enviar el mensaje.');
      }
    } catch (error) {
      setError('Hubo un problema al enviar el mensaje.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='px-2 md:px-4 py-4 w-full rounded-lg bg-texto2 flex flex-col md:flex-row items-center justify-center'>
      <div className='mb-2 w-full h-full flex md:flex-col items-center justify-between md:justify-center'>
        <h1 className='mb-2 text-3xl text-texto1 font-bold'>Contactame<span className='text-nombre1'>.</span></h1>
        <div className='gap-2 flex flex-row'>
          <Link href={'https://github.com/bultynch'}><FaLinkedinIn className='w-5 h-5 text-texto1 hover:text-nombre1'/></Link>
          <Link href={'https://github.com/bultynch'}><FaInstagram className='w-5 h-5 text-texto1 hover:text-nombre1'/></Link>
          <Link href={'https://github.com/bultynch'}><FaSquareFacebook className='w-5 h-5 text-texto1 hover:text-nombre1'/></Link>
        </div>
      </div>

      <form onSubmit={handleSubmit} className='gap-4 w-full flex flex-col justify-center rounded-lg shadow-sm'>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Nombre'
          className='px-2 w-full h-8 flex items-start justify-center text-sm text-black bg-bg1 border-b-2 rounded-lg outline-none'
        />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
          className='px-2 w-full h-8 flex items-start justify-center text-sm text-black bg-bg1 border-b-2 rounded-lg outline-none'
        />
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Mensaje'
          className='p-2 w-full h-40 flex items-start justify-center text-sm text-black bg-bg1 border-b-2 rounded-lg outline-none'
        ></textarea>
        <button
          type='submit'
          className='w-full h-16 flex items-center justify-center text-white text-lg font-semibold bg-nombre1 hover:scale-105 rounded-lg'
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      {error && <p className='text-red-500 mt-2'>{error}</p>}
      {success && <p className='text-green-500 mt-2'>{success}</p>}
    </div>
  );
}

export default Contact;
