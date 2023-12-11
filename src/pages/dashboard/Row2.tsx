import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox'
import { useGetProductsQuery } from '@/state/api'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const Row2 = () => {

    const {data} = useGetProductsQuery();
    console.log(data)
    const content = (
        <>
            <DashboardBox gridArea="d">
                <BoxHeader
                    title='Profilt and Revenue'
                    subtitle='Top line representes revenue, bottom line represent'
                    sideText='+4%'
                />
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={400}
                        data={revenueProfilt}
                        margin={{
                            top: 20,
                            right: 0,
                            left: -10,
                            bottom: 55,
                        }}
                    >
                        <CartesianGrid 
                            vertical={false}
                            stroke={palette.grey[800]}
                        />
                        <XAxis 
                            dataKey="name"
                            tickLine={false}
                            style={{fontSize: "10px"}}
                        />
                        <YAxis 
                            yAxisId="left"
                            tickLine={false}
                            axisLine={false}
                            style={{ fontSize: "10px"}}
                        />
                        <YAxis 
                            yAxisId="right"
                            orientation='right'
                            tickLine={false}
                            axisLine={false}
                            style={{ fontSize: "10px"}}
                        />
                        <Tooltip />
                        <Legend 
                            height={20} 
                            wrapperStyle={{
                            margin: " 0 0 10px 0"
                        }}/>
                        <Line 
                            yAxisId="left"
                            type="monotone" 
                            dataKey="profilt" 
                            stroke={palette.tertiary[500]}
                        />
                        <Line
                            yAxisId="right"
                            type="monotone" 
                            dataKey="revenue" 
                            stroke={palette.primary.main}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </DashboardBox>
            <DashboardBox gridArea="f">f</DashboardBox>
            <DashboardBox gridArea="g">g</DashboardBox>
        </>
    )
  return content
}

export default Row2