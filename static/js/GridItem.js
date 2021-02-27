class GridItem {
    constructor(firstD, secondD) {
        var lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
        var geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(0, 0, 0));
        geometry.vertices.push(new THREE.Vector3(50, 0, 0));
        geometry.vertices.push(new THREE.Vector3(50, 0, 50));
        geometry.vertices.push(new THREE.Vector3(0, 0, 50));
        this.line = new THREE.Line(geometry, lineMaterial);
        var geometry2 = new THREE.PlaneGeometry(50, 50, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0xe3ead0, side: THREE.DoubleSide });
        this.plane = new THREE.Mesh(geometry2, material);
        this.plane.rotation.x += 1.57
        this.plane.position.x += 25
        this.plane.position.z += 25
        //this.plane.position.y = -25
        var now = new THREE.Object3D
        now.add(this.line)
        now.add(this.plane)
        this.now = now
        var xMove = firstD * 50
        var zMove = secondD * 50
        this.now.position.x += xMove
        this.now.position.z += zMove
    }
    one() {
        return (this.now)
    }
}