// src/components/charts/FireHaChart.tsx
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface ComunaData {
  comuna: string;
  hectareas: number;
}

interface Props {
  data: ComunaData[];
}

export default function FireHaChart({ data }: Props) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const axisColor = isDark ? "#f1f5f9" : "#1e293b";
  const tickColor = isDark ? "#cbd5e1" : "#334155";
  const gridColor = isDark ? "#475569" : "#cbd5e1";

  const getBarColor = (index: number) => {
    if (index === 0) return "#dc2626";
    if (index === 1) return "#f97316";
    return isDark ? "#94a3b8" : "#64748b";
  };

  return (
    <div style={{ width: "100%", height: "350px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            type="number"
            tick={{ fill: tickColor, fontSize: 11 }}
            axisLine={{ stroke: gridColor }}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="comuna"
            tick={{ fill: axisColor, fontSize: 12, fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
            width={90}
          />
          <Tooltip
            cursor={{ fill: "rgba(220, 38, 38, 0.08)" }}
            contentStyle={{
              backgroundColor: isDark ? "#1e293b" : "#ffffff",
              border: `1px solid ${isDark ? "#475569" : "#cbd5e1"}`,
              borderRadius: "8px",
              color: isDark ? "#f1f5f9" : "#0f172a",
              fontSize: "13px",
              padding: "10px 14px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
            itemStyle={{ color: isDark ? "#f1f5f9" : "#0f172a" }}
            formatter={(value) => [
              `${Number(value).toLocaleString("es-CL")} ha`,
              "",
            ]}
            labelStyle={{
              color: isDark ? "#cbd5e1" : "#475569",
              marginBottom: "6px",
              fontWeight: 600,
            }}
          />
          <Bar dataKey="hectareas" radius={[0, 4, 4, 0]}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}