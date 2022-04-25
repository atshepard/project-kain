import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function FriendList () {
    const dispatch = useDispatch();

    const people = useSelector((store) => store.allUsersReducer);
    const friends = useSelector((store) => store.friendReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_FUTURE_FRIENDS'});
        dispatch({ type: 'FETCH_MY_FRIENDS'});
    }, []);


 return(<>
    <p>All people:</p>
    <ul>
        {people.map((people, i) => {
            return(<li key={i}>{people.display_name}</li>)
        })}
    </ul>
    <br />
    <p>My people:</p>
    <ul>
        {friends.map((friend, i) => {
            return(<li key={i}>{friend.display_name}</li>)
        })}
    </ul>
 </>)   
}

export default FriendList;