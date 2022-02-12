import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
    headerLeftGridMain: {
        columnGap: "42px",
        marginTop: "30px",
        marginBottom: "30px",
      },
      headerLeftGrid:{
        marginTop: "6px",
      },
      myLibrary: {
        fontSize: "16px",
        padding : "8px",
        marginTop: "-8px",
        fontWeight: 500,
        color: "#03314B",
        "&:hover": {
          borderBottom: "3px solid #2CE080",
          borderRadius: "0px",
          background: "none",
        },
      },
      exploreBtn: {
        marginTop: "-8px",
        fontSize: "16px",
        padding: "none",
        textTransform: "none",
        fontWeight: 500,
        color: "#03314B",
        "&:hover": {
          borderBottom: "3px solid #2CE080",
          borderRadius: "0px",
          background: "none",
        },
      },


      avatarDrop: {
        marginBottom: "23px",
        marginTop: "29px",
        marginLeft: "292px",
      },
      avatarNavDown: {
        marginTop: "7px",
      },
      myLibraryHead: {
        marginTop: "59px",
        marginLeft: "440px",
        fontSize: "36px",
        fontWeight: 700,
        color: "#03314B",
      },
      tabs: {
        marginLeft: "430px",
        marginTop: "60px",
      },
      tabStyle :{
          textTransform : "none",
          textAlign: "left",
          fontSize : 18,
          fontWeight : 400,
          position: "relative",
          paddingRight : "100px",
          
      },
      activeTab: {
        textTransform: "none",
        fontSize: 18,
        fontWeight : 700,
        textAlign: "left",
        paddingRight : "100px",
        color : "black",
      },
      bookTitleOne: {
        fontStyle: "normal",
        fontSize: "18px",
        fontWeight: 700,
        marginLeft: "16px",
        marginTop: "23px",
      },
      authorNameTypography: {
        fontStyle: "normal",
        fontSize: "16px",
        fontWeight: 500,
        color: "#6D787E",
      },
      readTimeTopography: {
        alignItems: "center",
        fontStyle: "normal",
        fontSize: "14px",
        fontWeight: 400,
        color: "#6D787E",
      },
      cardGridOne: {
        margin: " 16px 0px 0px 16px",
      },
      cardGridTwo: {
        marginLeft: "17.67px",
        marginTop: "17.67px",
      },
      currentBar: {
        width: "295px",
        height: "15px",
        position: "relative",
        background: "#DFE8F6",
        border: "1px solid #E1ECFC",
        // boxSizing: "border-box",
        borderRadius: "0px 0px 8px 8px",
      },
      readAgain: {
        color: "#0365F2",
        width: "100%",
        textTransform: "none",
        paddingTop: "14px",
        paddingBottom: "10px",
        fontSize: "16px",
        fontWeight: "500",
        "&:hover": {
          backgroundColor: "#0365F2",
          color: "#FFFFFF",
          borderRadius: "0px",
        },
      },
      finishedBar: {
        width: "295px",
        height: "15px",
        position: "relative",
        background: "#DFE8F6",
        boxSizing: "border-box",
        borderRadius: "0px 0px 8px 8px",
      },
      cardMuiGrid: {
        width: "1000px",
        
      },
      cardMuiCard: {
        borderRadius: "8px",
      },
      tabPanel:{
        marginLeft: "410px",
        marginRight: "259px",
      },
      footerMainGridOne:{
        backgroundColor: "#F1F6F4",
        marginTop : "111px",
      },
      footerMainGridFour: {
        marginLeft: "390px",
        marginTop: "48px",
        marginBottom: "38px",
      },
      footerCopyRight: {
        fontStyle: "normal",
        fontSize: "14px",
        fontWeight: 400,
        margin: " 16px 0px 0px 60px",
        color: "#6D787E",
      },
      footerMainGridTwo: {
        marginTop: "38px",
      },
      footerMainGridThree: {
        marginLeft: "102px",
      },
      blinkHighlightGridOne: {
        width: "378px",
        height: "128px",
      },
      blinkHighlightGridTwo: {
        height: "26px",
        width: "124px",
      },
      blinkHighlightGridThree: {
        marginTop: "32px",
      },
      footerHighlight: {
        fontStyle: "normal",
        fontSize: "24px",
        fontWeight: 500,
        color: "#0365F2",
      },
      navHead: {
        fontStyle: "normal",
        fontSize: "16px",
        fontWeight: 700,
        color: "#03314B",
      },
      navItem: {
        width: "214px",
        marginTop: "16px",
        fontStyle: "normal",
        fontSize: "16px",
        fontWeight: 400,
        color: "#6D787E",
      },
      exploreBoxOne: {
        position: "absolute",
        height: "100%",
        width: "100%",
      },
      buttons: {
        textTransform: "none",
        color: "#6D787E",
        fontWeight: "400",
        fontStyle: "Normal",
        fontSize: "16px",
        "&:hover": {
          color: "#0365F2",
        },
      },
      exploreBoxTwo: {
        paddingLeft: "485px",
        backgroundColor: "#F1F6F4",
        paddingBottom: "15px",
      },
      exploreHeadTypoOne: {
        fontWeight: "700",
        fontSize: "16px",
        color: "#116BE9",
      },
      exploreHeadTypoTwo: {
        fontWeight: "500",
        fontSize: "16px",
        color: " #6D787E",
      },
      exploreDivider : {
        border: "1px solid #042330",
        width : "960px"
      },
      exploreGrid: {
        paddingTop: "10px",
      },
      exploreBoxThree: {
        backgroundColor: "#111",
        height: "100%",
        width: "100%",
        opacity: "0.4",
      },
      mainBanner: {
        backgroundColor: "#F1F6F4",
        marginLeft: "440px",
        width: "920px",
        marginTop: "32px",
      },
      mainBannerItem: {
        margin: "45px",
      },
      bannerImage: {
        border: "none",
        boxShadow: "none",
        height: "230px",
        width: "250px",
        backgroundColor: "#F1F6F4",
        marginTop: "17px",
        marginBottom: "17px",
        marginLeft: "112px",
      },
      bannerOne: {
        fontWeight: "700",
        fontSize: "36px",
        color: "#03314B",
      },
      bannerTwo: {
        fontWeight: "400",
        fontSize: "18px",
        color: "#6D787E",
      },
      textField: {
        width: "658px",
        marginBottom: "0px",
        marginTop: "58px",
        color: "#6D787E",
        padding: "16px",
        marginLeft: "430px",
      },
      resize:{
        fontWeight : 700,
        fontSize: "24px",
      },
      head: {
        marginTop: "59px",
        marginLeft: "450px",
        fontSize: "24px",
        fontWeight: 700,
        color: "#03314B",
      },
      cardStyle: {
        maxWidth: "284px",
        maxHeight: "490px",
        borderRadius: "8px",
      },
      cardAddGridTwo: {
        marginTop: "10px",
      },
      addToLibBtn: {
        color: "#0365F2",
        width: "100%",
        textTransform: "none",
        paddingTop: "14px",
        paddingBottom: "20px",
        fontSize: "16px",
        fontWeight: "500",
        "&:hover": {
          backgroundColor: "#0365F2",
          color: "#FFFFFF",
        },
      },
      cardAddGridOne: {
        marginTop: "25px",
        marginLeft: "465px",
        width: "1000px",
      },
      keyIdeas: {
        fontSize: "16px",
        fontWeight: "400",
        color: "#03314B",
        marginTop: "60px",
        marginLeft: "440px",
      },
      bookDetailsbox: {
        marginTop: "40px",
        marginLeft : "-15px"
      },
      bookNote: {
        fontSize: "20px",
        fontWeight: 400,
        color: "#03314B",
      },
      bookTitle: {
        fontSize: "36px",
        fontWeight: 700,
        color: "#03314B",
      },
      bookDetailsGrid: { marginTop: "83px" },
      readNow: {
        fontSize: "16px",
        fontWeight: 500,
        color: "#22C870",
        borderColor: "#111",
        textTransform: "none",
      },
      finishReading: {
        fontWeight: 500,
        fontSize: "16px",
        color: "#03314B",
        backgroundColor: "white",
        textTransform: "none",
        borderColor: "none",
      },
      sendToKindle: {
        fontSize: "16px",
        fontWeight: 400,
        color: "#6D787E",
        textTransform: "none",
      },
      bookDetalisTabsOne: {
        marginLeft: "440px",
        marginTop: "40px",
      },
      bookDetalisTabsTwo: {
        padding: "0px",
        marginTop: "20px",
        marginLeft: "440px",
      },
      bookDetalisTabsTypo: {
        fontSize: "16px",
        fontWeight: "400",
        color: "#03314B",
        width: "600px",
      },
      entrepreneurreading :{
        marginLeft : "-30px"
      },
});

export const theme = createTheme({
    palette: {
      primary: {
        main: "#22C870",
      },
    },
  });

  export const theme2 = createTheme({
    palette: {
      primary: {
        main: "#03314B",
      },
    },
  });

export default useStyle;