import BoxHeader from '@/components/BoxHeader'
import DashboardBox from '@/components/DashboardBox'
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/state/api'
import { Box, Typography, useTheme } from '@mui/material';
import { Cell, Pie, PieChart } from 'recharts';
import FlexBetween from '@/components/FlexBetween';
import { useMemo } from 'react';

const Row3 = () => {

    const { palette } = useTheme()
    const pieColors = [palette.primary[800], palette.primary[500]]
    const { data: kpiData} = useGetKpisQuery()
    const { data: productData} = useGetProductsQuery()
    const { data: transactionData} = useGetTransactionsQuery()

    const pieChartData = useMemo(() => {
        if(kpiData){
            const totalExpenses = kpiData[0].totalExpenses
            return Object.entries(kpiData[0].expensesByCategory).map(
            ([key, value]) => {
                return[
                    {
                        name: key,
                        value: value,
                    },
                    {
                        name: `${key} of Total`,
                        value: totalExpenses - value
                    }
                ]
            })
        }
    }, [kpiData])

    const productColumns = [
        {
            field: "_id",
            headerName: "id",
            flex: 1,
        },
        {
            field: "expense",
            headerName: "Expense",
            flex: 0.5,
            renderCell: (params: GridCellParams) =>`$${params.value}`,
        },
        {
            field: "price",
            headerName: "Price",
            flex: 0.5,
            renderCell: (params: GridCellParams) => `$${params.value}`,
        },
    ]

    const transactionColumns = [
        {
            field: "_id",
            headerName: "id",
            flex: 1,
        },
        {
            field: "buyer",
            headerName: "Buyer",
            flex: 0.67,
        },
        {
            field: "amount",
            headerName: "Amount",
            flex: 0.35,
            renderCell: (params: GridCellParams) => `$${params.value}`,
        },
        {
            field: "productIds",
            headerName: "count",
            flex: 0.35,
            renderCell: (params: GridCellParams) => (params.value as Array<string>).length,
        },
    ]

    const content = (
        <>
            <DashboardBox gridArea="g">
                <BoxHeader
                    title='List of Products'
                    // subtitle='Top line representes revenue, bottom line represent'
                    sideText={`${productData?.length} products`}
                />
                <Box
                    mt="o.5rem"
                    p="0 0.5rem"
                    height="75%"
                    sx={{
                        "& .MiuDataGrid-root":{
                            color: palette.grey[300],
                            border: "none",
                        },
                        "& .MiuDataGrid-cell":{
                            borderBottom: `1px solid ${palette.grey[800]} !important`
                        },
                        "& .MiuDataGrid-columnHeaders":{
                            borderBottom: `1px solid ${palette.grey[800]} !important`
                        },
                        "& .MiuDataGrid-columnSeparator":{
                            visibility: ' hidden'
                        },
                    }}
                >
                    <DataGrid
                        columnHeaderHeight={25}
                        rowHeight={35}
                        rows={productData || []}
                        columns={productColumns}
                        sx={{color: "#fff"}}
                    />
                </Box>
            </DashboardBox>
            <DashboardBox gridArea="h">
                <BoxHeader
                    title='Recent Orders'
                    // subtitle='Top line representes revenue, bottom line represent'
                    sideText={`${transactionData?.length} latest Transaction`}
                />
                <Box
                    mt="1rem"
                    p="0 0.5rem"
                    height="80%"
                    sx={{
                        "& .MiuDataGrid-root":{
                            color: palette.grey[300],
                            border: "none",
                        },
                        "& .MiuDataGrid-cell":{
                            borderBottom: `1px solid ${palette.grey[800]} !important`
                        },
                        "& .MiuDataGrid-columnHeaders":{
                            borderBottom: `1px solid ${palette.grey[800]} !important`
                        },
                        "& .MiuDataGrid-columnSeparator":{
                            visibility: ' hidden'
                        },
                    }}
                >
                    <DataGrid
                        columnHeaderHeight={25}
                        rowHeight={35}
                        rows={transactionData || []}
                        columns={transactionColumns}
                        sx={{color: "#fff"}}
                    />
                </Box>
            </DashboardBox>
            <DashboardBox gridArea="i">
                <BoxHeader
                    title='Expense Breakdown by Category'
                    // subtitle='Top line representes revenue, bottom line represent'
                    sideText='+4%'
                />
                <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
                    {pieChartData?.map((data,i) => (
                        <Box key={`${data[0].name} - ${i}`}>
                            <PieChart width={110} height={100} >
                              <Pie
                                stroke='none'
                                data={data}
                                innerRadius={18}
                                outerRadius={35}
                                paddingAngle={2}
                                dataKey="value"
                              >
                                {data.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={pieColors[index]} />
                                ))}
                              </Pie>
                            </PieChart>
                            <Typography variant='h5'>{data[0].name}</Typography>
                        </Box>
                    ))}
                </FlexBetween>
            </DashboardBox>
            <DashboardBox gridArea="j">
                <BoxHeader
                    title='Overall Summary and Explanation Data'
                    // subtitle='Top line representes revenue, bottom line represent'
                    sideText='+15%'
                />
            </DashboardBox>
        </>
    )
  return content
}

export default Row3