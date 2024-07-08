import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Image from 'next/image';

export default function RBSelect({ onChange, value, name, menuItem, sx }) {
  return (
    menuItem && (
      <>
        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name={name}
            value={value}
            onChange={onChange}
            defaultValue={'hasasn'}
            sx={sx}
          >
            {menuItem?.map((items, i) => (
              <MenuItem key={i} value={items?.icon}>
                <Image src={items?.icon} width={30} height={30} alt={'image'} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </>
    )
  );
}
