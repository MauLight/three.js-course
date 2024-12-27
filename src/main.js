import * as THREE from 'three'
import gsap from 'gsap'

const scene = new THREE.Scene()

const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff4f00 })
)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
)

group.add(cube1)
group.add(cube2)
group.add(cube3)

cube2.position.x = 2
cube3.position.x = -2

const sizes = {
  width: 1080,
  height: 720
}

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.z = 5

scene.add(camera)

const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)

const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas })

renderer.setSize(sizes.width, sizes.height, false)

const clock = new THREE.Clock()

// gsap.to(group.position, {
//   duration: 1,
//   delay: 1,
//   x: 2
// })

// gsap.to(group.position, {
//   duration: 1,
//   delay: 2,
//   x: 0
// })


// gsap.to(group.position, {
//   duration: 1,
//   delay: 3,
//   x: -1
// })

// gsap.to(group.position, {
//   duration: 1,
//   delay: 4,
//   x: 0
// })

const animationLoop = () => {
  const elapsedTime = clock.getElapsedTime()

  //group.rotation.x = elapsedTime * Math.PI * 2
  camera.position.x = Math.sin(elapsedTime)
  camera.position.y = Math.cos(elapsedTime)
  camera.lookAt(group.position)
  renderer.render(scene, camera)
  window.requestAnimationFrame(animationLoop)
}

animationLoop()