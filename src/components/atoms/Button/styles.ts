import { styled } from '@theme'

const Button = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '36px',
  fontSize: '13px',
  height: '36px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
  border: 0,
  color: 'black',
  cursor: 'pointer',
})

export default Button
