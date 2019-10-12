var scene = document.querySelector('a-scene');

if (scene.hasLoaded) {
    init()
} else{
    scene.addEventListener('loaded', init);
}


function init() {
        
    var brainEl = document.querySelector('#brain');
    console.log(brainEl)
    
    document.querySelector('#left').addEventListener('click', leftView);

    function leftView(event) {

       brainEl.object3D.rotation.y = THREE.Math.degToRad(-90);
       brainEl.object3D.rotation.x = THREE.Math.degToRad(-90);

       console.log('left button clicked');
    }
}
