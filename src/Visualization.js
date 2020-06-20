import React from 'react';
import data from './data.json';
import { ResponsiveCalendarCanvas } from '@nivo/calendar'

const MyResponsiveCalendarCanvas = () => (
    <ResponsiveCalendarCanvas
        data={data}
        from="2015-01-02"
        to="2020-05-26"
        emptyColor="#E7E7E7"
        colors={[ '#fef0d9', '#fdcc8a', '#fc8d59', '#d7301f' ]}
        minValue={1}
        margin={{ top: 30, right: 40, bottom: 50, left: 40 }}
        yearSpacing={20}
        yearLegendOffset={20}
        monthBorderColor="#ffffff"
        monthLegendOffset={5}
        dayBorderWidth={0}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 36,
                itemCount: 6,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
)

export default MyResponsiveCalendarCanvas;