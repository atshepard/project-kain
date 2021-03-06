import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Stack, Autocomplete, Avatar, Card, CardHeader, Button, CardContent } from '@mui/material';


function FriendList() {
    const dispatch = useDispatch();

    const people = useSelector((store) => store.allUsersReducer);
    const friends = useSelector((store) => store.friendReducer);
    const user = useSelector(store => store.user);
    const [value, setValue] = useState('');

    useEffect(() => {
        dispatch({ type: 'FETCH_FUTURE_FRIENDS' });
        dispatch({ type: 'FETCH_MY_FRIENDS' });
    }, []);

    const addFriend = () => {
        // console.log(value);
        const result = people.filter(person => person.display_name == value)
        // console.log(result[0]);
        dispatch({type: 'ADD_FRIEND', payload: result[0]})
    }


    return (<>
        <div className="container">
            <Stack spacing={2} sx={{ width: '50vw' }}>
                <Autocomplete
                    id="people list"
                    freeSolo
                    inputValue={value}
                    onInputChange={(event, newInputValue) => {
                      setValue(newInputValue);
                    }}
                    options={people.map((person) => person.display_name)}
                    renderInput={(params) => <TextField {...params} label="Add a Friend" />}
                />
            </Stack>
            <Button onClick={addFriend}>ADD FRIEND</Button>
        </div>

        <br />
        <h3>Your Friends:</h3>
        {friends &&
            // <Stack direction="row" spacing={2}>
                friends.map((friend, i) => {
                    if (friend.id !== user.id) {
                    return (
                        <div key={i} className="cardContainer">
                            <Box display="flex" alignItems="center" justifyContent="center">
                            <Card sx={{width: '20vw', m: 2, p: 1}}>
                                <CardHeader align="center" title={friend.display_name}/>
                                <CardContent align="center">
                                    <Avatar sx={{ width: 80, height: 80}} src={friend.profile_image} />
                                </CardContent>
                            </Card>
                            </Box>
                        </div>
                    )
                    }
                })}
            {/* </Stack> */}
        


    </>)
}

export default FriendList;