import Image from 'next/image'
import { useCallback } from 'react'
import type { Engine, Container } from 'tsparticles-engine'
import { tsParticles } from 'tsparticles-engine'
import { loadPolygonPath } from 'tsparticles-path-polygon'
import { Button } from '@atoms'
import Main, { BParticles } from './styles'
import logo from '@images/logo.jpeg'
import { loadFull } from 'tsparticles'

export default () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container?: Container) => {
    await loadPolygonPath(tsParticles)
  }, [])

  const options = {
    fpsLimit: 120,
    particles: {
      number: {
        value: 120,
      },
      color: {
        value: '#93cbf5',
        animation: {
          enable: true,
          speed: 10,
        },
      },
      links: {
        color: '#45cbf7',
        enable: true,
        distance: 150,
        opacity: 0.5,
        width: 2,
      },
      move: {
        enable: true,
        speed: 1,
      },
      size: {
        value: 3,
        random: true,
      },
      opacity: {
        value: 0.8,
        random: {
          enable: true,
          minimumValue: 10,
        },
      },
    },
    smooth: true,
    retinaDetect: true,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        grab: {
          distance: 100,
        },
      },
      detectOn: 'window',
    },
  }

  return (
    <Main>
      <h1>Font Test</h1>
      <Image src={logo} alt="A logo" width={72} height={72} />
      <Button />
      <BParticles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </Main>
  )
}
