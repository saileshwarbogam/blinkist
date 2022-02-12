import { Grid } from '@mui/material';
import React from 'react';
import NavHead from '../../../atoms/footer/navitems/navhead/NavHead';
import NavItem from '../../../atoms/footer/navitems/navitem/NavItem';


const list=["About","Careers","partners","Code of Conduct"];
const FooterNavListThree = () => {
  let count=1;
  return(
    <Grid container direction="column" data-testid="FooterNavList3">
    <Grid item>
    <NavHead name="Company"/>
    </Grid>
    {
        list.map(e=>
            <Grid item key = {count++}>
                <NavItem name={e} />
            </Grid>
        )
    }
</Grid>
  );
};

export default FooterNavListThree;