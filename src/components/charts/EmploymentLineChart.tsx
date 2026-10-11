// src/components/charts/EmploymentLineChart.tsx
// Gráfico de línea: empleo agrícola provincial 2018-2021.
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface DataPoint {
  anio: string;
  trabajadores: number;
}

interface Props {
  data: DataPoint[];
}

export default function EmploymentLineChart({ data }: Props) {
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
  const gridColor = isDark ? "#334155" : "#e2e8f0";

  return (
    <div style={{ width: "100%", height: "350px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
          <XAxis
            dataKey="anio"
            tick={{ fill: axisColor, fontSize: 12, fontWeight: 500 }}
            axisLine={{ stroke: gridColor }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: tickColor, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            domain={[45000, 60000]}
            tickFormatter={(value: number) => `${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
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
              `${Number(value).toLocaleString("es-CL")} trabajadores`,
              "",
            ]}
            labelStyle={{
              color: isDark ? "#cbd5e1" : "#475569",
              marginBottom: "6px",
              fontWeight: 600,
            }}
          />
          <Line
            type="monotone"
            dataKey="trabajadores"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ fill: "#10b981", r: 6, strokeWidth: 2, stroke: isDark ? "#0f172a" : "#ffffff" }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}