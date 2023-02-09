import { ISensor } from "../../interface/interface";

export const findDataSensor = (data: ISensor[], sensor: string) => {
    return data.find((item: ISensor) => item.sensor === sensor)
}