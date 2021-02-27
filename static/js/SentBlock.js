class SentBlock extends THREE.Object3D {
    constructor() {
        super()
        var geometryA = new THREE.BoxGeometry(50, 50, 50);
        var geometryB = new THREE.CylinderGeometry(5, 5, 10, 32);
        var meshA = new THREE.Mesh(geometryA)
        meshA.position.set(25, 25, 25)
        var meshB = new THREE.Mesh(geometryB)
        meshB.position.set(10, 50, 10)
        var meshC = new THREE.Mesh(geometryB)
        meshC.position.set(10, 50, 40)
        var meshD = new THREE.Mesh(geometryB)
        meshD.position.set(40, 50, 40)
        var meshE = new THREE.Mesh(geometryB)
        meshE.position.set(40, 50, 10)
        var singleGeometry = new THREE.Geometry();
        meshA.updateMatrix()
        singleGeometry.merge(meshA.geometry, meshA.matrix);
        meshB.updateMatrix()
        singleGeometry.merge(meshB.geometry, meshB.matrix);
        meshC.updateMatrix()
        singleGeometry.merge(meshC.geometry, meshC.matrix);
        meshD.updateMatrix()
        singleGeometry.merge(meshD.geometry, meshD.matrix);
        meshE.updateMatrix()
        singleGeometry.merge(meshE.geometry, meshE.matrix);
        var material = new THREE.MeshPhongMaterial({ color: 0x4ec417, side: THREE.DoubleSide });
        var singleMesh = new THREE.Mesh(singleGeometry, material);
        this.singleMesh = singleMesh
        this.singleMesh.block = true
        this.singleMesh.whose = false
    }
    one(p, x, z, add) {
        if (x != undefined) {
            var cX = (p.x - x) / 50
            this.singleMesh.position.x = p.x - x
        }
        else {
            var cX = p.x / 50
            this.singleMesh.position.x = p.x
        }
        if (z != undefined) {
            var cZ = (p.z - z) / 50
            this.singleMesh.position.z = p.z - z
        }
        else {
            var cZ = p.z / 50
            this.singleMesh.position.z = p.z
        }
        this.singleMesh.position.y = 0
        return (this.singleMesh)
    }
}

// class Block1 extends THREE.Object3D {
//     constructor() {
//         super()
//         var geometryA = new THREE.BoxGeometry(50, 50, 50);
//         var geometryB = new THREE.CylinderGeometry(5, 5, 10, 32);
//         var meshA = new THREE.Mesh(geometryA)
//         meshA.position.set(25, 25, 25)
//         var meshB = new THREE.Mesh(geometryB)
//         meshB.position.set(10, 50, 10)
//         var meshC = new THREE.Mesh(geometryB)
//         meshC.position.set(10, 50, 40)
//         var meshD = new THREE.Mesh(geometryB)
//         meshD.position.set(40, 50, 40)
//         var meshE = new THREE.Mesh(geometryB)
//         meshE.position.set(40, 50, 10)
//         var singleGeometry = new THREE.Geometry();
//         meshA.updateMatrix()
//         singleGeometry.merge(meshA.geometry, meshA.matrix);
//         meshB.updateMatrix()
//         singleGeometry.merge(meshB.geometry, meshB.matrix);
//         meshC.updateMatrix()
//         singleGeometry.merge(meshC.geometry, meshC.matrix);
//         meshD.updateMatrix()
//         singleGeometry.merge(meshD.geometry, meshD.matrix);
//         meshE.updateMatrix()
//         singleGeometry.merge(meshE.geometry, meshE.matrix);
//         var material = new THREE.MeshBasicMaterial({ color: 0x4ec417, side: THREE.DoubleSide });
//         var singleMesh = new THREE.Mesh(singleGeometry, material);
//         this.singleMesh = singleMesh
//         this.singleMesh.block = true
//     }
//     one(p, x, z) {
//         if (x != undefined) {
//             var cX = (p.x - x) / 50
//             this.singleMesh.position.x = p.x - x
//         }
//         else {
//             var cX = p.x / 50
//             this.singleMesh.position.x = p.x
//         }
//         if (z != undefined) {
//             var cZ = (p.z - z) / 50
//             this.singleMesh.position.z = p.z - z
//         }
//         else {
//             var cZ = p.z / 50
//             this.singleMesh.position.z = p.z
//         }
//         this.singleMesh.position.y = 0
//         return (this.singleMesh)
//     }
// }

class SentBlock2 extends THREE.Object3D {
    constructor() {
        super()
        var geometryA = new THREE.BoxGeometry(50, 50, 50);
        var geometryB = new THREE.CylinderGeometry(5, 5, 10, 32);
        var meshA = new THREE.Mesh(geometryA)
        meshA.position.set(25, 25, 25)
        var meshB = new THREE.Mesh(geometryB)
        meshB.position.set(10, 50, 10)
        var meshC = new THREE.Mesh(geometryB)
        meshC.position.set(10, 50, 40)
        var meshD = new THREE.Mesh(geometryB)
        meshD.position.set(40, 50, 40)
        var meshE = new THREE.Mesh(geometryB)
        meshE.position.set(40, 50, 10)
        var singleGeometry = new THREE.Geometry();
        meshA.updateMatrix()
        singleGeometry.merge(meshA.geometry, meshA.matrix);
        meshB.updateMatrix()
        singleGeometry.merge(meshB.geometry, meshB.matrix);
        meshC.updateMatrix()
        singleGeometry.merge(meshC.geometry, meshC.matrix);
        meshD.updateMatrix()
        singleGeometry.merge(meshD.geometry, meshD.matrix);
        meshE.updateMatrix()
        singleGeometry.merge(meshE.geometry, meshE.matrix);
        var material = new THREE.MeshPhongMaterial({ color: 0x4ec417, side: THREE.DoubleSide });
        var singleMesh = new THREE.Mesh(singleGeometry);
        singleMesh.updateMatrix()
        var singleMesh2 = new THREE.Mesh(singleGeometry)
        singleMesh2.position.set(0, 0, 50)
        singleMesh2.updateMatrix()
        var doubleGeometry = new THREE.Geometry();
        doubleGeometry.merge(singleMesh.geometry, singleMesh.matrix)
        doubleGeometry.merge(singleMesh2.geometry, singleMesh2.matrix)
        var doubleMesh = new THREE.Mesh(doubleGeometry, material)
        this.doubleMesh = doubleMesh
        this.doubleMesh.block = true
        this.doubleMesh.whose = false

    }
    one(p, x, z) {
        if (x != undefined) {
            var cX = (p.x - x) / 50
            this.doubleMesh.position.x = p.x - x
        }
        else {
            var cX = p.x / 50
            this.doubleMesh.position.x = p.x
        }
        if (z != undefined) {
            var cZ = (p.z - z) / 50
            this.doubleMesh.position.z = p.z - z
        }
        else {
            var cZ = p.z / 50
            this.doubleMesh.position.z = p.z
        }
        this.doubleMesh.position.y = 0
        // var possibleMaximumHeight = game.tabOfBlocks[cX][cZ]
        // if (possibleMaximumHeight > game.tabOfBlocks[cX][cZ + 1]) {
        //     game.tabOfBlocks[cX][cZ + 1] = possibleMaximumHeight
        // }
        return (this.doubleMesh)
    }
}
class SentBlock3 extends THREE.Object3D {
    constructor() {
        super()
        var geometryA = new THREE.BoxGeometry(50, 50, 50);
        var geometryB = new THREE.CylinderGeometry(5, 5, 10, 32);
        var meshA = new THREE.Mesh(geometryA)
        meshA.position.set(25, 25, 25)
        var meshB = new THREE.Mesh(geometryB)
        meshB.position.set(10, 50, 10)
        var meshC = new THREE.Mesh(geometryB)
        meshC.position.set(10, 50, 40)
        var meshD = new THREE.Mesh(geometryB)
        meshD.position.set(40, 50, 40)
        var meshE = new THREE.Mesh(geometryB)
        meshE.position.set(40, 50, 10)
        var singleGeometry = new THREE.Geometry();
        meshA.updateMatrix()
        singleGeometry.merge(meshA.geometry, meshA.matrix);
        meshB.updateMatrix()
        singleGeometry.merge(meshB.geometry, meshB.matrix);
        meshC.updateMatrix()
        singleGeometry.merge(meshC.geometry, meshC.matrix);
        meshD.updateMatrix()
        singleGeometry.merge(meshD.geometry, meshD.matrix);
        meshE.updateMatrix()
        singleGeometry.merge(meshE.geometry, meshE.matrix);
        var material = new THREE.MeshPhongMaterial({ color: 0x4ec417, side: THREE.DoubleSide });
        var singleMesh = new THREE.Mesh(singleGeometry);
        singleMesh.updateMatrix()
        var singleMesh2 = new THREE.Mesh(singleGeometry)
        singleMesh2.position.set(0, 0, 50)
        singleMesh2.updateMatrix()
        var singleMesh3 = new THREE.Mesh(singleGeometry)
        singleMesh3.position.set(0, 0, 100)
        singleMesh3.updateMatrix()
        var tripleGeometry = new THREE.Geometry();
        tripleGeometry.merge(singleMesh.geometry, singleMesh.matrix)
        tripleGeometry.merge(singleMesh2.geometry, singleMesh2.matrix)
        tripleGeometry.merge(singleMesh3.geometry, singleMesh3.matrix)
        var tripleMesh = new THREE.Mesh(tripleGeometry, material)
        this.tripleMesh = tripleMesh
        this.tripleMesh.block = true
        this.tripleMesh.whose = false
    }
    one(p, x, z) {
        if (x != undefined) {
            var cX = (p.x - x) / 50
            this.tripleMesh.position.x = p.x - x
        }
        else {
            var cX = p.x / 50
            this.tripleMesh.position.x = p.x
        }
        if (z != undefined) {
            var cZ = (p.z - z) / 50
            this.tripleMesh.position.z = p.z - z
        }
        else {
            var cZ = p.z / 50
            this.tripleMesh.position.z = p.z
        }
        this.tripleMesh.position.y = 0
        // game.tabOfBlocks[cX][cZ + 1] = game.tabOfBlocks[cX][cZ]
        // game.tabOfBlocks[cX][cZ + 2] = game.tabOfBlocks[cX][cZ]
        // this.tripleMesh.position.y += ((game.tabOfBlocks[cX][cZ + 1] - 1) * 50)
        // var possibleMaximumHeight = game.tabOfBlocks[cX][cZ]
        // if (possibleMaximumHeight > game.tabOfBlocks[cX][cZ + 1]) {
        //     game.tabOfBlocks[cX][cZ + 1] = possibleMaximumHeight
        // }
        // if (possibleMaximumHeight > game.tabOfBlocks[cX][cZ + 2]) {
        //     game.tabOfBlocks[cX][cZ + 2] = possibleMaximumHeight
        // }
        return (this.tripleMesh)
    }
}

class SentBlock4 extends THREE.Object3D {
    constructor() {
        super()
        var geometryA = new THREE.BoxGeometry(50, 50, 50);
        var geometryB = new THREE.CylinderGeometry(5, 5, 10, 32);
        var meshA = new THREE.Mesh(geometryA)
        meshA.position.set(25, 25, 25)
        var meshB = new THREE.Mesh(geometryB)
        meshB.position.set(10, 50, 10)
        var meshC = new THREE.Mesh(geometryB)
        meshC.position.set(10, 50, 40)
        var meshD = new THREE.Mesh(geometryB)
        meshD.position.set(40, 50, 40)
        var meshE = new THREE.Mesh(geometryB)
        meshE.position.set(40, 50, 10)
        var singleGeometry = new THREE.Geometry();
        meshA.updateMatrix()
        singleGeometry.merge(meshA.geometry, meshA.matrix);
        meshB.updateMatrix()
        singleGeometry.merge(meshB.geometry, meshB.matrix);
        meshC.updateMatrix()
        singleGeometry.merge(meshC.geometry, meshC.matrix);
        meshD.updateMatrix()
        singleGeometry.merge(meshD.geometry, meshD.matrix);
        meshE.updateMatrix()
        singleGeometry.merge(meshE.geometry, meshE.matrix);
        var material = new THREE.MeshPhongMaterial({ color: 0x4ec417, side: THREE.DoubleSide });
        var singleMesh = new THREE.Mesh(singleGeometry);
        singleMesh.updateMatrix()
        var singleMesh2 = new THREE.Mesh(singleGeometry)
        singleMesh2.position.set(0, 0, 50)
        singleMesh2.updateMatrix()
        var singleMesh3 = new THREE.Mesh(singleGeometry)
        singleMesh3.position.set(0, 0, 100)
        singleMesh3.updateMatrix()
        var singleMesh4 = new THREE.Mesh(singleGeometry)
        singleMesh4.position.set(0, 0, 150)
        singleMesh4.updateMatrix()
        var quattroGeometry = new THREE.Geometry();
        quattroGeometry.merge(singleMesh.geometry, singleMesh.matrix)
        quattroGeometry.merge(singleMesh2.geometry, singleMesh2.matrix)
        quattroGeometry.merge(singleMesh3.geometry, singleMesh3.matrix)
        quattroGeometry.merge(singleMesh4.geometry, singleMesh4.matrix)
        var quattroMesh = new THREE.Mesh(quattroGeometry, material)
        this.quattroMesh = quattroMesh
        this.quattroMesh.block = true
        this.quattroMesh.whose = false
    }
    one(p, x, z) {
        if (x != undefined) {
            var cX = (p.x - x) / 50
            this.quattroMesh.position.x = p.x - x
        }
        else {
            var cX = p.x / 50
            this.quattroMesh.position.x = p.x
        }
        if (z != undefined) {
            var cZ = (p.z - z) / 50
            this.quattroMesh.position.z = p.z - z
        }
        else {
            var cZ = p.z / 50
            this.quattroMesh.position.z = p.z
        }
        this.quattroMesh.position.y = 0
        // game.tabOfBlocks[cX][cZ + 1] = game.tabOfBlocks[cX][cZ]
        // game.tabOfBlocks[cX][cZ + 2] = game.tabOfBlocks[cX][cZ]
        // this.tripleMesh.position.y += ((game.tabOfBlocks[cX][cZ + 1] - 1) * 50)
        // var possibleMaximumHeight = game.tabOfBlocks[cX][cZ]
        // if (possibleMaximumHeight > game.tabOfBlocks[cX][cZ + 1]) {
        //     game.tabOfBlocks[cX][cZ + 1] = possibleMaximumHeight
        // }
        // if (possibleMaximumHeight > game.tabOfBlocks[cX][cZ + 2]) {
        //     game.tabOfBlocks[cX][cZ + 2] = possibleMaximumHeight
        // }
        // if (possibleMaximumHeight > game.tabOfBlocks[cX][cZ + + 3]) {
        //     game.tabOfBlocks[cX][cZ + 3] = possibleMaximumHeight
        // }
        return (this.quattroMesh)
    }
}