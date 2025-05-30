import React from 'react'
import TextField from '@mui/material/TextField'

export default function GoogleInputField(props: {text: string, value: string}) {
  return (
    <TextField
      label={props.text}
      variant="outlined"
      fullWidth
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '4px',
          backgroundColor: 'white',
          '& fieldset': {
            borderColor: '#747775', // Default blackish border
          },
          '&:hover fieldset': {
            borderColor: '#747775', // Keep same on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#1a73e8', // Blue on focus
            borderWidth: '2px',
          },
        },
        '& label': {
          color: '#5f6368',
        },
        '& label.Mui-focused': {
          color: '#1a73e8',
        },
      }}
    />
  )
}
