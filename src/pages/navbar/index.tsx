import FlexBetween from "@/components/FlexBetween"
import { Box, Typography, useTheme } from "@mui/material"
import { useState } from "react"
import PixIcon from '@mui/icons-material/Pix';
import { Link } from "react-router-dom";

const Navbar = () => {

    const { palette } = useTheme()
    const [selected, setSelected] = useState("dashboard") //state what page we are on

    const content = (
        <FlexBetween mb="o.25rem" p="0.5rem 0rem" color={palette.grey[300]} >
          {/* ========== Left Side ========== */}
          <FlexBetween gap="0.75rem" >
            <PixIcon sx={{fontSize: "28px"}}/>
            <Typography variant="h4" fontSize="16px">
              Finanseer
            </Typography>
          </FlexBetween>
          {/* =============== Right Side =============  */}
          <FlexBetween gap="2rem">
            <Box sx={{"&:hover": {color: palette.primary[100]}}}>
              <Link 
                to="/"
                onClick={()=> setSelected("dashboard")}
                style={{
                  color: selected === "dashboard" ? "inherit" : palette.grey[700]
                }}
              >
              Dashboard
              </Link>
            </Box>
            <Box sx={{"&:hover": {color: palette.primary[100]}}}>
              <Link 
                to="/predictions" 
                onClick ={() => setSelected("predictions")}
                style={{
                  color: selected === "predictions" ? "inherit" : palette.grey[700],
                  textDecoration: "inherit"
                }}
              >
                Predictions
              </Link>
            </Box>
          </FlexBetween>
        </ FlexBetween>
    )

  return content
}

export default Navbar