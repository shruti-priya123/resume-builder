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

function ResumePreview({ form, color }) {
  return (
    <div className="col-md-7">
      <div className="card shadow resume-preview">
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
  )
}

export default ResumePreview
