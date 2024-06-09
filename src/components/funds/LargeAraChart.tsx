import PeriodSelection from './PeriodSelection';
import ReactECharts from 'echarts-for-react';
import { useMemo, useState } from 'react';
import { getFormattedDate, getThreeMonthAgoDate } from '../../utils/DateUtils';
import { getAreaChartConfig } from '../../config/EchartConfig';
import { Box } from '@mui/material';
import { useTheme } from '../../context/ThemeContext';

type LargeAraChartProps = {
  data: [string, number][],
};

const LargeAraChart =  ({ data  }: LargeAraChartProps) => {
  const { themeConfig } = useTheme();
  const [initialValue, setInitialValue] = useState(1);
  const [startDate, setStartDate] = useState(getThreeMonthAgoDate(new Date()));
  const [endDate, setEndDate] = useState(getFormattedDate(new Date()));
  function onPeriodChange(sd, ed) {
    setStartDate(sd);
    setEndDate(ed);
  }

  const onEvents = {
    'dataZoom': () => {
      setInitialValue(8);
    }
  };
  
  const option = useMemo(() => getAreaChartConfig({ data, startDate, endDate, themeConfig }), [ data, startDate, endDate, themeConfig]);

  return (
    <Box sx={{width: '100%'}}>
      <PeriodSelection onPeriodChange={onPeriodChange} initialValue={initialValue} updateInitialValue={(val) => { setInitialValue(val)}}/>
      <ReactECharts option={option} opts={{height: 'auto'}} onEvents={onEvents}/>
    </Box>
  );
 
};

export default LargeAraChart;