class Game {
    constructor() {
        this.camera = new THREE.OrthographicCamera(
            window.innerWidth / -2,
            window.innerWidth / 2,
            window.innerHeight / 2,
            window.innerHeight / -2,
            0, // minimalny zasięg musi być >= 0
            10000);
        // this.camera = new THREE.PerspectiveCamera(
        //     45,    // kąt patrzenia kamery (FOV - field of view)
        //     4 / 3,    // proporcje widoku, powinny odpowiadać proporjom naszego ekranu przeglądarki
        //     0.1,    // minimalna renderowana odległość
        //     10000    // maxymalna renderowana odległość od kamery 
        // );
        this.scene = new THREE.Scene();
        var axes = new THREE.AxesHelper(10000)
        this.scene.add(axes)
        for (let i = 0; i < 3; i++) {
            var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
            var box = new THREE.Object3D()
            box.position.set(i * 500, 1000, i * 200)
            box.add(directionalLight)
            this.scene.add(box);
        }
        this.angleH = Math.PI / 4
        this.angleV = Math.PI / 4
        this.camera.position.set(2100, 1100, 2100)
        this.camera.lookAt(0, 0, 0)
        this.camera.updateProjectionMatrix()
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setClearColor(0xffffff);
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        var that = this
        // var orbitControl = new THREE.OrbitControls(that.camera, that.renderer.domElement);
        // orbitControl.addEventListener('change', function () {
        //     that.renderer.render(that.scene, that.camera)
        // });
        $("#root").append(this.renderer.domElement);
        function render() {
            requestAnimationFrame(render);
            that.renderer.render(that.scene, that.camera);
        }
        render()
        for (var i = 0; i < 15; i++) {
            for (var j = 0; j < 15; j++) {
                var grid = new GridItem(i, j)
                this.scene.add(grid.one())
            }
        }
        this.tabOfBlocks = []
        var cols = 15;

        //init the grid matrix
        for (let i = 0; i < cols; i++) {
            that.tabOfBlocks[i] = [];
        }
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 15; j++) {
                that.tabOfBlocks[i].push(0)
            }
        }
        var raycaster = new THREE.Raycaster()
        var mouseVector = new THREE.Vector2()
        that.size = false
        that.dir = false
        that.first = true
        this.new = false
        $(document).mousedown(function (event) {
            that.new = false
            if (that.first == false) {
                if (that.direction == 0) {
                    if (that.currentBlock != undefined) {
                        var cX = that.currentBlock.position.x / 50
                        var cZ = that.currentBlock.position.z / 50
                        if (that.nowNumberOfSize == 1) {

                            var possibleMaximumH = that.currentBlock.position.y / 50
                            possibleMaximumH += 1
                            if (game.tabOfBlocks[cX][cZ + 1] < possibleMaximumH) {
                                game.tabOfBlocks[cX][cZ + 1] = possibleMaximumH
                                net.updateTab(game.tabOfBlocks)
                            }
                            else {
                                game.tabOfBlocks[cX][cZ] -= 1
                                game.scene.remove(that.currentBlock)
                                net.removing()
                            }
                        }
                        else if (that.nowNumberOfSize == 2) {
                            var possibleMaximumH = that.currentBlock.position.y / 50
                            possibleMaximumH += 1
                            if (game.tabOfBlocks[cX][cZ + 1] < possibleMaximumH && game.tabOfBlocks[cX][cZ + 2] < possibleMaximumH) {
                                game.tabOfBlocks[cX][cZ + 1] = possibleMaximumH
                                game.tabOfBlocks[cX][cZ + 2] = possibleMaximumH
                                net.updateTab(game.tabOfBlocks)
                            }
                            else {
                                game.tabOfBlocks[cX][cZ] -= 1
                                game.scene.remove(that.currentBlock)
                                net.removing()
                            }
                        }
                        else if (that.nowNumberOfSize == 3) {
                            var possibleMaximumH = that.currentBlock.position.y / 50
                            possibleMaximumH += 1
                            if (game.tabOfBlocks[cX][cZ + 1] < possibleMaximumH && game.tabOfBlocks[cX][cZ + 2] < possibleMaximumH && game.tabOfBlocks[cX][cZ + 3] < possibleMaximumH) {
                                game.tabOfBlocks[cX][cZ + 1] = possibleMaximumH
                                game.tabOfBlocks[cX][cZ + 2] = possibleMaximumH
                                game.tabOfBlocks[cX][cZ + 3] = possibleMaximumH
                                net.updateTab(game.tabOfBlocks)
                            }
                            else {
                                game.tabOfBlocks[cX][cZ] -= 1
                                game.scene.remove(that.currentBlock)
                                net.removing()
                            }
                        }
                    }
                }
                else if (that.direction == 1) {
                    var cX = that.currentBlock.position.x / 50
                    var cZ = that.currentBlock.position.z / 50
                    cZ -= 1
                    if (that.nowNumberOfSize == 1) {
                        var possibleMaximumH = that.currentBlock.position.y / 50
                        possibleMaximumH += 1
                        if (game.tabOfBlocks[cX + 1][cZ] < possibleMaximumH) {
                            game.tabOfBlocks[cX + 1][cZ] = possibleMaximumH
                            net.updateTab(game.tabOfBlocks)
                        }
                        else {
                            game.tabOfBlocks[cX][cZ] -= 1
                            game.scene.remove(that.currentBlock)
                            net.removing()
                        }
                    }
                    else if (that.nowNumberOfSize == 2) {
                        var possibleMaximumH = that.currentBlock.position.y / 50
                        possibleMaximumH += 1
                        if (game.tabOfBlocks[cX + 1][cZ] < possibleMaximumH && game.tabOfBlocks[cX + 2][cZ] < possibleMaximumH) {
                            game.tabOfBlocks[cX + 1][cZ] = possibleMaximumH
                            game.tabOfBlocks[cX + 2][cZ] = possibleMaximumH
                            net.updateTab(game.tabOfBlocks)
                        }
                        else {
                            game.tabOfBlocks[cX][cZ] -= 1
                            game.scene.remove(that.currentBlock)
                            net.removing()
                        }
                    }
                    else if (that.nowNumberOfSize == 3) {
                        var possibleMaximumH = that.currentBlock.position.y / 50
                        possibleMaximumH += 1
                        if (game.tabOfBlocks[cX + 1][cZ] < possibleMaximumH && game.tabOfBlocks[cX + 2][cZ] < possibleMaximumH && game.tabOfBlocks[cX + 3][cZ] < possibleMaximumH) {
                            game.tabOfBlocks[cX + 1][cZ] = possibleMaximumH
                            game.tabOfBlocks[cX + 2][cZ] = possibleMaximumH
                            game.tabOfBlocks[cX + 3][cZ] = possibleMaximumH
                            net.updateTab(game.tabOfBlocks)
                        }
                        else {
                            game.tabOfBlocks[cX][cZ] -= 1
                            game.scene.remove(that.currentBlock)
                            net.removing()
                        }
                    }
                }
                else if (that.direction == 2) {
                    var cX = that.currentBlock.position.x / 50
                    cX -= 1
                    var cZ = that.currentBlock.position.z / 50
                    cZ -= 1
                    if (that.nowNumberOfSize == 1) {
                        var possibleMaximumH = that.currentBlock.position.y / 50
                        possibleMaximumH += 1
                        if (game.tabOfBlocks[cX][cZ - 1] < possibleMaximumH) {
                            game.tabOfBlocks[cX][cZ - 1] = possibleMaximumH
                            net.updateTab(game.tabOfBlocks)
                        }
                        else {
                            game.tabOfBlocks[cX][cZ] -= 1
                            game.scene.remove(that.currentBlock)
                            net.removing()
                        }
                    }
                    else if (that.nowNumberOfSize == 2) {
                        var possibleMaximumH = that.currentBlock.position.y / 50
                        possibleMaximumH += 1
                        if (game.tabOfBlocks[cX][cZ - 1] < possibleMaximumH && game.tabOfBlocks[cX][cZ - 2] < possibleMaximumH) {
                            game.tabOfBlocks[cX][cZ - 1] = possibleMaximumH
                            game.tabOfBlocks[cX][cZ - 2] = possibleMaximumH
                            net.updateTab(game.tabOfBlocks)
                        }
                        else {
                            game.tabOfBlocks[cX][cZ] -= 1
                            game.scene.remove(that.currentBlock)
                            net.removing()
                        }
                    }
                    else if (that.nowNumberOfSize == 3) {
                        var possibleMaximumH = that.currentBlock.position.y / 50
                        possibleMaximumH += 1
                        if (game.tabOfBlocks[cX][cZ - 1] < possibleMaximumH && game.tabOfBlocks[cX][cZ - 2] < possibleMaximumH && game.tabOfBlocks[cX][cZ - 3] < possibleMaximumH) {
                            game.tabOfBlocks[cX][cZ - 1] = possibleMaximumH
                            game.tabOfBlocks[cX][cZ - 2] = possibleMaximumH
                            game.tabOfBlocks[cX][cZ - 3] = possibleMaximumH
                            net.updateTab(game.tabOfBlocks)
                        }
                        else {
                            game.tabOfBlocks[cX][cZ] -= 1
                            game.scene.remove(that.currentBlock)
                            net.removing()
                        }
                    }
                }
                else if (that.direction == 3) {
                    var cX = that.currentBlock.position.x / 50
                    cX -= 1
                    var cZ = that.currentBlock.position.z / 50
                    if (that.nowNumberOfSize == 1) {
                        var possibleMaximumH = that.currentBlock.position.y / 50
                        possibleMaximumH += 1
                        if (game.tabOfBlocks[cX - 1][cZ] < possibleMaximumH) {
                            game.tabOfBlocks[cX - 1][cZ] = possibleMaximumH
                            net.updateTab(game.tabOfBlocks)
                        }
                        else {
                            game.tabOfBlocks[cX][cZ] -= 1
                            game.scene.remove(that.currentBlock)
                            net.removing()
                        }
                    }
                    else if (that.nowNumberOfSize == 2) {
                        var possibleMaximumH = that.currentBlock.position.y / 50
                        possibleMaximumH += 1
                        if (game.tabOfBlocks[cX - 1][cZ] < possibleMaximumH && game.tabOfBlocks[cX - 2][cZ] < possibleMaximumH) {
                            game.tabOfBlocks[cX - 1][cZ] = possibleMaximumH
                            game.tabOfBlocks[cX - 2][cZ] = possibleMaximumH
                            net.updateTab(game.tabOfBlocks)
                        }
                        else {
                            game.tabOfBlocks[cX][cZ] -= 1
                            game.scene.remove(that.currentBlock)
                            net.removing()
                        }
                    }
                    else if (that.nowNumberOfSize == 3) {
                        var possibleMaximumH = that.currentBlock.position.y / 50
                        possibleMaximumH += 1
                        if (game.tabOfBlocks[cX - 1][cZ] < possibleMaximumH && game.tabOfBlocks[cX - 2][cZ] < possibleMaximumH && game.tabOfBlocks[cX - 3][cZ] < possibleMaximumH) {
                            game.tabOfBlocks[cX - 1][cZ] = possibleMaximumH
                            game.tabOfBlocks[cX - 2][cZ] = possibleMaximumH
                            game.tabOfBlocks[cX - 3][cZ] = possibleMaximumH
                            net.updateTab(game.tabOfBlocks)
                        }
                        else {
                            game.tabOfBlocks[cX][cZ] -= 1
                            game.scene.remove(that.currentBlock)
                            net.removing()
                        }
                    }
                }
            }
            that.first = false
            that.size = true
            that.dir = true
            that.nowNumberOfSize = 0
            that.direction = 0
            mouseVector.x = (event.clientX / $(window).width()) * 2 - 1;
            mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1;
            raycaster.setFromCamera(mouseVector, that.camera);
            var intersects = raycaster.intersectObjects(that.scene.children, true);
            if (intersects.length > 0) {
                that.new = true
                var pos = intersects[0]
                that.pos = pos
                if (pos.object.block != true) {
                    var cX = pos.object.parent.position.x / 50
                    var cZ = pos.object.parent.position.z / 50
                    if (that.tabOfBlocks[cX][cZ] == 0) {
                        var bl = new Block()
                        that.currentBlock = bl.one(pos.object.parent.position, 0, 0)
                        that.currentSentBlock = that.currentBlock
                        that.currentBlock.position.y = pos.object.parent.position.y
                        that.currentBlock.x = 0
                        that.currentBlock.z = 0
                        var possibleMaximumHeight = that.currentBlock.position.y / 50
                        possibleMaximumHeight += 1
                        if (possibleMaximumHeight > game.tabOfBlocks[cX][cZ]) {
                            game.tabOfBlocks[cX][cZ] = possibleMaximumHeight
                        }
                        that.scene.add(that.currentBlock)
                        net.updateTab(game.tabOfBlocks)
                    }

                }
                else {
                    if (pos.object.whose == undefined) { //|| pos.object.whose == false) {
                        var cX = pos.object.position.x / 50
                        var cZ = pos.object.position.z / 50
                        var bl = new Block()
                        that.currentBlock = bl.one(pos.object.position, pos.object.x, pos.object.z)
                        that.currentSentBlock = that.currentBlock
                        that.currentBlock.position.y = pos.object.position.y + 50
                        var possibleMaximumHeight = that.currentBlock.position.y / 50
                        possibleMaximumHeight += 1
                        if (possibleMaximumHeight > game.tabOfBlocks[cX][cZ]) {
                            game.tabOfBlocks[cX][cZ] = possibleMaximumHeight
                        }
                        that.scene.add(that.currentBlock)
                        net.updateTab(game.tabOfBlocks)
                    }
                }
            }
            if (that.currentBlock != undefined && intersects.length > 0) {
                net.send(that.currentBlock.position.x, that.currentBlock.position.y, that.currentBlock.position.z)
            }
        })
        this.tabOfMaterials = []
        this.tabOfMaterials.push(new THREE.MeshPhongMaterial({ color: 0x4ec417, side: THREE.DoubleSide }))
        this.tabOfMaterials.push(new THREE.MeshPhongMaterial({ color: 0xed1c09, side: THREE.DoubleSide }))
        this.tabOfMaterials.push(new THREE.MeshPhongMaterial({ color: 0x0911f2, side: THREE.DoubleSide }))
        this.tabOfMaterials.push(new THREE.MeshPhongMaterial({ color: 0xee09f1, side: THREE.DoubleSide }))
        this.nowNumber = 0
        // this.nowNumberOfSize = 1
        this.direction = 0
        $(document).on("keydown", function (event) {
            if (event.which == 27 && that.new == true) {
                that.nowNumber += 1
                that.nowNumber = that.nowNumber % 4
                that.currentBlock.material = that.tabOfMaterials[that.nowNumber]
                net.sendColor(that.nowNumber)
            }
            else if (event.which == 17 && that.size == true && that.new == true) {
                that.scene.remove(that.currentBlock)
                that.nowNumberOfSize += 1
                that.nowNumberOfSize = that.nowNumberOfSize % 4
                if (that.nowNumberOfSize == 0) {
                    if (that.pos.object.block != true) {
                        var bl = new Block1()
                        that.currentBlock = bl.one(that.pos.object.parent.position, 0, 0)
                        that.currentSentBlock = that.currentBlock
                        that.currentBlock.position.y = that.pos.object.parent.position.y
                        that.scene.add(that.currentBlock)
                    }
                    else {
                        var bl = new Block1()
                        that.currentBlock = bl.one(that.pos.object.position, that.pos.object.x, that.pos.object.z)
                        that.currentSentBlock = that.currentBlock
                        that.currentBlock.position.y = that.pos.object.position.y + 50
                        that.scene.add(that.currentBlock)
                    }
                }
                else if (that.nowNumberOfSize == 1) {
                    if (that.pos.object.block != true) {
                        var bl = new Block2()
                        that.currentBlock = bl.one(that.pos.object.parent.position, 0, 0)
                        that.currentSentBlock = that.currentBlock
                        that.currentBlock.position.y = that.pos.object.parent.position.y
                        that.scene.add(that.currentBlock)
                    }
                    else {
                        var bl = new Block2()
                        that.currentBlock = bl.one(that.pos.object.position, that.pos.object.x, that.pos.object.z)
                        that.currentSentBlock = that.currentBlock
                        that.currentBlock.position.y = that.pos.object.position.y + 50
                        that.scene.add(that.currentBlock)
                    }
                }
                else if (that.nowNumberOfSize == 2) {
                    if (that.pos.object.block != true) {
                        var bl = new Block3()
                        that.currentBlock = bl.one(that.pos.object.parent.position, 0, 0)
                        that.currentSentBlock = that.currentBlock
                        that.currentBlock.position.y = that.pos.object.parent.position.y
                        that.scene.add(that.currentBlock)
                    }
                    else {
                        var bl = new Block3()
                        that.currentBlock = bl.one(that.pos.object.position, that.pos.object.x, that.pos.object.z)
                        that.currentSentBlock = that.currentBlock
                        that.currentBlock.position.y = that.pos.object.position.y + 50
                        that.scene.add(that.currentBlock)
                    }
                }
                else if (that.nowNumberOfSize == 3) {
                    if (that.pos.object.block != true) {
                        var bl = new Block4()
                        that.currentBlock = bl.one(that.pos.object.parent.position, 0, 0)
                        that.currentSentBlock = that.currentBlock
                        that.currentBlock.position.y = that.pos.object.parent.position.y
                        that.scene.add(that.currentBlock)
                    }
                    else {
                        var bl = new Block4()
                        that.currentBlock = bl.one(that.pos.object.position, that.pos.object.x, that.pos.object.z)
                        that.currentSentBlock = that.currentBlock
                        that.currentBlock.position.y = that.pos.object.position.y + 50
                        that.scene.add(that.currentBlock)
                    }
                }
                net.sendSize(that.nowNumberOfSize, that.currentBlock.position.x, that.currentBlock.position.y, that.currentBlock.position.z)
            }
            else if (event.which == 32 && that.dir == true && that.new == true) {
                that.size = false
                that.direction += 1
                that.direction = that.direction % 4
                that.currentBlock.rotation.y += (Math.PI / 2)
                if (that.direction == 0) {
                    that.currentBlock.position.x -= 50
                    that.currentBlock.x = 0
                }
                if (that.direction == 1) {
                    that.currentBlock.position.z += 50
                    that.currentBlock.z = 50
                }
                if (that.direction == 2) {
                    that.currentBlock.position.x += 50
                    that.currentBlock.x = 50
                }
                if (that.direction == 3) {
                    that.currentBlock.position.z -= 50
                    that.currentBlock.z = 0
                }
                net.sendDirection(that.direction, that.currentBlock.position.x, that.currentBlock.position.z)
            }
            else if (event.which == 87) { //s
                that.angleV -= Math.PI / 100
            }
            else if (event.which == 65) { //a
                that.angleH -= Math.PI / 100
            }
            else if (event.which == 83) { //w
                that.angleV += Math.PI / 100
            }
            else if (event.which == 68) { //d
                that.angleH += Math.PI / 100
            }
            that.camera.position.x = 2100 * Math.sin(that.angleH)
            that.camera.position.y = 1100 * Math.sin(that.angleV)
            that.camera.position.z = 2100 * Math.cos(that.angleH)
            that.camera.lookAt(0, 0, 0)
            that.camera.updateProjectionMatrix()
        })
    }
}