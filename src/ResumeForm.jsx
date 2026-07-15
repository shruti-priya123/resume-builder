function ResumeForm({ form, handle, color, colorOptions, setColor }) {
  return (
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

        {/* Color Picker */}
        <div className="mt-3">
          <span className="fw-semibold me-2">Theme Color:</span>
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
      </div>
    </div>
  )
}

export default ResumeForm
