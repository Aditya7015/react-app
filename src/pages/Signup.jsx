import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/profile')
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold">Create your PopX account</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: 'Full Name*', type: 'text' },
          { label: 'Phone number*', type: 'tel' },
          { label: 'Email address*', type: 'email' },
          { label: 'Password*', type: 'password' },
          { label: 'Company name', type: 'text' },
        ].map((field, idx) => (
          <div key={idx}>
            <label className="block text-sm text-primary font-medium mb-1">{field.label}</label>
            <input type={field.type} required={field.label.includes('*')}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"/>
          </div>
        ))}

        <div>
          <p className="text-sm text-primary font-medium mb-1">Are you an Agency?*</p>
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2">
              <input type="radio" name="agency" value="yes" defaultChecked />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="agency" value="no" />
              <span>No</span>
            </label>
          </div>
        </div>

        <button type="submit" className="w-full py-3 rounded-md bg-primary text-white font-medium">
          Create Account
        </button>
      </form>
    </div>
  )
}
