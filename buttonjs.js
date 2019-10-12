
AFRAME.registerComponent('rotateLeft', {
   init: function(){
       var brainEl = document.querySelector('#brain');
       document.querySelector('#left').addEventListener('click', function() {
           brainEl.object3D.rotation.set(-90,-90,0);
       })
}});