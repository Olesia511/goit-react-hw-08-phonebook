// import { FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/slice';
// import { selectFilter } from '../../redux/auth/selectors';
// import Box from '@mui/joy/Box';
import { Box, Input } from '@mui/material';
// import Input from '@mui/joy/Input';

export const FilterContacts = () => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        py: 2,
        display: 'grid',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Input
        type="text"
        placeholder="Enter name…"
        variant="solid"
        onChange={evt =>
          dispatch(setFilter(evt.target.value.trim().toLowerCase()))
        }
      />
      {/* <Input placeholder="Type in here…" variant="soft" />
      <Input placeholder="Type in here…" variant="outlined" />
      <Input placeholder="Type in here…" variant="plain" /> */}
    </Box>

    // <FilterInput
    //   type="text"
    //   placeholder="Name"
    //   onChange={evt =>
    //     dispatch(setFilter(evt.target.value.trim().toLowerCase()))
    //   }
    // />
  );
};
