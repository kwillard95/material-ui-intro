import React from "react";
import Grid from "@material-ui/core/Grid";
import CoffeeCard from "./CoffeeCard";

import CoffeeData from './CoffeeData';

const Content = () => {
  return (
    <Grid container spacing={4}>
      {CoffeeData.map((item, key) => {
        return (
        <Grid item xs={12} sm={4}>
          <CoffeeCard 
          id={key}
          title={item.title}
          subTitle={item.subTitle}
          avatarSrc={item.avatarSrc}
          imgSrc={item.imgSrc}
          description={item.description} />
        </Grid>
        )
      })}
    </Grid>
  );
};

export default Content;
