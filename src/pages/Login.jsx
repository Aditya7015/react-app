import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/profile')
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-xl font-bold">Signin to your PopX account</h1>
        <p className="text-gray-500 text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-primary font-medium mb-1">Email Address</label>
          <input type="email" placeholder="Enter email address" required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"/>
        </div>
        <div>
          <label className="block text-sm text-primary font-medium mb-1">Password</label>
          <input type="password" placeholder="Enter password" required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"/>
        </div>
        <button type="submit" className="w-full py-3 rounded-md bg-gray-300 text-gray-600 font-medium">
          Login
        </button>
      </form>
    </div>
  )
}
