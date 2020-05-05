import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: red[500],
  },
});

export default function CoffeeCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const {avatarSrc, title, subTitle, description, imgSrc} = props;

  return (
    <Card variant="outlined">
      <CardHeader
        avatar={
          <Avatar src={avatarSrc} />
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subTitle}
      />
      <CardMedia style={{height: '250px'}} image={imgSrc} title="Best Coffee Maker" />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Offer</Button>
      </CardActions>
    </Card>
  );
}