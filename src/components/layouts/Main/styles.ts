import { styled, keyframes } from '@theme'
import Particles from 'react-tsparticles'

const animation1 = keyframes({
  '0%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' },
})

const Main = styled('main', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
})

export const BParticles = styled(Particles, {
  height: '100vh',
  width: '100vw',
  position: 'absolute',
  background:
    'linear-gradient(300deg, #2c2250, #000000, #07303b)',
  backgroundSize: '400% 400%',
  animation: `${animation1} 30s ease infinite`,
})

export default Main
