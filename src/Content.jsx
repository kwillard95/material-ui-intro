import React from "react";
import Grid from "@material-ui/core/Grid";
import CoffeeCard from "./CoffeeCard";

const Content = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <CoffeeCard title="Hamilton Beach Flex Brew"
        subTitle="$89.99"
        avatarSrc="https://target.scene7.com/is/image/Target/GUEST_6e52bb55-a427-4087-a251-b4cc8b4fffd4?wid=488&hei=488&fmt=pjpeg"  />
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
