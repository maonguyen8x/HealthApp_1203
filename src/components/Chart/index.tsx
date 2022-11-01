import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { CHART_DATA, CHART_OPPTION } from "src/constant";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart = ({ className }: { className?: string }) => {
    return (
    <Line
        className={className}
        options={CHART_OPPTION}
        data={CHART_DATA}
    />
    );
};

export default Chart;
