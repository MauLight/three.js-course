
const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(15, 15, 15)
const material = new THREE.MeshBasicMaterial({ color: 0xff4f00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const sizes = {
    width: 1080,
    height: 720
}

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.z = 90
camera.position.x = 20
camera.position.y = 20
scene.add(camera)

const canvas = document.querySelector('.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas
})

renderer.setSize(1080, 720, false)

renderer.render(scene, camera)