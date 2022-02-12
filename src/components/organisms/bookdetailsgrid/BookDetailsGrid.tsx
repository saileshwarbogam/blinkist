import { Card, CardMedia, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useStyle from "../../../Theme";
import bookimage from "../../atoms/assets/bookimage.png";
import AuthorName from "../../atoms/author/AuthorName";
import BookNote from "../../atoms/bookpagedetails/booknote/BookNote";
import FinishReading from "../../atoms/bookpagedetails/bookoptions/finishbutton/FinishReading";
import SendToKindle from "../../atoms/bookpagedetails/bookoptions/kindlebutton/SendToKindle";
import BookTitle from "../../atoms/bookpagedetails/booktitle/BookTitle";
import ReadTime from "../../atoms/read-time/ReadTime";
import ReadNow from "../../atoms/readbutton/ReadNow";

interface Handle {
  handleFinish: (item: string) => void;
  btn: boolean;
}

const BookDetailsGrid = (props: Handle) => {
  const classes = useStyle();
  return (
    <Box className={classes.bookDetailsbox}>
      <Grid container columnSpacing="125px" justifyContent="center">
        <Grid item>
          <Grid container direction="column" rowSpacing="24px">
            <Grid item>
              <BookTitle />
            </Grid>
            <Grid item>
              <BookNote />
            </Grid>
            <Grid item>
              <AuthorName authName="By Jim Collins and Bill Lazier" />
            </Grid>
            <Grid item>
              <ReadTime time="15-minute read" />
            </Grid>
            <Grid item className={classes.bookDetailsGrid}>
              <Grid container columnSpacing="32px">
                <Grid item>
                  <ReadNow />
                </Grid>
                <Grid item>
                <FinishReading btn={props.btn} bookName="Beyond Entrepreneurship 2.0" handleFinish={props.handleFinish} />
                </Grid>
                <Grid item>
                    <SendToKindle/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Card>
            <CardMedia
              component="img"
              height="292px"
              width="294.1px"
              image={bookimage}
              alt="Book"
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookDetailsGrid;
