import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Validar datos
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios.' });
    }

    try {
      // Configuración de Nodemailer
      let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USER, // Correo electrónico autorizado
          pass: process.env.EMAIL_PASS, // Contraseña o contraseña de aplicación
        },
      });

      // Configurar el correo
      const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`, // Tu dirección de correo
        replyTo: email, // Responder al correo del usuario
        to: process.env.EMAIL_USER, // Tu dirección de correo
        subject: `Nuevo mensaje de ${name}`,
        text: message,
        html: `
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        `,
      };

      // Enviar el correo
      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true, message: 'Correo enviado correctamente.' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ success: false, message: 'Hubo un problema al enviar el correo.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Método no permitido.' });
  }
}
