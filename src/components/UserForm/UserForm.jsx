import {InputLabel, Select, OutlinedInput, Box, Chip, MenuItem, Button} from '@mui/material';
import {useState} from 'react'

function UserForm ({friends}) {

  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleSubmit = () => {

  }

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
    <Button onClick={handleSubmit}>ADD FRIEND</Button>
        </>)
}

export default UserForm;