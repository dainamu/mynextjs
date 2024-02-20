export default function DashboardLayout({
  children,
  users,
  notifications,
  revenueMetrics,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  revenueMetrics: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn: boolean = false;
  return isLoggedIn ? (
    <>
      <div>
        <div>{children}</div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{users}</div>
            <div>{revenueMetrics}</div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
        </div>
      </div>
    </>
  ) : (
    login
  );
}
