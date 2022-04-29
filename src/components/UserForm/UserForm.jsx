import {InputLabel, Select, OutlinedInput, Box, Chip, MenuItem} from '@mui/material';

function UserForm ({friends}) {

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

    return (<>
    <div className="container">
    <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {friends.map((friend) => (
            <MenuItem
              key={friend.id}
              value={friend.display_name}
            >
              {friend.display_name}
            </MenuItem>
          ))}
        </Select>
    </div>
        </>)
}

export default UserForm;