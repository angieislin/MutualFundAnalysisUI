import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Card, CardContent, Divider } from '@mui/material';
import LargeAraChart from './LargeAraChart';
import HoldingDetail from './HoldingDetail';
import LatestDetail from './LatestDetail';
import fetchFundData from '../../data/fetchFundData';
import CustomedTabs from '../common/CustomedTab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const tabs = ['单位净值', '股票持仓'];
function FunctionDetail() {
  const navigate = useNavigate();
  const { fundId } = useParams();
  const [resource, setResource] = useState<any>();
  const getFundData = useCallback(() => {
    const nr = fetchFundData(`/mf/funds/${fundId}`);
    setResource(nr);
  }, [fundId]);
  useEffect(() => {
    getFundData();
    return () => {};
  }, [getFundData]);
  const back = useCallback(() => {
    navigate(`/`);
  }, [navigate]);
  const fundDetail = resource && resource.read();
  const chartData = useMemo(() => {
    return (fundDetail || { netAssetValues: [] }).netAssetValues.map((row) => {
      return [row.date, row.value] as [string, number];
    });
  }, [fundDetail]);

  if (!fundDetail) {
    return <></>;
  }
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Card sx={{ height: 450, padding: 5 }}>
        <CardContent>
          <Box
            sx={{
              width: 1050,
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
          >
            <Box
              sx={{
                width: 350,
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'row',
                position: 'relative'
              }}
            >
              <LatestDetail fundDetail={fundDetail}></LatestDetail>
              <Box sx={{
                position: 'absolute',
                left: '-30px',
                top: '-30px'
              }}>
                <ArrowBackIcon color='secondary' onClick={back} sx={{cursor: 'pointer'}}/> 
              </Box>
       
            </Box>
            <Divider
              orientation='vertical'
              flexItem
              sx={{ marginLeft: 2, marginRight: 2 }}
            />
            <Box
              sx={{
                width: 700,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
              }}
            >
              <CustomedTabs tabs={tabs}>
                <LargeAraChart key={tabs[0]} data={chartData}></LargeAraChart>
                <HoldingDetail
                  key={tabs[1]}
                  holdings={fundDetail.stockHoldings}
                ></HoldingDetail>
              </CustomedTabs>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default FunctionDetail;
