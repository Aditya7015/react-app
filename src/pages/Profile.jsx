export default function Profile() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Account Settings</h1>

      <div className="border rounded-md p-4 flex items-start space-x-4">
        <img
          src="https://via.placeholder.com/64"
          alt="avatar"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold">Marry Doe</h2>
          <p className="text-sm text-gray-500">Marry@gmail.com</p>
          <p className="mt-2 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat.
          </p>
        </div>
      </div>
    </div>
  )
}
