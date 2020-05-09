import React, { useState, useEffect } from "react";
import readingTime from "reading-time";
import { useHistory } from "react-router-dom";
import MarkdownView from 'react-showdown';
import showdown from 'showdown';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


import {
  CardContainer,
  CardHeader,
  CardCategory,
  CardReadingTime,
  CardTitle,
  CardDescription,
} from './'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom:'2rem'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 'auto',
    height: '100%',
  },
  img: {
    marginLeft: 'auto',
    marginRigth: 'auto',
    verticalAlign:'middle',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    paddingRight:'0.9rem'
  },
  dateInfo:{
    fontWeight:'600',
    marginBottom:'1rem',
    fontStyle: 'italic'
  }
}));

export const Card = ({ blog, onClick }) => {
  const [labels, setLabels] = useState([]);
  const classes = useStyles();

  let converter = new showdown.Converter({
    ghCompatibleHeaderId: true,
    strikethrough: true, 
    tables: true,
    metadata: true
  })

  let txt = blog.body;

  let tomd = converter.makeMarkdown(txt)

  var conv = new showdown.Converter({metadata: true});
  var html = conv.makeHtml(tomd);
  var metadata = converter.getMetadata(); // returns an object with the document metadata
  
  useEffect(() => {
    const labels = blog.labels.nodes.filter((value) => {
      return value.name !== "blog";
    });

    setLabels(labels);
  }, [blog.labels.nodes]);
  var imgurl = tomd.split('---')[1].split('*')[0].slice(0, -1);
  var date = tomd.split('---')[1].split('*')[1];
  //console.log(date)
  
  return (
    <CardContainer>
     <CardHeader>
        <>
        {labels.map((value, i) => {
          return (
            <CardCategory value={value} key={i} />
          );
        })}
        </>
        <CardReadingTime time={readingTime(blog.body).minutes} />
      </CardHeader>
      <div onClick={() => onClick(blog.title, blog.number)}>
        <div className={classes.root}>
            <Grid container spacing={0}>
              <Grid item sm={4}>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} src={imgurl} alt={imgurl} />
                </ButtonBase>
              </Grid>
              <Grid item sm={8} container>
                      <CardTitle>{blog.title}</CardTitle>
                      <CardDescription>
                      <div className={classes.dateInfo}>
                        {date}
                      </div>
                      <MarkdownView
                            markdown={blog.body.substring(0,600)+"..."}
                            options={{
                              tasklists:true,
                              tables: true, emoji: true,
                              ghCompatibleHeaderId: true,
                              strikethrough: true, 
                              metadata: true
                            }}
                          />
                      </CardDescription>
              </Grid>
            </Grid>
        </div>
      </div>
    </CardContainer>
    
  );
}
