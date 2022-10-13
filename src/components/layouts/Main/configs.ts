export const hexOptions = {
  particles: {
    color: {
      value: '#45cbf7',
      animation: {
        enable: true,
        speed: 3,
      },
    },
    move: {
      attract: {
        enable: true,
        rotate: {
          distance: 100,
          x: 2000,
          y: 2000,
        },
      },
      direction: 'none',
      enable: true,
      outModes: {
        default: 'destroy',
      },
      path: {
        clamp: false,
        enable: true,
        delay: {
          value: 0,
        },
        generator: 'polygonPathGenerator',
        options: {
          sides: 6,
          turnSteps: 30,
          angle: 30,
        },
      },
      random: false,
      speed: 3,
      straight: false,
      trail: {
        fillColor: '#000',
        length: 20,
        enable: true,
      },
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 0,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 1,
    },
  },
  background: {
    color: '#fffff',
  },
  fullScreen: {
    zIndex: -1,
  },
  emitters: {
    direction: 'none',
    rate: {
      quantity: 1,
      delay: 0.25,
    },
    size: {
      width: 0,
      height: 0,
    },
    position: {
      x: 50,
      y: 50,
    },
  },
}