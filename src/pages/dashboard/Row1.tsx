import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api'

const Row1 = () => {

    const { data } = useGetKpisQuery()
    console.log(data)

    const content = (
        <>
            <DashboardBox gridArea="a">a</DashboardBox>
            <DashboardBox gridArea="b">b</DashboardBox>
            <DashboardBox gridArea="c">c</DashboardBox>
            <DashboardBox gridArea="d">d</DashboardBox>
        </>
    )
  return content
}

export default Row1