import React from 'react'
import TimeAgo from 'react-timeago'
import { default as INews } from 'models/News'
import { Avatar, Card, CardActions, CardContent, CardHeader, makeStyles } from '@material-ui/core'
import MUISkeleton from '@material-ui/lab/Skeleton/Skeleton'
import {
    faNewspaper
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

interface INewsProps {
  className?: string
  article: INews
  dark?: boolean
}

const useStyles = makeStyles((theme) => ({
  root: {},
    dark: {
        background: theme.palette.common.black,
        color: theme.palette.primary.light,
    },
    header: {
        textTransform: 'uppercase',
        '$dark &': {
            color: theme.palette.primary.light,
        }
    },
    avatar: {
        backgroundColor: theme.palette.secondary.dark
    },
    tags: {
        color: theme.palette.primary.main
    },
    ago: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.black,
        display: 'inline-block',
        padding: theme.spacing(0, 1),
        textTransform: 'uppercase',
    },
}))

/**
 * Display a news entry
 */
const News = ({ className, article, dark = true }: INewsProps) => {
    const skeletonStyle = { backgroundColor: 'rgba(71, 72, 72, 0.79)' }
    const Skeleton = ({ children, ...rest }: any) => (
        <MUISkeleton animation='pulse' style={skeletonStyle} {...rest}>
            {children}
        </MUISkeleton>
    )
    const classes = useStyles()
    const linkifyTags = (tags: string) => {
        return tags?.split(',')?.map((tag: string) => (
          <span key={tag}>{`#${tag?.trim()}`}&nbsp;</span>
        ))
    }
    return (
        <Card component='article' className={`${className} ${dark && classes.dark}`}>
            <CardHeader
                className={classes.header}
                title={(<> {article?.title || <Skeleton variant='text' />}</>)}
                titleTypographyProps={{ color: 'secondary', variant: 'h3' }}
                avatar={
                    <Avatar aria-label="news" className={classes.avatar}>
                        <Icon icon={faNewspaper} />
                    </Avatar>
                }
            />
            <CardContent>
                {article?.content || Array(2).fill((<><Skeleton /><br /></>))}
            </CardContent>
        <CardActions disableSpacing>
                <span className={classes.tags}>{(article?.tags && linkifyTags(article?.tags)) || <Skeleton variant='rect' width={'10rem'} />}</span>
          {(article?.dateTime && <span className={classes.ago}><TimeAgo date={article?.dateTime} /></span>) || <Skeleton variant='rect' width={'10rem'} />}
        </CardActions>
        </Card>
    )
}

export default News
