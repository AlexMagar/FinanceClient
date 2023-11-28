import FlexBetween from "@/components/FlexBetween"
import { useTheme } from "@mui/material"
import { useState } from "react"

type Props = {}

const Navbar = (props: Props) => {

    const { palette } = useTheme()
    const [selected, setSelected] = useState("dashboard")

    const content = (
        <FlexBetween
        mb="o.25rem" p="o.5rem 0rem"
        color={palette.grey[300]}
        >Index file</ FlexBetween>
    )

  return content
}

export default Navbar