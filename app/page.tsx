import Card from "./components/Card";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import UserList from "./components/UserList";

export default function Home(){
  return <main>
    <h1>Home Page</h1>
    <Card title="Task 1" description="complete your homework"/>
    <Card title="Task 2" description="learn next.js with TypeScript" />
    <Counter />
    <UserList />
    <LoginForm />
  </main>
}