import React from 'react'

interface ContactFormData {
  name: string
  email: string
  phone: string
  eventType: string
  date: string
  message: string
  refferer: string
}

export function ClientConfirmationEmail({ name }: { name: string }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#f5f3f0', padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#6b4423', fontSize: '28px', margin: '0 0 20px 0' }}>
          Thank You for Reaching Out!
        </h1>
        <div style={{ width: '60px', height: '2px', backgroundColor: '#d4af37', margin: '0 auto' }}></div>
      </div>

      <div style={{ padding: '40px 20px', backgroundColor: '#ffffff' }}>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', marginBottom: '20px' }}>
          Hi {name},
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', marginBottom: '20px' }}>
          Thank you for your interest in my photography services! I&apos;ve received your message and I&apos;m excited to learn more about your special moment.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', marginBottom: '20px' }}>
          I&apos;ll review your details and get back to you within 24 hours with more information about how we can capture your vision perfectly.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', marginBottom: '30px' }}>
          In the meantime, feel free to check out my latest work on Instagram
          {' '}<a href="https://instagram.com/kevinesutandi" style={{ color: '#6b4423' }}>@kevinesutandi</a> {' '}
          or browse my full gallery at
          {' '}<a href="https://gallery.kevinsutandi.com" style={{ color: '#6b4423' }}>gallery.kevinsutandi.com</a> {' '}.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
          Looking forward to creating something beautiful together!
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', marginTop: '30px' }}>
          Best regards,<br />
          <strong style={{ color: '#6b4423' }}>Kevin Sutandi</strong><br />
        </p>
      </div>

      <div style={{ backgroundColor: '#f5f3f0', padding: '20px', textAlign: 'center' }}>
        <p style={{ color: '#6b4423', fontSize: '14px', margin: '0' }}>
          📧 kevinesutandi@gmail.com | 📱 +61 412 123 138 | 📍 Sydney, Australia
        </p>
      </div>
    </div>
  )
}

export function AdminNotificationEmail({ formData }: { formData: ContactFormData }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#f5f3f0', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: '#6b4423', fontSize: '24px', margin: '0' }}>
          New Contact Form Submission
        </h1>
      </div>

      <div style={{ padding: '30px 20px', backgroundColor: '#ffffff' }}>
        <h2 style={{ color: '#6b4423', fontSize: '20px', marginBottom: '20px' }}>
          Contact Details
        </h2>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tr>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold', color: '#6b4423', width: '30%' }}>
              Name:
            </td>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
              {formData.name}
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold', color: '#6b4423' }}>
              Email:
            </td>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
              <a href={`mailto:${formData.email}`} style={{ color: '#6b4423' }}>{formData.email}</a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold', color: '#6b4423' }}>
              Phone:
            </td>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
              {formData.phone || "Not provided"}
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold', color: '#6b4423' }}>
              Event Type:
            </td>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
              {formData.eventType}
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold', color: '#6b4423' }}>
              Preferred Date:
            </td>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
              {new Date(formData.date).toLocaleString()}
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontWeight: 'bold', color: '#6b4423' }}>
              Referrer:
            </td>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
              {formData.refferer || "Not provided"}
            </td>
          </tr>
        </table>

        <h3 style={{ color: '#6b4423', fontSize: '18px', marginTop: '30px', marginBottom: '15px' }}>
          Client&apos;s Vision:
        </h3>
        <div style={{ backgroundColor: '#f5f3f0', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #d4af37' }}>
          <p style={{ margin: '0', lineHeight: '1.6', color: '#333' }}>
            {formData.message}
          </p>
        </div>

        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
          <p style={{ margin: '0', fontSize: '14px', color: '#1e40af' }}>
            💡 <strong>Quick Actions:</strong><br />
            • Reply to <a href={`mailto:${formData.email}`} style={{ color: '#1e40af' }}>{formData.email}</a><br />
            • Call/WhatsApp: {formData.phone || "No phone provided"}<br />
            • Event: {formData.eventType} on {new Date(formData.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  )
} 