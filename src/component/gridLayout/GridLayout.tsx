import { FunctionComponent, useCallback, useMemo } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { IWidget } from "../../interface/interface";
import LineChartWidget from "../../widget/lineChartWidget/LineChartWidget";
import SingleValue from "../../widget/singleValue/SingleValue";
import { layout } from "./constants";
import { CloseButton } from "./GridLayoutStyle";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    data: IWidget[],
    setListWidget: any
}


const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DropDrag: FunctionComponent<Props> = ({ data, setListWidget }) => {
    const layouts = useMemo(() => {
        return ({
            lg: data.map((item) => (
                {
                    w: 4,
                    h: 4,
                    x: 2,
                    y: 0,
                    i: item.widgetId,
                }
            ))
        })
    }, [data])

    const deleteWidget = useCallback((id: string) => {
        const newData = data.filter((item) => item.widgetId !== id)
        setListWidget(newData)
    }, [data, setListWidget])

    const genDom = useCallback(() => {
        return data.map((item) => (
            <div
                key={item.widgetId}
                style={{ background: "#d9e6f1", position: "relative" }}
            >
                <CloseButton onClick={() => { deleteWidget(item.widgetId) }} ><CloseIcon /></CloseButton>
                {item.widgetType === "line" ?
                    (<LineChartWidget name={item.widgetName} data={item.widgetSensorData} />)
                    : (<SingleValue name={item.widgetName} value={item.currentValue + " " + item.unit} />)
                }
            </div>
        ))
    },
        [data, deleteWidget],
    )

    return (
        <>
            <div>
                <ResponsiveReactGridLayout
                    // className="layout"
                    breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
                    cols={{ lg: 4, md: 10, sm: 6, xs: 4, xxs: 2 }}
                    style={{ background: "#fff" }}
                    // compactType="vertical"
                    // preventCollision={false}
                    layouts={layout}
                    // measureBeforeMount={false}
                    // useCSSTransforms={true}
                    // isDroppable
                    rowHeight={250}
                    // onLayoutChange={onLayoutChange}
                    // onBreakpointChange={onBreakpointChange}
                    // onDrop={onDrop}
                    containerPadding={[0, 0]}
                    width={1000}
                >
                    {genDom()}
                </ResponsiveReactGridLayout>
                {console.log("dasd", layouts) as any
                }
            </div>
        </>
    );
};

export default DropDrag;