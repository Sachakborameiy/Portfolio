import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';
// import { Work } from '@material-ui/icons';
import './Timeline.scss';

const CustomTimeLine = ({ title, icon, children }) => {
    return (
            <Timeline className={'timeLine'}>
                {/* Item Header  */}
                <TimelineItem className={'timeLine_firstItem leading-6'}>
                    <TimelineSeparator>
                        <TimelineDot className={'timeLine_dot_header'}>
                            {icon}
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant='h6' className={'timeLine_header'}>{title}</Typography>
                    </TimelineContent>
                </TimelineItem>
                {/* End Item Header  */}

                { children }
            </Timeline>
    );
}

export const CustomTimeLineSeparator = () => (
    <TimelineSeparator className={'separator_padding'}>
        <TimelineDot variant='outlined' className={'timeLine_dot'}/>
        <TimelineConnector />
    </TimelineSeparator>
);

export default CustomTimeLine;
