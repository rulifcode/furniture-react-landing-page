import useStats from "../hooks/useStats";
import "../styles/Stats.css";

export default function Stats() {
  const { data, isLoading } = useStats();

  if (isLoading) return null;

  return (
    <section className="stats">
      {data.map((item, i) => (
        <div key={i} className="stat-item">
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
}
