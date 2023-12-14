import BoxHeader from '@/components/BoxHeader'
import DashboardBox from '@/components/DashboardBox'
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/state/api'
import { Box, useTheme } from '@mui/material';

const Row3 = () => {

    const { palette } = useTheme()
    const { data: kpiData} = useGetKpisQuery()
    const { data: productData} = useGetProductsQuery()
    const { data: transactionData} = useGetTransactionsQuery()

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
                        columns={transactionData}
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