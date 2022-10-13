import Button from './styles'

export default (): JSX.Element => {
  return (
    <Button
      data-testid="button"
      onClick={() => {
        console.log('Button was clicked')
      }}
    >
      Enter
    </Button>
  )
}
