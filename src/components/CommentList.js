import React from "react";
import {Grid, Image, Text} from "../elements";

import {useDispatch, useSelector} from "react-redux";
import {actionCreators as commentActions} from "../redux/modules/comment";

const CommentList = (props) => {
    const dispatch = useDispatch();
    const comment_list = useSelector(state => state.comment.list);
console.log(comment_list)
    const {post_id} = props;

    React.useEffect(() => {
        if(!comment_list[post_id]){
            // 코멘트 정보가 없으면 불러오기
            dispatch(commentActions.getCommentRX(post_id));
        }
    }, []);

    // comment가 없거나, post_id가 없으면 아무것도 안넘겨준다!
    if(!comment_list[post_id] || !post_id){
        return null;
    }

    return (
        <React.Fragment>
            <Grid padding="16px">
                {comment_list[post_id].map(c => {
                    return (<CommentItem key={c.id} {...c}/>);
                })}
            </Grid>
        </React.Fragment>
    );
};

CommentList.defaultProps = {
    post_id: null
};

export default CommentList;

const CommentItem = (props) => {

    const {animalId, description} = props;
    return (
        <Grid is_flex>
            <Grid is_flex width="auto">
                <Image shape="circle"/>
                <Text bold></Text>
            </Grid>
            <Grid is_flex margin="0px 4px">
                <Text margin="0px"></Text>
                <Text margin="0px"></Text>
            </Grid>
        </Grid>
    )
}

CommentItem.defaultProps = {
    animalID: 4,
    description: 1,
}