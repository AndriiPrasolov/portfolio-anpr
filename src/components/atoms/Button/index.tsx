import Button from './styles'

export default (): JSX.Element => {
  return (
    <Button
      onClick={() => {
        console.log('Button was clicked')
      }}
    >
      Enter
    </Button>
  )
}
