import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TextField, Stack, Autocomplete, Avatar} from '@mui/material';


function FriendList () {
    const dispatch = useDispatch();

    const people = useSelector((store) => store.allUsersReducer);
    const friends = useSelector((store) => store.friendReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_FUTURE_FRIENDS'});
        dispatch({ type: 'FETCH_MY_FRIENDS'});
    }, []);


 return(<>
    <p>Find a Friend:</p>
    <div className="container">
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="people list"
        freeSolo
        options={people.map((person) => person.display_name)}
        renderInput={(params) => <TextField {...params} label="Add a Friend" />}
      />
    </Stack>
    </div>
    
    <br />
    <p>Your contacts:</p>
    
    {friends && 
        <Stack direction="row" spacing={2}>
        {friends.map((friend, i) => {
                return(
                    <Avatar key={i} alt={friend.display_name} src={friend.profile_image} />
                )
            })}
        </Stack>
    }
        

 </>)   
}

export default FriendList;