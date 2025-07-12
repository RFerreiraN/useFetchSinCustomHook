import { useEffect, useState } from 'react';

export const FetchComponent = () => {

  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(false)

  const getFetch = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
      const data = await response.json()
      console.log(data)
      setUsers(data)
      setIsLoading(false)

    } catch (error) {
      setIsLoading(false)
      setErrors(true)
    }

  }

  useEffect(() => {
    getFetch()
  }, [])

  return (
    <>
      <h1>Datos Usuarios</h1>
      <hr />
      {isLoading
        ? <div className="spinner-grow text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        : errors
          ? <div className="alert alert-danger text-center my-4" role="alert">
            Ocurrió un error al cargar los datos. Intenta nuevamente más tarde.
          </div>
          : <table className="table table-info">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user =>
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>
              )}

            </tbody>
          </table>
      }

    </>
  )
}
