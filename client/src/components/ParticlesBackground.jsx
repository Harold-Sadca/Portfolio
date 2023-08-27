import React, { useEffect, useCallback } from 'react';
import '../index.css';
import { tsParticles } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  // useEffect(() => {
  //   tsParticles.load('tsparticles', {
  //     background: {
  //       color: '#6B3FA0',
  //     },
  //     interactivity: {
  //       events: {
  //         onClick: {
  //           enable: true,
  //           mode: 'push',
  //         },
  //         onHover: {
  //           enable: true,
  //           mode: 'repulse',
  //         },
  //         resize: true,
  //       },
  //       modes: {
  //         bubble: {
  //           distance: 400,
  //           duration: 2,
  //           opacity: 0.8,
  //           size: 40,
  //         },
  //         push: {
  //           quantity: 4,
  //         },
  //         repulse: {
  //           distance: 200,
  //           duration: 0.4,
  //         },
  //       },
  //     },
  //     particles: {
  //       color: {
  //         value: '#333333',
  //       },
  //       links: {
  //         color: '#333333',
  //         distance: 150,
  //         enable: true,
  //         opacity: 0.5,
  //         width: 1,
  //       },
  //       collisions: {
  //         enable: true,
  //       },
  //       move: {
  //         direction: 'none',
  //         enable: true,
  //         outMode: 'bounce',
  //         random: false,
  //         speed: 1,
  //         straight: false,
  //       },
  //       number: {
  //         density: {
  //           enable: true,
  //           value_area: 800,
  //         },
  //         value: 80,
  //       },
  //       opacity: {
  //         value: 0.5,
  //       },
  //       shape: {
  //         type: 'circle',
  //       },
  //       size: {
  //         random: true,
  //         value: 5,
  //       },
  //     },
  //   });
  // }, []);

  return (
    <Particles
      id='tsparticles'
      url=''
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: '#F5F5F5',
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#333333',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 2000,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
      }}
    />
  );
}

export default ParticlesBackground;
