import { useState } from 'react'
import './App.css'
import ResumeForm from './ResumeForm'
import ResumePreview from './ResumePreview'

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
  const [form, setForm] = useState(() => JSON.parse(localStorage.getItem('resumeForm')) || defaultData)
  const [color, setColor] = useState(localStorage.getItem('resumeColor') || '#1a73e8')

  const handle = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value }
    setForm(updated)
    localStorage.setItem('resumeForm', JSON.stringify(updated))
  }

  const handleColor = (val) => {
    setColor(val)
    localStorage.setItem('resumeColor', val)
  }

  return (
    <div className="container-fluid py-4">
      <div className="app-header text-center mb-4" style={{ background: color }}>
        <h2 className="fw-bold text-white py-3 mb-0">📄 Resume Builder</h2>
      </div>
      <div className="row g-4">
        <ResumeForm form={form} handle={handle} color={color} colorOptions={colorOptions} setColor={handleColor} />
        <ResumePreview form={form} color={color} />
      </div>
    </div>
  )
}

export default App
