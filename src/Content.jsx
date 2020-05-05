import React from "react";
import Grid from "@material-ui/core/Grid";
import CoffeeCard from "./CoffeeCard";

const Content = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <CoffeeCard title="Hamilton Beach Flex Brew"
        subTitle="$89.99"
        avatarSrc="https://target.scene7.com/is/image/Target/GUEST_6e52bb55-a427-4087-a251-b4cc8b4fffd4?wid=488&hei=488&fmt=pjpeg"
        imgSrc="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F150929101049-black-coffee-stock.jpg"
        description="Hamilton Beach Brewer is the best way to start your day. Start your morning on the right foot and delight your tastebuds, simultaneously!"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeeCard />
      </Grid>
    </Grid>
  );
};

export default Content;
