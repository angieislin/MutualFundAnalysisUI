import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Tabs } from '@mui/material';
import React, { ReactElement } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
           {children} 
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type CustomedTabsProps = {
  tabs: string[];
  children: ReactElement[];
};
function CustomedTabs({ tabs, children }: CustomedTabsProps) {
  const { themeConfig } = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Tabs
          value={value}
          onChange={handleChange}
          aria-label='customed-tabs'
          sx={{
            '& .MuiTabs-indicator': {
              bottom: '8px'
            }
          }}
        >
        {tabs.map((val,idx) => {
          return <Tab key={val} label={val} {...a11yProps(idx)} 
          sx={{
            '&.MuiButtonBase-root': {
              color: themeConfig.palette.secondary.main
            },
            '&.Mui-selected': {
              color: themeConfig.palette.primary.main, 
            }
          }} />
        })}  
        </Tabs>
        {
          tabs.map((val, idx) => {
            return (<CustomTabPanel key={val} value={value} index={idx}>
              {children[idx]}
            </CustomTabPanel>);
          })
        }
        
    </Box>
  );
}

export default CustomedTabs;