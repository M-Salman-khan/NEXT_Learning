export default function UserProfile({ params }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <p>Username: {params.username}</p>
    </div>
  )
}
