import { Tab, Tabs } from '@mui/material';
import { getFirstDateThisYear, getFiveYearAgoDate, getFormattedDate, getOneMonthAgoDate, getOneYearAgoDate, getSixMonthAgoDate, getThreeMonthAgoDate, getThreeYearAgoDate } from '../../utils/DateUtils';
import { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

type PeriodSelectionProps = {
  onPeriodChange: (sd, end) => void,
  initialValue: number,
  updateInitialValue: (val) => void,
}

const PeriodSelection = ({ onPeriodChange, initialValue, updateInitialValue }: PeriodSelectionProps) => {
  const { themeConfig } = useTheme();
  const [value, setValue] = useState(initialValue);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    updateInitialValue(newValue);
    onPeriodChange(times[newValue].startDate,getFormattedDate(new Date()));
  };
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  const times = [{
    name: '1月',
    startDate: getOneMonthAgoDate(new Date())
  }, {
    name: '3月',
    startDate: getThreeMonthAgoDate(new Date())
  }, {
    name: '6月',
    startDate: getSixMonthAgoDate(new Date())
  }, {
    name: '1年',
    startDate: getOneYearAgoDate(new Date())
  }, {
    name: '3年',
    startDate: getThreeYearAgoDate(new Date())
  }, {
    name: '5年',
    startDate: getFiveYearAgoDate(new Date())
  }, {
    name: '今年来',
    startDate: getFirstDateThisYear(new Date())
  }, {
    name: '成立来',
    startDate: undefined
  }];
  return (
    <> 
      <Tabs value={value} onChange={handleChange} textColor='secondary'  centered sx={{marginLeft: -5, '& .MuiTabs-indicator': { display: 'none'} }}>
        {times.map((time) => {
          return (
            <Tab label={time.name}  color='secondary' sx={{ 
              minWidth: 45, minHeight: 24, padding: '0px 10px',
              '&.MuiButtonBase-root': {
                color: themeConfig.palette.secondary.main
              },
              '&.Mui-selected': {
                 backgroundColor: themeConfig.palette.primary.main, 
                 color: themeConfig.palette.secondary.light, 
              }
            }} key={time.name}/>
          );
        })}
        <Tab key='empty' sx={{ minWidth: 45,  minHeight: 24,  padding: '0px 10px' }}></Tab>
      </Tabs>
    </>
  );
}

export default PeriodSelection;