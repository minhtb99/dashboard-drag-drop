import AddIcon from '@mui/icons-material/Add'
import { Box, FormControl } from "@mui/material"
import { useCallback, useEffect, useRef, useState } from "react"
import AddBodyModal from '../../common/addBodyModal/AddBodyModal'
import Header from "../../common/header/Header"
import DropDrag from '../../component/gridLayout/GridLayout'
import ModalComponent from "../../component/modal/Modal"
import RadioGroupComponent from "../../component/radioGroup/RadioGroupComponent"
import { ISensor, IWidget } from '../../interface/interface'
import genId from '../../utilities/genId'
import { raidoOptions } from "./constant"
import { AddButton, addButtonStyle, DashboardBody, DashboardContainer } from "./DashboardStyle"

const mockData: ISensor[] = [
    {
        sensorId: 1,
        sensor: "Temperature",
        historicalData: [
            10,
            20,
            40,
            30,
            15
        ],
        value: 15,
        unit: "°C"
    },
    {
        sensorId: 2,
        sensor: "Intensity",
        historicalData: [
            1,
            3,
            20,
            40,
            50
        ],
        value: 50,
        unit: "g"
    },
    {
        sensorId: 3,
        sensor: "Feeding",
        historicalData: [
            53,
            83,
            43,
            73,
            68
        ],
        value: 35,
        unit: "%"
    },
    {
        sensorId: 4,
        sensor: "Oxygen",
        historicalData: [
            53,
            83,
            43,
            73,
            68
        ],
        value: 35,
        unit: "%"
    }]

const Dashboard = () => {
    const [openModalSettingTime, setOpenModalSettingTime] = useState<boolean>(false)
    const [openModalAdd, setopenModalAdd] = useState<boolean>(false)
    const [settingTime, setSettingTime] = useState<string>("5")
    const [dataSensorApi, setDataSensorApi] = useState<ISensor[]>([])
    const [listWidget, setListWidget] = useState<IWidget[]>([])

    const ref = useRef<any>(null)

    useEffect(() => {
        const timeSetting = localStorage.getItem("time")
        if (timeSetting) {
            setSettingTime(timeSetting)
        }
    }, [])

    const onClickSetting = () => {
        setOpenModalSettingTime(true)
    }

    const onClickAdd = () => {
        setopenModalAdd(true)
    }

    const handleCloseModal = () => {
        setOpenModalSettingTime(false)
    }

    const handleChangeSetting = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSettingTime((event.target as HTMLInputElement).value);
    };

    const handleOke = useCallback(() => {
        localStorage.setItem("time", settingTime)
        setOpenModalSettingTime(false)
    }, [settingTime])

    const getSensorsApi = useCallback(async () => {
        // const data = await getSensors()
        if (mockData) {
            setDataSensorApi(mockData)
        }
    }, [])

    useEffect(() => {
        getSensorsApi()
    }, [getSensorsApi])


    const handleOkeAddModal = useCallback(() => {
        const widgetNew = ref.current?.getDataAddForm()

        if (dataSensorApi.length) {
            const foundWidgetSensor = dataSensorApi.find((item: ISensor) => item.sensor === widgetNew.widgetData)
            const widgetSensorHistoricalData = foundWidgetSensor?.historicalData
            if (widgetSensorHistoricalData) {
                const widgetSensorData = {
                    labels: ['5m', '10m', '15m', '20m', "25m"],
                    datasets: [
                        {
                            label: foundWidgetSensor?.unit,
                            data: [...widgetSensorHistoricalData],
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        }
                    ],
                }
                const dataAddNewWidget = [
                    ...listWidget,
                    {
                        widgetId: genId(),
                        widgetName: widgetNew.widgetName,
                        widgetType: widgetNew.widgetType,
                        widgetSensorData,
                        currentValue: foundWidgetSensor.value,
                        unit: foundWidgetSensor?.unit
                    }
                ]

                setListWidget(dataAddNewWidget)
            }
        }
        setopenModalAdd(false)
    }, [dataSensorApi, listWidget])

    const handleCloseAddModal = () => {
        setopenModalAdd(false)
    }


    return (
        <DashboardContainer>
            <Header onClickSetting={onClickSetting} />
            <DashboardBody>
                <Box sx={{ padding: "14px 0px 0px 14px" }} >
                    <DropDrag data={listWidget} setListWidget={setListWidget} />
                </Box>

                <AddButton onClick={onClickAdd}>
                    <AddIcon
                        sx={addButtonStyle}
                        color="inherit"
                    />
                </AddButton>
            </DashboardBody>

            <ModalComponent
                open={openModalAdd}
                headerTitle="Add new widget"
                handleOke={handleOkeAddModal}
                handleClose={handleCloseAddModal}
                body={<AddBodyModal ref={ref} />}
            />

            <ModalComponent
                open={openModalSettingTime}
                handleClose={handleCloseModal}
                handleOke={handleOke}
                headerTitle="Setting"
                body={(
                    <FormControl sx={{
                        width: "100%",
                        marginTop: "32px"
                    }}>
                        <RadioGroupComponent
                            value={settingTime}
                            options={raidoOptions}
                            handleChange={handleChangeSetting}
                        />
                    </FormControl>
                )}
            />
        </DashboardContainer>
    )
}

export default Dashboard