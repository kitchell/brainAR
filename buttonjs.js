function init() {
        
document.querySelector('#left').addEventListener('click', function() {
    var brainEl = document.querySelector('#brain');
    console.log(brainEl)
   brainEl.object3D.rotation.y = THREE.Math.degToRad(-90);
   brainEl.object3D.rotation.x = THREE.Math.degToRad(-90);

   console.log('left button clicked');
})
}
