export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <aside style={{ width: "200px", background: "#eee" }}>
        <p>Dashboard Menu</p>
      </aside>

      <main>{children}</main>
    </div>
  );
}
