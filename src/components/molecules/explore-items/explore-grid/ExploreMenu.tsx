import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import FiberSmartRecordOutlinedIcon from "@mui/icons-material/FiberSmartRecordOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import ModeStandbyOutlinedIcon from "@mui/icons-material/ModeStandbyOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Box, Divider, Grid } from "@mui/material";
import useStyle from "../../../../Theme";
import Buttons from "../../../atoms/explore-item/Buttons";
import ExploreMenuHead from "../explore-grid-head/ExploreMenuHead";

const list = [
    { name: "Entrepreneurship", comp: <RocketLaunchOutlinedIcon /> },
    { name: "Politics", comp: <AccountBalanceOutlinedIcon /> },
    { name: "Marketing & Sales", comp: <AutoGraphOutlinedIcon /> },
    { name: "Science", comp: <ScienceOutlinedIcon /> },
    { name: "Health & Nutrition", comp: <LocalHospitalOutlinedIcon /> },
    { name: "Personal Development", comp: <SignalCellularAltOutlinedIcon /> },
    { name: "Economics", comp: <FiberSmartRecordOutlinedIcon /> },
    { name: "History", comp: <PublicOutlinedIcon /> },
    { name: "Communication Skills", comp: <CommentOutlinedIcon /> },
    { name: "Corporate Culture", comp: <BusinessCenterOutlinedIcon /> },
    { name: "Motivation & Inspiration", comp: <TipsAndUpdatesOutlinedIcon /> },
    { name: "Money & Investments", comp: <AccountBalanceWalletOutlinedIcon /> },
    { name: "Psychology", comp: <PsychologyOutlinedIcon /> },
    { name: "Productivity", comp: <HourglassBottomOutlinedIcon /> },
    { name: "Sex & Relationship", comp: <FavoriteBorderOutlinedIcon /> },
    { name: "Nature & Environment", comp: <YardOutlinedIcon /> },
    { name: "Career & Success", comp: <ModeStandbyOutlinedIcon /> },
    { name: "Education", comp: <SchoolOutlinedIcon /> },
  ];
interface Handle{
    handleChange:()=>void;
  
  }

const ExploreMenu = (props: Handle) => {
    const classes = useStyle();
    let count=1;
    const component = list.map((e) => ({
     id:count++,
     comp: <Buttons handleChange={props.handleChange} itemname={e.name} itemicon={e.comp}/>
   } ));
   console.log(component)
  return (
    <Box zIndex="1" className={classes.exploreBoxOne}>
        <Box className={classes.exploreBoxTwo}>
            <Box  style={{width:"1100px",marginLeft: "-60px"}}>
                <ExploreMenuHead/>
                <Divider className={classes.exploreDivider}/>
                <Grid container rowSpacing="10px" className={classes.exploreGrid}>
                    {component.map((e)=>(
                        <Grid item xs={4} key={e.id}> {e.comp} </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
        <Box className={classes.exploreBoxThree}>

        </Box>
    </Box>
  );
};

export default ExploreMenu;