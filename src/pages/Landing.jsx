import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="flex flex-col h-full justify-end p-6 space-y-4">
      <div>
        <h1 className="text-xl font-bold">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="space-y-3">
        <Link
          to="/signup"
          className="block w-full text-center py-3 rounded-md bg-primary text-white font-medium"
        >
          Create Account
        </Link>
        <Link
          to="/login"
          className="block w-full text-center py-3 rounded-md bg-secondary text-primary font-medium"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  )
}
