import * as THREE from "https://unpkg.com/three/build/three.module.js";

document.getElementById("table").addEventListener('click',modelview)

//document.getElementById("name").addEventListener("blur", f)

document.getElementById("add").addEventListener("click", ()=>{
    document.getElementById("color").addEventListener("blur",modelview)
    document.getElementById("selectType").addEventListener("blur",modelview)
    document.getElementById("size").addEventListener("blur",modelview)
})
document.getElementById("table").addEventListener('click',()=>{
    document.getElementById("redact").addEventListener('click',modelview)
    document.getElementById("change").addEventListener('click', ()=>{
        document.getElementById("colTable1").addEventListener('blur',modelview)
        document.getElementById("typTable1").addEventListener('blur',modelview)
        document.getElementById("sizTable1").addEventListener('blur',modelview)
    })
})
document.getElementById("table").addEventListener('click',()=>{

        document.getElementById("colTable1").addEventListener('blur',modelview)
        document.getElementById("typTable1").addEventListener('blur',modelview)
        document.getElementById("sizTable1").addEventListener('blur',modelview)
    })



function f(){
    alert("ffffffff")
}
function modelview (event){
    let canvasWrapper
    let typeGeometry
    let colorGeometry
    let geometry
    let sizeGeometry
    if(event.target.id==="color" || event.target.id==="selectType" || event.target.id==="size"){
        typeGeometry = document.getElementById("selectType").value
        colorGeometry = document.getElementById("color").value
        sizeGeometry = document.getElementById("size").value
        if(!sizeGeometry){sizeGeometry=5}
        let add = document.getElementById("hCan")
        add.outerHTML ="<div id='hCan'><div id=\"canvas-wrapper\"></div></div>"
        canvasWrapper = document.getElementById("canvas-wrapper");
    }
    else if(event.target.className==="show") {
        typeGeometry = document.getElementById("typTable").innerHTML
        colorGeometry=document.getElementById("colTable").innerHTML
        sizeGeometry=document.getElementById("sizTable").innerHTML
        canvasWrapper = document.getElementById("can-wrap");
    }else if(event.target.id==="redact" || event.target.id==="colTable1" || event.target.id==="typTable1" || event.target.id==="sizTable1"){
        typeGeometry = document.getElementById("typTable1").value
        colorGeometry=document.getElementById("colTable1").value
        sizeGeometry=document.getElementById("colTable1").value
        sizeGeometry=document.getElementById("sizTable1").value
        let add = document.getElementById("can-wrap1")
        add.outerHTML ="<div id='can-wrap1'></div>"
        canvasWrapper = document.getElementById("can-wrap1");

    }
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("white");


    let camera = new THREE.PerspectiveCamera(
        60,
        canvasWrapper.clientWidth / canvasWrapper.clientHeight,
        1,
        1000
    );

    let cameraTarget = new THREE.Vector3(0, 0, 0);
    camera.position.x = 10;
    camera.position.y = 10;
    camera.position.z = -10;

    camera.lookAt(cameraTarget);
    scene.add(camera);

    if(typeGeometry === "cube") {
        geometry = new THREE.BoxGeometry(sizeGeometry, sizeGeometry, sizeGeometry);

    }else if(typeGeometry==="sphere") {geometry = new THREE.SphereGeometry(sizeGeometry/2);}
    else{
        geometry = new THREE.ConeGeometry( Math.sqrt(Math.pow(sizeGeometry,2)/2), Math.sqrt(Math.pow(sizeGeometry,2)/2), 4 );
    }

    let material = new THREE.MeshPhongMaterial({
        color: colorGeometry,
        dithering: true,
        specular: 0x111111,
        shininess: 200,
        side: THREE.DoubleSide
    });
    let cube = null;
    cube = new THREE.Mesh(geometry, material);
    cube.position.y = 0;
    cube.position.x = 0;
    cube.position.z = 0;
    cube.castShadow = true;
    scene.add(cube);

// let material3 = new THREE.MeshPhongMaterial({ color: "BlueViolet", dithering: true, side: THREE.DoubleSide });
// let triangle = new THREE.Mesh(geometry3, material3);
// triangle.position.set(-4, 0.5, -2);
// triangle.castShadow = true;
// scene.add(triangle);

    const light = new THREE.PointLight( "#fff", 1, 100);
    light.position.set(0, 6, -15);
    light.castShadow = true;
    scene.add(light);

    const spotLight = new THREE.SpotLight("#ffffff");
    spotLight.position.set(0, 10, 0);
    spotLight.castShadow = true;
    spotLight.intensity = 2;
    spotLight.shadow.camera.near = 1;
    spotLight.shadow.camera.far = 25;
    spotLight.shadow.mapSize.width = 2048;
    spotLight.shadow.mapSize.height = 2048;
    spotLight.shadow.bias = -0.01;
    spotLight.target.position.set(0, 0, 0);
    scene.add(spotLight)

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(canvasWrapper.clientWidth, canvasWrapper.clientHeight);
    canvasWrapper.appendChild(renderer.domElement);
    renderer.shadowMap.enabled = true;

    function animate() {
        requestAnimationFrame(animate)

        renderer.render(scene, camera);
    }
    animate()
}