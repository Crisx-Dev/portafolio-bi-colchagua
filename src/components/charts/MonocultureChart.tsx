// src/components/charts/MonocultureChart.tsx
// Gráfico de barras agrupadas: ventas totales vs. ventas sin carozos por comuna.
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface ComunaData {
  comuna: string;
  total: number;
  sinCarozos: number;
}

interface Props {
  data: ComunaData[];
}

export default function MonocultureChart({ data }: Props) {
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

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 10, bottom: 60 }}
        >
          <XAxis
            dataKey="comuna"
            tick={{ fill: axisColor, fontSize: 11, fontWeight: 500 }}
            axisLine={{ stroke: gridColor }}
            tickLine={false}
            angle={-35}
            textAnchor="end"
            height={70}
          />
          <YAxis
            tick={{ fill: tickColor, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value: number) => `${(value / 1000000).toFixed(0)}M`}
          />
          <Tooltip
            cursor={{ fill: "rgba(16, 185, 129, 0.05)" }}
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
            formatter={(value, name) => [
              `${Number(value).toLocaleString("es-CL")} UF`,
              name,
            ]}
            labelStyle={{
              color: isDark ? "#cbd5e1" : "#475569",
              marginBottom: "6px",
              fontWeight: 600,
            }}
          />
          <Legend
            wrapperStyle={{
              color: axisColor,
              fontSize: "12px",
              paddingTop: "10px",
            }}
            iconType="square"
          />
          <Bar
            dataKey="total"
            name="Ventas del sector agro"
            fill="#3b82f6"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            dataKey="sinCarozos"
            name="Ventas sin carozos"
            fill="#ef4444"
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}