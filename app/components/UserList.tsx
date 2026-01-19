import { link } from "fs"

type User = {
    id: number,
    name: string
}

export default async function UserList() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json()

    return (
        <div style={{ marginTop: '2rem' }}>
            <h1>User List (Server Component)</h1>
            <ul>{
                users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))
            }</ul>
        </div>
    )

}