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
    summary: 'A Raspberry Pi Pico 2-powered robot designed to autonomously navigate a maze using ultrasonic sensing, motor control, and obstacle detection.',
    context: 'This project was developed for my Embedded Systems course at Arizona State University. The goal was to build a small autonomous robot capable of navigating a maze of cardboard walls without human intervention. Building on earlier projects involving motor control, wheel encoders, and PID controllers, this project introduced ultrasonic sensing and autonomous decision-making. The robot needed to detect obstacles, determine which directions were available, and navigate around walls to reach the end of the maze.',
    approach: `I programmed the robot in C using the Raspberry Pi Pico SDK, combining several hardware components to control its movement and surroundings. An HC-SR04 ultrasonic sensor mounted on a servo motor allows the robot to scan forward, left, and right to detect obstacles and identify open paths. GPIO interrupts measure the ultrasonic sensor\'s echo pulses to calculate distances, while PWM signals control the motors and servo. \n
                  \nFor navigation, I explored a state-machine approach that breaks the process into individual behaviors, such as driving forward, scanning for openings, turning, and following walls. `,
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
  {
    title: 'Blockchain Chain of Custody',
    description: 'A digital forensics project exploring how blockchain-based records can track evidence history and help detect unauthorized changes.',
  },
  {
    title: 'AloWish',
    description: "A computer science capstone project developing an accessible travel-planning platform that considers travelers' individual needs when providing recommendations.",
  },
  {
    title: 'Monte Carlo Pi Estimator',
    description: 'An interactive Python application that estimates π by generating random points inside a square and visualizing how many fall within an inscribed circle.',
  },
  {
    title: 'YouTube Data Aggregator',
    description: 'A Python application that uses the YouTube Data API to retrieve and organize video statistics, channel information, and metadata for analysis.',
  },
  {
    title: 'Discussion Board Application',
    description: 'A JavaFX discussion board backed by an H2 database, supporting user management, discussion posts, and replies.',
  },
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

type Moment = {
  type: 'image' | 'video'
  src: string | null
  alt: string
  caption?: string
  orientation?: 'portrait' | 'landscape'
  poster?: string
}

export const moments: Moment[] = [
  { type: 'image', src: null, alt: 'Hiking', caption: 'Placeholder for a hiking photo.' },
  { type: 'image', src: null, alt: 'Wakeboarding', orientation: 'portrait', caption: 'Placeholder for a wakeboarding photo.' },
  { type: 'image', src: null, alt: 'Weekend outing', orientation: 'portrait' },
  { type: 'image', src: null, alt: 'Travel', caption: 'Placeholder for a photo from a trip.' },
  { type: 'image', src: null, alt: 'Road trip' },
  { type: 'image', src: null, alt: 'Day on the water', orientation: 'portrait' },
  { type: 'image', src: null, alt: 'Scenic stop', orientation: 'portrait' },
  { type: 'image', src: null, alt: 'Exploring somewhere new' },
]

export const otherInterests = [
  {
    title: 'Drumming',
    description: "I've recently been getting into drumming. It's something completely different from my other hobbies, and I've enjoyed the challenge of learning an instrument and gradually getting better at it.",
  },
]

// Edit this list to change the homepage period's random facts.
export const randomFacts = [
  "I recently started learning how to play the drums",
  "I can solve a rubix cube in 30 seconds",
  "I can juggle 3, 4, and almost 5 balls",
  "I made it to high school swimming finals and placed 6th, 6th, 7th, and 12th in my four events",
  "I competed in the decathalon in track and field",
  "I built my own version of crossy road, you can play it on this website",
  "I got a second degree blackbelt in Taekwondo",
  "My favorite color is orange",
  "I like photography, but my dream is to get good enough equipment for astrophotography",
  "I'm hosting this website on Cloudflare",
  "heres the source code to this website: https://github.com/Gunnarwise/personal-website",
  "My favorite math class I have taken was discrete math",
  "I grew up in the same house my whole life",
  "I started coding in 2019 and since then I have used 21 different programming languages",
  "I can type ~90-100 words per minute",
  "As of November 2026, I have been to 21 states and 2 countries (US and Mexico)",
  "A few countries at the top of my list to visit: Japan, Greece, Switzerland, Norway",
]
