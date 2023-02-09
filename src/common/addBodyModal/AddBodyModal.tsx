import { Box, TextField, Typography } from "@mui/material"
import React, { useImperativeHandle, useRef, useState } from "react"
import RadioGroupComponent from "../../component/radioGroup/RadioGroupComponent"
import { FormContainer, styleBox, styleBoxWidgetType, styleInputField } from "./AddBodyModalStyle"
import { raidoOptions, raidoSensorOptions } from "./constant"

const AddBodyModal = React.forwardRef((props, ref) => {
    const [widgetType, setWidgetType] = useState<string>("line");
    const [widgetData, setWidgetData] = useState<string>("Temperature");
    const widgetNameRef = useRef<any>();

    useImperativeHandle(ref, () => {
        return {
            getDataAddForm: () => ({
                widgetType,
                widgetData,
                widgetName: widgetNameRef?.current?.value
            })
        }
    }, [widgetData, widgetType])

    const handleChangeWidgetType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWidgetType((event.target as HTMLInputElement).value);
    }

    const handleChangeWidgetData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWidgetData((event.target as HTMLInputElement).value);
    }

    return (
        <Box
            component="form"
            sx={styleBox}
            autoComplete="off"
        >
            <FormContainer>
                <Box>
                    <Typography>
                        Widget name
                    </Typography>
                    <TextField
                        id="widget-name"
                        inputRef={widgetNameRef}
                        variant="outlined"
                        sx={styleInputField}
                        size="small"
                        required
                    />
                </Box>

                <Box sx={styleBoxWidgetType}>
                    <Typography>
                        Widget type
                    </Typography>
                    <RadioGroupComponent
                        value={widgetType}
                        options={raidoOptions}
                        handleChange={handleChangeWidgetType}
                    />
                </Box>

                <Box sx={styleBoxWidgetType}>
                    <Typography>
                        Widget data
                    </Typography>
                    <RadioGroupComponent
                        value={widgetData}
                        options={raidoSensorOptions}
                        handleChange={handleChangeWidgetData}
                    />
                </Box>
            </FormContainer>
        </Box>
    )
})
AddBodyModal.displayName = "AddBodyModal"
export default AddBodyModal