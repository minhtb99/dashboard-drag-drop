import { Typography } from "@mui/material"
import LineChart from "../../component/lineChart/LineChart"
import { ChartContainer } from "./LineChartWidgetStyle"
import {
    ChartData,
} from 'chart.js';

interface Props {
    name: string
    data:ChartData<"line", number[], string>
}

const LineChartWidget = ({ name,data }: Props) => {
    return (
        <ChartContainer>
            <Typography sx={{ textAlign: "center" }}>
                {name}
            </Typography>
            <LineChart data={data} />
        </ChartContainer>
    )
}
export default LineChartWidget