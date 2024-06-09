import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StockHoldingDetail } from '../../models/Fund';
import { isLessThanZero } from '../../utils/DataUtils';
import { useTheme } from '../../context/ThemeContext';

type HoldingDetailProps = {
  holdings: StockHoldingDetail[]
};
export default function HoldingDetail({ holdings }: HoldingDetailProps) {
  const { themeConfig } = useTheme();
  return (
    <TableContainer >
      <Table size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow sx={{ 'td, th': { 
            border: 0,
            color: themeConfig.palette.secondary.main, 
            backgroundColor: themeConfig.palette.primary.contrastText
            } }}>
            <TableCell align='left'>股票名称</TableCell>
            <TableCell align='left'>持仓比例</TableCell>
            <TableCell align='left'>涨跌幅</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {holdings.map((holding) => (
            <TableRow
              key={holding.stockName}
              sx={{ 
                 'td, th': { border: 0 }, 
                 '&:nth-child(even)': {
                  backgroundColor: themeConfig.palette.primary.contrastText
              } }}
            > 
              <TableCell align='left' style={{ color: themeConfig.palette.primary.main }}>{holding.stockName}</TableCell>
              <TableCell align='left' style={{ color: themeConfig.palette.secondary.main }}>{holding.percent}</TableCell>
              <TableCell align='left' style={{ color: isLessThanZero(holding.quoteChange) ? themeConfig.palette.info.main: themeConfig.palette.success.main }}>{holding.quoteChange}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
