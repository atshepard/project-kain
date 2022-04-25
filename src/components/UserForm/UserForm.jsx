import {TextField, Stack, Autocomplete} from '@mui/material';

function UserForm ({friends}) {

    return (<>
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={friends.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      />
    </Stack>

        </>)
}

export default UserForm;