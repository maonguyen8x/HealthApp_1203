import { Chart } from "chart.js";
import { useEffect, useRef } from "react";
import ChallengeView from "../../layout/views/Challenge";

const Challenge = () => {
  const chartRef = useRef<any>();

  useEffect(() => {
    const config: any = {
      type: "line",
      data: {
        labels: ["spend", "cpa", "customer", "revenue", "gross profit"],
        datasets: [
          {
            label: "UK - PPC",
            fill: false,
            lineTension: 0.4,
            pointBorderWidth: 2,
            data: ["10000", "200", "3500", "600", "120"],
          },
          {
            label: "UK - Paid Social",
            fill: false,
            lineTension: 0.4,
            pointBorderWidth: 2,
            data: ["100", "2000", "500", "-1000", "27000"],
          },
        ],
      },
    };
    const chart = new Chart(chartRef.current, config);
    return () => {
      chart.destroy();
    };
  }, []);

  return <ChallengeView />;
};

export default Challenge;
