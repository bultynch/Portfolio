'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaSquareFacebook } from 'react-icons/fa6';

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
    <div className='w-full rounded-lg bg-red-400 flex flex-col md:flex-row items-center justify-center dark:bg-bg1'>

      <div className='mb-2 w-full h-full flex md:flex-col items-center justify-between md:justify-center'>
        <div className='gap-2 flex flex-row'>
          <Link href={'https://github.com/bultynch'}><FaLinkedin className='w-5 h-5 text-texto2 dark:text-texto2 hover:text-gray-600 dark:hover:text-components2'/></Link>
          <Link href={'https://github.com/bultynch'}><FaInstagram className='w-5 h-5 text-texto2 dark:text-texto2 hover:text-gray-600 dark:hover:text-components2'/></Link>
          <Link href={'https://github.com/bultynch'}><FaSquareFacebook className='w-5 h-5 text-texto2 dark:text-texto2 hover:text-gray-600 dark:hover:text-components2'/></Link>
        </div>
      </div>

      <form onSubmit={handleSubmit} className='gap-4 w-full flex flex-col justify-center'>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Nombre'
          className='px-2 w-full h-10 flex items-start justify-center text-sm text-black bg-bg1 border-b-2 rounded-lg outline-none dark:border-bg2 dark:rounded-none dark:text-white'
        />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
          className='px-2 w-full h-10 flex items-start justify-center text-sm text-black bg-bg1 border-b-2 rounded-lg outline-none dark:border-bg2 dark:rounded-none dark:text-white'
        />
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Mensaje'
          className='p-2 w-full h-40 flex items-start justify-center text-sm text-black bg-bg1 border-b-2 rounded-lg outline-none dark:border-bg2 dark:rounded-none'
        ></textarea>
        <button
          type='submit'
          className='w-full h-20 flex items-center justify-center text-white text-lg font-semibold rounded-lg bg-nombre1 dark:bg-components2 hover:text-nombre1 hover:bg-bg1 dark:hover:bg-bg1 dark:hover:text-components2 dark:hover:border border-texto2 transition-colors duration-150'
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
