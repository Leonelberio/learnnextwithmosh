
interface User {
  id: number,
  name: string
}

const UsersPage = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/users', 
// {cache: 'no-store'},
// {next: {revalidate: 10}}


)

;
const users: User[] = await res.json();

  return (
<>
<h1 className="p-4 font-bold text-2xl">Users</h1>
<ul>
{users.map(user => <li key={user.id}>{user.name}</li>)}
</ul>
</>  )
}



export default UsersPage