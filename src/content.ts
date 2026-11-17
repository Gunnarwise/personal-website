export const featured = [
  {
    slug: 'raspberry-pi-laser-tracking',
    photo: { src: 'laser-tracking-demo', alt: 'Tracking demo showing a detection box around a yellow object', className: 'project-screenshot' },
    links: [{ label: 'View on GitHub', href: 'https://github.com/Gunnarwise/LaserProject' }],
    title: 'Raspberry Pi Laser-Tracking System',
    summary: 'A Raspberry Pi-based computer vision system that detects and tracks objects using OpenCV, with experimental stereo vision for estimating target distance.',
    context: 'This project started as a personal collaboration between my roommate and me. I focused on developing the computer vision software on a Raspberry Pi, while my roommate worked on the Arduino-controlled laser positioning system. The goal was to combine our knowledge of software and hardware to create a system capable of automatically detecting, tracking, and aiming a laser at moving objects.',
    approach: 'I developed a Python application using OpenCV to detect objects by color, calculate their center coordinates, and track their movement in real time. I implemented multiple tracking modes, including smooth targeting to reduce jitter and YOLO-based object detection. I also experimented with stereo vision using two cameras and linear algebra to estimate target distance through triangulation. The software supports sending target coordinates to an Arduino over serial communication.',
    status: 'I completed the Raspberry Pi\'s main object detection and tracking software, including color tracking, smoothing, multiple tracking modes, and serial communication functionality. I also explored stereo depth estimation before shifting the primary tracking system to a single-camera approach. The Arduino-controlled laser positioning system was planned separately, but the complete hardware integration was not finished.',
    medium: 'Computer vision · Raspberry Pi · Python',
  },
  {
    slug: 'pico-maze-solving-robot',
    photo: { src: 'home-electronics', alt: 'Wheeled maze robot with a breadboard, sensor, and colorful jumper wires' },
    title: 'Pico 2 Maze-Solving Robot',
    summary: 'A wheeled robot that uses a servo-mounted ultrasonic sensor to navigate a maze.',
    context: 'I built this robot for my Embedded Microprocessor Systems class. A Raspberry Pi Pico 2 controls the wheels and reads the sensor that tells it what’s in the way.',
    approach: 'The Pico 2 drives the wheels through a motor driver and uses PWM to turn the servo that holds the ultrasonic sensor. It uses the sensor readings to check for obstacles and decide where to drive next.',
    medium: 'Embedded Microprocessor Systems · Raspberry Pi Pico 2 · C',
  },
  {
    slug: 'crossy-street',
    game: {
      src: '/games/crossy-street/index.html',
      width: 970,
      height: 650,
    },
    photo: { src: 'crossy-street', alt: 'Crossy Street title screen with a character, traffic, and WASD controls', className: 'project-screenshot' },
    links: [
      { label: 'Play on itch.io', href: 'https://wisegunnar.itch.io/crossy-streets' },
      { label: 'View on GitHub', href: 'https://github.com/Gunnarwise/CrossyStreet' },
    ],
    title: 'Crossy Street',
    summary: 'My take on Crossy Road, built from scratch in Unity during my senior year of high school.',
    context: 'During my senior year of high school, I decided to try my hand at game development using Unity and C#. I wanted to recreate Crossy Road, a game I enjoyed, while learning more about how games are actually built. The result was Crossy Street, my own take on the game and an opportunity to explore a different side of programming.',
    approach: 'I built Crossy Street in Unity using C#, working on recreating the gameplay and mechanics that make Crossy Road recognizable. The project gave me an opportunity to explore how different elements of a game come together, from controlling the player and handling interactions to creating a playable environment. It was a fun way to apply my programming knowledge to something more visual and interactive than the projects I had worked on before.',
    medium: 'Game development · Unity · C#',
  },
]

export const smallProjects = [
  { title: 'Pico sensor logger', description: 'A Raspberry Pi Pico 2 design for sampling temperature and light and streaming readings over UART.' },
  { title: 'Fashion-MNIST classification', description: 'Coursework exploring how neural networks classify grayscale images of clothing.' },
  { title: 'Chain of custody verifier', description: 'A coursework demo of how a verifier reports corruption in an evidence chain.' },
  { title: 'Logistic regression', description: 'A machine learning exercise on classification and decision boundaries.' },
]

export const contactLinks = [
  { label: 'Email', detail: 'wisegunnar@gmail.com', href: 'mailto:wisegunnar@gmail.com' },
  { label: 'Phone', detail: '(480) 772-5589', href: 'tel:+14807725589' },
  { label: 'LinkedIn', detail: 'Gunnar Wise', href: 'https://www.linkedin.com/in/gunnar-wise' },
  { label: 'GitHub', detail: 'Gunnarwise', href: 'https://github.com/Gunnarwise' },
]

export const photos = [
  { src: '/media/photography/monkey-in-leaves.jpg', thumb: '/media/photography/monkey-in-leaves-thumb.jpg', width: 479, height: 720, label: 'Small monkey deciding where to jump next' },
  { src: '/media/photography/primate-close-up.jpg', thumb: '/media/photography/primate-close-up-thumb.jpg', width: 720, height: 479, label: 'Baboon looking straight at me' },
  { src: '/media/photography/duck-and-ducklings.jpg', thumb: '/media/photography/duck-and-ducklings-thumb.jpg', width: 480, height: 720, label: 'A duck I found in San Diego' },
  { src: '/media/photography/lakeside-tree.jpg', thumb: '/media/photography/lakeside-tree-thumb.jpg', width: 720, height: 479, label: 'Fountain Hills Fountain Park' },
  { src: '/media/photography/desert-ridge.jpg', thumb: '/media/photography/desert-ridge-thumb.jpg', width: 720, height: 479, label: 'Storm rolling over the desert' },
  { src: '/media/photography/blazer-at-dusk.jpg', thumb: '/media/photography/blazer-at-dusk-thumb.jpg', width: 720, height: 479, label: 'My first picture on my Nikon Z6II' },
  { src: '/media/photography/brick-and-blue-sky.jpg', thumb: '/media/photography/brick-and-blue-sky-thumb.jpg', width: 540, height: 720, label: 'Nice blue skies at ASU' },
  { src: '/media/photography/monkey-on-rope.jpg', thumb: '/media/photography/monkey-on-rope-thumb.jpg', width: 480, height: 720, label: 'Monkey at Phoenix Zoo' },
  { src: '/media/photography/ducks-swimming.jpg', thumb: '/media/photography/ducks-swimming-thumb.jpg', width: 720, height: 479, label: 'Some ducks at the Fountain Park' },
  { src: '/media/photography/golden-trail.jpg', thumb: '/media/photography/golden-trail-thumb.jpg', width: 540, height: 720, label: 'Walking towards the ocean in Bandon' },
  { src: '/media/photography/mandrill.jpg', thumb: '/media/photography/mandrill-thumb.jpg', width: 479, height: 720, label: 'Very menacing mandrill monkey' },
  { src: '/media/photography/bear-portrait.jpg', thumb: '/media/photography/bear-portrait-thumb.jpg', width: 480, height: 720, label: 'Black Bear at Phoenix Zoo' },
  { src: '/media/photography/macaw.jpg', thumb: '/media/photography/macaw-thumb.jpg', width: 480, height: 720, label: 'Macaw at Phoenix Zoo' },
  { src: '/media/photography/mist-in-sunlight.jpg', thumb: '/media/photography/mist-in-sunlight-thumb.jpg', width: 479, height: 720, label: 'Nice sun rays in the monkey exhibit' },
  { src: '/media/photography/tree-canopy.jpg', thumb: '/media/photography/tree-canopy-thumb.jpg', width: 720, height: 479, label: 'Vibrant green tree canopy' },
  { src: '/media/photography/camera-portrait.jpg', thumb: '/media/photography/camera-portrait-thumb.jpg', width: 720, height: 540, label: 'Me with my Nikon Z6II!' },
  { src: '/media/photography/boat-and-lighthouse.jpg', thumb: '/media/photography/boat-and-lighthouse-thumb.jpg', width: 540, height: 720, label: 'Nice lighthouse in Bandon, Oregon' },
  { src: '/media/photography/coastal-sea-stack.jpg', thumb: '/media/photography/coastal-sea-stack-thumb.jpg', width: 540, height: 720, label: 'The Oregon Coast famous "Face Rock", if you look closely you can see a womans head rising out of the ocean. ' },
]
