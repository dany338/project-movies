import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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

import { URL_IMG, URL_VIDEO } from '../../utils/constants'
import api from '../../utils/api'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: '100%',
  },
  media: {
    height: 140,
  },
  avatar: {
    backgroundColor: red[500],
  },
})

const MovieCard = ({ id, title, overview, poster_path, original_title, release_date }) => {
  const dateFormatted = dayjs(release_date).format('dddd[,] D [de] MMMM [de] YYYY')

  const classes = useStyles()
  const [expanded, setExpanded] = useState(false);
  const [videos, setVideos] = useState([])

  const getVideoMovie = async () => {
    const infoVideo = await api.video(id)
    const { results } = infoVideo
    setVideos(results)
    setExpanded(!expanded)
  }

  const handleExpandClick = () => {
    getVideoMovie()
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
        <CardMedia className={classes.media} image={ URL_IMG  + poster_path} title={title} />
        <CardContent>
          <Typography gutterBottom variant="body1" component="p">
            {title}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {overview}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            <Link to={`/movie/${id}`}>Ver Detalle</Link>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Button size="small" color="primary">
          <a href={URL_IMG  + poster_path} target="_blank">
            {original_title}
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
          <Typography paragraph>Related Videos: {videos.length}</Typography>
          {videos.length > 0 &&
            videos.map(video => (
              <CardMedia key={video.id} className={classes.media} component="iframe" image={ URL_VIDEO + video.key } title={video.name} />
          ))}
        </CardContent>
      </Collapse>
    </Card>
  )
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
}

export default MovieCard
