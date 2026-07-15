import { useState } from 'react'
import './App.css'

const defaultData = {
  name: '',
  email: '',
  phone: '',
  address: '',
  summary: '',
  experience: '',
  education: '',
  skills: '',
  projects: '',
}

const colorOptions = [
  { label: 'Blue', value: '#1a73e8' },
  { label: 'Purple', value: '#7c3aed' },
  { label: 'Green', value: '#16a34a' },
  { label: 'Red', value: '#dc2626' },
  { label: 'Orange', value: '#ea580c' },
  { label: 'Teal', value: '#0d9488' },
]

function App() {
  const [form, setForm] = useState(defaultData)
  const [color, setColor] = useState('#1a73e8')

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div className="container-fluid py-4">
      <div className="app-header text-center mb-4" style={{ background: color }}>
        <h2 className="fw-bold text-white py-3 mb-0">📄 Resume Builder</h2>
      </div>

      {/* Color Picker */}
      <div className="text-center mb-4">
        <span className="me-2 fw-semibold">Theme Color:</span>
        {colorOptions.map((c) => (
          <button
            key={c.value}
            className="color-btn me-2"
            style={{ background: c.value, border: color === c.value ? '3px solid #000' : '3px solid transparent' }}
            onClick={() => setColor(c.value)}
            title={c.label}
          />
        ))}
      </div>

      <div className="row g-4">
        {/* Form */}
        <div className="col-md-5">
          <div className="card p-4 shadow-sm form-card">
            <h5 className="section-form-title" style={{ color }}>Personal Info</h5>
            {['name', 'email', 'phone', 'address'].map((field) => (
              <div className="mb-3" key={field}>
                <label className="form-label text-capitalize fw-semibold">{field}</label>
                <input
                  className="form-control"
                  name={field}
                  value={form[field]}
                  onChange={handle}
                  placeholder={`Enter your ${field}`}
                />
              </div>
            ))}
            <h5 className="section-form-title mt-3" style={{ color }}>Details</h5>
            {['summary', 'experience', 'education', 'skills', 'projects'].map((field) => (
              <div className="mb-3" key={field}>
                <label className="form-label text-capitalize fw-semibold">{field}</label>
                <textarea
                  className="form-control"
                  name={field}
                  value={form[field]}
                  onChange={handle}
                  rows={3}
                  placeholder={`Enter your ${field}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Preview */}
        <div className="col-md-7">
          <div className="card shadow resume-preview">
            {/* Resume Header */}
            <div className="resume-header p-4 text-white" style={{ background: color }}>
              <h3 className="fw-bold mb-1">{form.name || 'Your Name'}</h3>
              <p className="mb-0 opacity-75">
                {form.email || 'email@example.com'}
                {form.phone && ` | ${form.phone}`}
              </p>
              {form.address && <p className="mb-0 opacity-75">{form.address}</p>}
            </div>

            <div className="p-4">
              {form.summary && <Section title="Summary" content={form.summary} color={color} />}
              {form.experience && <Section title="Experience" content={form.experience} color={color} />}
              {form.education && <Section title="Education" content={form.education} color={color} />}
              {form.projects && <Section title="Projects" content={form.projects} color={color} />}
              {form.skills && <Section title="Skills" content={form.skills} color={color} isSkills />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section({ title, content, color, isSkills }) {
  return (
    <div className="mb-4">
      <h5 className="section-title" style={{ color, borderBottomColor: color }}>{title}</h5>
      {isSkills ? (
        <div className="d-flex flex-wrap gap-2 mt-2">
          {content.split(',').map((skill, i) => (
            <span key={i} className="skill-badge" style={{ background: color + '20', color }}>
              {skill.trim()}
            </span>
          ))}
        </div>
      ) : (
        <p style={{ whiteSpace: 'pre-line' }}>{content}</p>
      )}
    </div>
  )
}

export default App
