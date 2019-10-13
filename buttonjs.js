AFRAME.registerComponent('run', {
    init: function () {
        var brainEl = document.querySelector('#brain');
        console.log(brainEl)
    
        document.querySelector('#left').addEventListener('click', leftView);
        document.querySelector('#front').addEventListener('click', frontView);
        document.querySelector('#right').addEventListener('click', rightView);
        document.querySelector('#back').addEventListener('click', backView);
        document.querySelector('#top').addEventListener('click', topView);
        document.querySelector('#bottom').addEventListener('click', bottomView);
        
        
        function leftView(event) {
            brainEl.setAttribute('rotation', {x:360, y:270, z:90});
            brainEl.setAttribute('position', {x: 0, y: 0, z: .7})
           console.log('left button clicked');
    }
     
        function frontView(event) {
            brainEl.setAttribute('rotation', {x:-90, y:0, z:0});
            brainEl.setAttribute('position', {x: 0, y: 0, z: .7})
//            brainEl.object3D.rotation.x = THREE.Math.degToRad(-90);
//           brainEl.object3D.rotation.y = 0;
//           brainEl.object3D.rotation.z = 0;
           console.log('front button clicked');
    }
        function rightView(event) {
            brainEl.setAttribute('rotation', {x:180, y:270, z:90});
            brainEl.setAttribute('position', {x: 0, y: 0, z: .7})
           console.log('right button clicked');
    }
        function backView(event) {
            brainEl.setAttribute('rotation', {x:90, y:180, z:0});
            brainEl.setAttribute('position', {x: 0, y: 0, z: .7})
//            brainEl.object3D.rotation.x = THREE.Math.degToRad(90);
//           brainEl.object3D.rotation.y = 0;
//           brainEl.object3D.rotation.z = 0;
           console.log('back button clicked');
    }
        function topView(event) {
             brainEl.setAttribute('rotation', {x:0, y:180, z:0});
            brainEl.setAttribute('position', {x: 0, y: -1.5, z: 0})
//            brainEl.object3D.rotation.x = 0;
//           brainEl.object3D.rotation.y = 0;
//           brainEl.object3D.rotation.z = 0;
           console.log('top button clicked');
    }
        function bottomView(event) {
            brainEl.setAttribute('rotation', {x:-180, y:0, z:0});
            brainEl.setAttribute('position', {x: 0, y: 1.2, z: 0})
//            brainEl.object3D.rotation.x = THREE.Math.degToRad(-180);
//           brainEl.object3D.rotation.y = 0;
//           brainEl.object3D.rotation.z = 0;
           console.log('bottom button clicked');
    }
        
    }
})

//function init() {
//        
//    var brainEl = document.querySelector('#brain');
//    console.log(brainEl)
//    
//    document.querySelector('#left').addEventListener('click', leftView);
//
//    function leftView(event) {
//
//       brainEl.object3D.rotation.y = THREE.Math.degToRad(-90);
//       brainEl.object3D.rotation.x = THREE.Math.degToRad(-90);
//
//       console.log('left button clicked');
//    }
//}
