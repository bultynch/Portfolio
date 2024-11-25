'use client'
import React, { useState } from 'react';


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
    <div className='w-full || p-10 || border border-gray-200 rounded-xl shadow-sm dark:border-gray-500 || flex flex-col items-center justify-center'>


      <form onSubmit={handleSubmit} className='w-full || gap-4 || flex flex-col justify-center'>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Nombre'
          className='w-full h-10 || px-2 || flex items-start justify-center || text-sm text-black bg-texto1 border border-gray-200 shadow-sm rounded-md outline-none'
        />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
          className='w-full h-10 || px-2 || flex items-start justify-center || text-sm text-black bg-texto1 border border-gray-200 shadow-sm rounded-md outline-none'
        />
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Mensaje'
          className='w-full h-40 || p-2 || flex items-start justify-center || text-sm text-black bg-texto1 border border-gray-200 shadow-sm rounded-md outline-none'
        ></textarea>
        <button
          type='submit'
          className='w-full h-16 || text-white text-lg font-semibold rounded-lg bg-nombre1 border || flex items-center justify-center || hover:border-nombre1 hover:text-nombre1 hover:bg-bg1 dark:bg-components2 dark:hover:bg-bg1 dark:hover:text-components2 dark:border-components2 dark:hover:border-components2 || transition-colors duration-150'
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
