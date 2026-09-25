import { useQuery } from "@tanstack/react-query";

const fetchProfile = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  if (!res.ok) {
    throw new Error("Profile fetch failed");
  }

  const rawProfile = await res.json();

  return {
    name: rawProfile.name,
    role: rawProfile.company.name,
  };
};

const fetchStats = async () => {
  const res = await fetch(
    "https://api.github.com/repos/facebook/react"
  );

  if (!res.ok) {
    throw new Error("Stats fetch failed");
  }

  const rawStats = await res.json();

  return {
    activeUsers: rawStats.stargazers_count,
    sales: rawStats.forks_count,
  };
};

export function Dashboard() {
  const {
    data: profile,
    isLoading: profileLoading,
    error: profileError,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });

  const {
    data: stats,
    isLoading: statsLoading,
    error: statsError,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: fetchStats,
  });

  if (profileLoading || statsLoading) {
    return <div>Loading dashboard...</div>;
  }

  if (profileError || statsError) {
    return (
      <div>
        Error loading dashboard:
        {profileError?.message || statsError?.message}
      </div>
    );
  }

  return (
    <div className="dashboard">
      <header>
        <h2>Welcome back, {profile.name}</h2>
        <p>{profile.role}</p>
      </header>

      <section className="stats-grid">
        <div className="stat-card">
          Active Users: {stats.activeUsers}
        </div>

        <div className="stat-card">
          Monthly Sales: ${stats.sales}
        </div>
      </section>
    </div>
  );
}