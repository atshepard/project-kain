import {TextField, Stack, Autocomplete} from '@mui/material';

function UserForm ({friends}) {

    return (<>
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={friends.map((friend) => friend.display_name)}
        renderInput={(params) => <TextField {...params} label="Add a Friend" />}
      />
    </Stack>

        </>)
}

export default UserForm;