import BoxHeader from '@/components/BoxHeader'
import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api'
import { useTheme } from '@mui/material'
import { useMemo } from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const Row1 = () => {
    const { palette } = useTheme();
    const { data } = useGetKpisQuery()
    console.log("🚀: ", data)

    const revenueExpenses = useMemo( () => {
        return(
            data &&
            data[0].monthlyData.map(({month, revenue, expenses}) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                    expenses: expenses,
                }
            })
        )
    }, [data])

    const content = (
        <>
            <DashboardBox gridArea="a">
            <BoxHeader
                title='Revenue and Expenses'
                subtitle='Top line representes revenue, bottom line represent'
                sideText='+4%'
            />
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={revenueExpenses}
                    margin={{
                        top: 15,
                        right: 25,
                        left: -10,
                        bottom: 60,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <defs>
                        <linearGradient id='colorRevenue' x1="0" y1="0" x2="0" y2="1">
                            <stop 
                                offset="5%"
                                stopColor={palette.primary[300]}
                                stopOpacity={0.5}
                            />
                            <stop 
                                offset="95%"
                                stopColor={palette.primary[300]}
                                stopOpacity={0}
                            />
                        </linearGradient>
                        <linearGradient id='colorExpenses' x1="0" y1="0" x2="0" y2="1">
                            <stop 
                                offset="5%"
                                stopColor={palette.primary[300]}
                                stopOpacity={0.5}
                            />
                            <stop 
                                offset="95%"
                                stopColor={palette.primary[300]}
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name"/>
                    <YAxis domain={[8000, 23000]}/>
                    <Tooltip />
                    <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        dot={true}
                        stroke={palette.primary.main}
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                    />
                    <Area 
                        type="monotone" 
                        dataKey="expenses" 
                        dot={true}
                        stroke={palette.primary.main}
                        fillOpacity={1}
                        fill="url(#colorExpenses)"
                    />
                </AreaChart>
            </ResponsiveContainer>
            </DashboardBox>
            <DashboardBox gridArea="b">b</DashboardBox>
            <DashboardBox gridArea="c">c</DashboardBox>
            <DashboardBox gridArea="d">d</DashboardBox>
        </>
    )
  return content
}

export default Row1