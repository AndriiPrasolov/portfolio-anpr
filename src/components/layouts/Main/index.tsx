import Image from 'next/image'
import type { Engine, Container } from 'tsparticles-engine'
import { Button } from '@atoms'
import Main from './styles'
import logo from '@images/logo.jpeg'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container?: Container) => {
    await console.log(container)
  }, [])

  const options = {
    fpsLimit: 120,
    background: {
      color: '#0b032d',
    },
    backgroundMode: {
      enable: true,
    },
    particles: {
      color: {
        value: ['#f67e7d', '#843b62', '#621940'],
      },
      links: {
        color: '#ffb997',
        enable: true,
      },
      move: {
        enable: true,
        speed: 1,
      },
      size: {
        value: 5,
        random: {
          enable: true,
          minimumValue: 1,
        },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 1,
        },
      },
      opacity: {
        value: 0.8,
        random: {
          enable: true,
          minimumValue: 0.4,
        },
      },
    },
    smooth: true,
  }

  return (
    <Main>
      <h1>Font Test</h1>
      <Image src={logo} alt="A logo" width={72} height={72} />
      <Button />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </Main>
  )
}
