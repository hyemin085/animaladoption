import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import {actionCreators as postActions} from "../redux/modules/post";
import {useDispatch} from "react-redux";
import {history} from "../redux/configureStore";

const useStyles = makeStyles({
    root: {
        maxWidth: "100%"
    }
});
const Post = React.memo((props) => {
    const dispatch = useDispatch();
    //material-ui 쓸 때 사용
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200vh"
                    img
                    src="https://mblogthumb-phinf.pstatic.net/20130303_124/ovcharka_no1_1362279507296igEt3_JPEG/1.jpg?type=w2"
                    // http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg
                    //https://cdn.cashfeed.co.kr/attachments/d3b183b7d6.jpg 비글
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
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
})


Post.defaultProps = {
    id: null,
    title: '피곤하다',
    animalName: "김춘배",
    animalSpecies: "개",
    animalBreed: '도베르만',
    animalGender: '수컷',
    animalAge: 5,
    animalStory: '이 강아지로 말하자면.....',
    animalPhoto: "https://mblogthumb-phinf.pstatic.net/20130303_124/ovcharka_no1_1362279507296igEt3_JPEG/1.jpg?type=w2",
}



export default Post;


