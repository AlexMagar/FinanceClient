import BoxHeader from '@/components/BoxHeader'
import DashboardBox from '@/components/DashboardBox'

const Row3 = () => {
  
    const content = (
        <>
            <DashboardBox gridArea="g">
                <BoxHeader
                    title='List of Products'
                    // subtitle='Top line representes revenue, bottom line represent'
                    sideText='124 Products'
                />
            </DashboardBox>
            <DashboardBox gridArea="h">
                <BoxHeader
                    title='Recent Orders'
                    // subtitle='Top line representes revenue, bottom line represent'
                    sideText='50 latest transactions'
                />
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