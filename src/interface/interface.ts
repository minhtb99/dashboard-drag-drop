import {
    ChartData,
} from 'chart.js';


export interface ISensor {
    sensorId: number,
    sensor: string,
    historicalData: number[],
    value: number,
    unit: string
}

export interface IWidget {
    widgetId: string,
    widgetName: string,
    widgetType: string,
    widgetSensorData: ChartData<"line", number[], string>
    currentValue:number,
    unit:string
}