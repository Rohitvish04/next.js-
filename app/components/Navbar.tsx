import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "10px" }}>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard/settings">settings</Link>
    </nav>
  );
}
