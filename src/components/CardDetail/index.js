import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { red } from '@material-ui/core/colors'
import clsx from 'clsx'
import dayjs from 'dayjs'

import { URL_IMG } from '../../utils/constants'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    height: '100%',
  },
  media: {
    height: 140,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

const MovieDetailCard = ({ id, title, original_title, overview, poster_path, homepage, backdrop_path, release_date, vote_count, vote_average }) => {
  const dateFormatted = dayjs(release_date).format('dddd[,] D [de] MMMM [de] YYYY')
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              M
            </Avatar>
          }
          action={
            <IconButton aria-label="Settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={original_title}
          subheader={dateFormatted}
        />
        <CardMedia className={classes.media} image={ URL_IMG  + backdrop_path} title={title} />
        <CardContent>
          <Typography gutterBottom variant="body2" color="textSecondary" component="p">
            {overview}
          </Typography>
          <Typography gutterBottom variant="body1" component="h6">
            <b>Vote Count:</b> {vote_count} <b>Average:</b> {vote_average}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={homepage} target="_blank">
            {title}
          </a>
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Poster:</Typography>
          <CardMedia className={classes.media} image={ URL_IMG  + poster_path} title={title} />
        </CardContent>
      </Collapse>
    </Card>
  )
}

MovieDetailCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  homepage: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_count: PropTypes.number.isRequired,
  vote_average: PropTypes.number.isRequired,
}

export default MovieDetailCard
