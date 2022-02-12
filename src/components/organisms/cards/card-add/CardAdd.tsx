import { Card, Grid } from '@mui/material';
import React from 'react';
import useStyle from '../../../../Theme';
import AddToLibraryButton from '../../../atoms/addtolibrarybutton/AddToLibraryButton';
import CardHead from '../../../molecules/card/CardHead';
interface Mui {
    details: {
      image: string;
      name: string;
      author: string;
      time: string;
    }[];
  }
const CardAdd = (props : Mui) => {
    let count=1;
    const classes = useStyle();
    const bookCards = props.details.map((e)=>(
        <Grid item xs = {4} key = {count++}>
            <Card className = {classes.cardStyle}>
                <Grid container direction="column">
                    <Grid item>
                        <CardHead
                           image={e.image}
                           bookName={e.name}
                           authorName={e.author}
                           time={e.time}
                        />
                    </Grid>
                    <Grid item className={classes.cardAddGridTwo}>
                        <AddToLibraryButton/>
                    </Grid>
                </Grid>

            </Card>
        </Grid>
    ));
  return (
      <Grid
      columnSpacing="20px"
      rowSpacing="25px"
      container
      className={classes.cardAddGridOne}
      data-testid="CardAdd"
      >

        {bookCards}
      </Grid>
  );
};
export default CardAdd;
