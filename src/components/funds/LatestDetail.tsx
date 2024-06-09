import { CardContent, Divider, Typography } from '@mui/material';
import { FundDetail } from '../../models/Fund';
import { getFormattedDate } from '../../utils/DateUtils';
import { isLessThanZero } from '../../utils/DataUtils';
import { useTheme } from '../../context/ThemeContext';
type LatestDetailProps = {
  fundDetail: FundDetail;
};

function LatestDetail({ fundDetail }: LatestDetailProps) {
  const { themeConfig } = useTheme();
  return (
    <CardContent>
      <Typography variant='h5' color='primary' component='div'>
        {fundDetail.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color='primary' >
        {fundDetail.code}
      </Typography>
      <Typography sx={{ fontSize: 14 }}  color='primary'  gutterBottom>
        单位净值({getFormattedDate(new Date())})
      </Typography>
      <Typography variant='h5' component='div' style={{ color:  themeConfig.palette.success.main, marginBottom: '5px' }}>
        {fundDetail.latestNetAssetValue}
      </Typography>

      <Typography variant='body2' color='secondary' >
        类型： <Typography color='primary' component='span'>{fundDetail.type}</Typography>
        <br />
        基金经理： <Typography color='primary' component='span'>{fundDetail.manager}</Typography>
        <br />
        成立日： <Typography color='primary' component='span'>{fundDetail.establishDate}</Typography>
        </Typography>
        <Divider  flexItem sx={{marginTop: 2, marginBottom: 2}}/>
        <Typography color='secondary'>
        近1月： <Typography color='primary' component='span' variant='body2' style={{ color: isLessThanZero(fundDetail.lastOneMonthReturn) ? themeConfig.palette.info.main: themeConfig.palette.success.main}}>{fundDetail.lastOneMonthReturn}</Typography>
        <br />
        近3月： <Typography color='primary' component='span' variant='body2' style={{ color: isLessThanZero(fundDetail.lastThreeMonthReturn) ? themeConfig.palette.info.main: themeConfig.palette.success.main }}>{fundDetail.lastThreeMonthReturn}</Typography>
        <br />
        近6月： <Typography component='span' variant='body2' style={{ color: isLessThanZero(fundDetail.lastSixMonthReturn) ? themeConfig.palette.info.main: themeConfig.palette.success.main  }}>{fundDetail.lastSixMonthReturn}</Typography>
        <br />
        近1年： <Typography component='span' variant='body2' style={{ color: isLessThanZero(fundDetail.lastOneYearReturn) ? themeConfig.palette.info.main: themeConfig.palette.success.main  }}>{fundDetail.lastOneYearReturn}</Typography>
        <br />
        近3年： <Typography component='span' variant='body2' style={{ color: isLessThanZero(fundDetail.lastThreeYearReturn) ? themeConfig.palette.info.main: themeConfig.palette.success.main }}>{fundDetail.lastThreeYearReturn}</Typography>
        <br />
        成立来： <Typography component='span' variant='body2' style={{ color: isLessThanZero(fundDetail.sinceEstablishmentReturn) ? themeConfig.palette.info.main: themeConfig.palette.success.main  }}>{fundDetail.sinceEstablishmentReturn}</Typography>
      </Typography>
    </CardContent>
  );
}

export default LatestDetail;
