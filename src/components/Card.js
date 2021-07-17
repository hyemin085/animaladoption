import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        maxWidth: 400
    }
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="180"
                    img src="http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        여기가 타이틀인듯
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        타이틀들어가면 될 듯
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/*<Button size="small" color="primary">*/}
                {/*    Share*/}
                {/*</Button>*/}
                {/*<Button size="small" color="primary">*/}
                {/*    Learn More*/}
                {/*</Button>*/}
            </CardActions>
        </Card>
    );
}

