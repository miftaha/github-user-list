import { useState, useEffect } from 'react'

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchGithubUsers = async () => {
    setLoading(true)
    try {
      const res = await fetch('https://api.github.com/users')
      const data = await res.json()
      setUsers(data)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchGithubUsers()
  }, [])

  console.log(users)
  return (
    <section className="container mx-auto w-full py-[20px] ">
      <h1 className="font-bold text-2xl text-white text-center p-3">
        Github Users
      </h1>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  overflow-hidden py-4">
        {loading && <p className="text-center font-medium">Loading...</p>}
        {users.map((user) => (
          <div
            className="bg-slate-400 max-w[400px] sm:max-w[150px] rounded-2xl border shadow-2xl flex justify-start items-center gap-2 "
            key={user.id}
          >
            <img
              src={user.avatar_url}
              alt="user-profile"
              className="w-28 rounded-full m-3"
            />
            <span>
              <h4 className="uppercase mb-4 font-semibold text-2xl">
                {user.login}
              </h4>

              <a href={user.html_url}>view Profile</a>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Users
