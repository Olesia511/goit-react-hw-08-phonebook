import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/slice';

import { Box, Input } from '@mui/material';

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
    </Box>
  );
};
