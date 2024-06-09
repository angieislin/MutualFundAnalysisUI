
import { Box, Button, CardActions, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FundInfo } from '../../models/Fund';

type SingleFundProps = {
  fund: FundInfo
};

function SingleFund({ fund }: SingleFundProps) {
  const navigate = useNavigate();
  const getDetail = useCallback(() => {
    navigate(`/fund/${fund.id}`);
  }, [navigate, fund.id]);
  return (<Card onClick={getDetail} sx={{ height: 200, padding: '20px' ,display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
    <CardContent>
      <Typography color='primary' variant='h6' gutterBottom>
        {fund.name} 
      </Typography>
      <Typography color='primary'  variant='subtitle1' gutterBottom>
        {fund.code} 
      </Typography>
    </CardContent> 
    <CardActions >
      <Button size='small' color='secondary' onClick={getDetail}>查看详细</Button>
    </CardActions>
  </Card>);
}

function FundEntry() {
  const [funds, setFunds] = useState<FundInfo[]>([]);
  useEffect(() => {
    const getFunds = async () => {
      const resp = await fetch('/mf/funds');
      const newFunds: FundInfo[] = await resp.json();
      setFunds(newFunds);
    };
    getFunds(); 
    return () => {};
  }, []);
  const grids = funds.map((fund) => {
    return (<Grid item xs={2} sm={4} md={4} key={fund.id}>
      <SingleFund fund={fund}></SingleFund>
    </Grid>);
  });
  return (
    <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <Divider orientation='vertical' variant='middle' flexItem />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}  sx={{ maxWidth: 1200}} >
        {grids}
      </Grid>
    </Box>
  );
}
export default FundEntry;