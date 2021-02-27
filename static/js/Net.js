class Net {
    constructor() {

    }
    send(x, y, z) {
        game.socket.emit("position", { posX: x, posY: y, posZ: z });
    }
    add(x, y, z) {
        console.log("add")
        var block = new SentBlock()
        var mesh = block.one(0, 0, 0)
        mesh.position.x = x
        mesh.position.y = y
        mesh.position.z = z
        game.currentSentBlock = mesh
        game.currentBlock = mesh
        game.scene.add(game.currentSentBlock)
        game.first = false
    }
    sendColor(color) {
        game.socket.emit("color", { col: color })
    }
    newColor(color) {
        game.currentSentBlock.material = game.tabOfMaterials[color]
    }
    sendSize(size, x, y, z) {
        game.socket.emit("size", { siz: size, posX: x, posY: y, posZ: z })
    }
    newSize(size, x, y, z) {
        console.log("newSize")
        game.nowNumberOfSize = size
        game.scene.remove(game.currentSentBlock)
        if (size == 0) {
            var block = new SentBlock()
            var mesh = block.one(0, 0, 0)
            mesh.position.x = x
            mesh.position.y = y
            mesh.position.z = z
            game.currentSentBlock = mesh
            game.currentBlock = mesh
            game.scene.add(game.currentSentBlock)
        }
        else if (size == 1) {
            var block = new SentBlock2()
            var mesh = block.one(0, 0, 0)
            mesh.position.x = x
            mesh.position.y = y
            mesh.position.z = z
            game.currentSentBlock = mesh
            game.currentBlock = mesh
            game.scene.add(game.currentSentBlock)
        }
        else if (size == 2) {
            var block = new SentBlock3()
            var mesh = block.one(0, 0, 0)
            mesh.position.x = x
            mesh.position.y = y
            mesh.position.z = z
            game.currentSentBlock = mesh
            game.currentBlock = mesh
            game.scene.add(game.currentSentBlock)
        }
        else if (size == 3) {
            var block = new SentBlock4()
            var mesh = block.one(0, 0, 0)
            mesh.position.x = x
            mesh.position.y = y
            mesh.position.z = z
            game.currentSentBlock = mesh
            game.currentBlock = mesh
            game.scene.add(game.currentSentBlock)
        }
    }
    sendDirection(dir, x, z) {
        game.socket.emit("direction", { direction: dir, posX: x, posZ: z })
    }
    newDirection(dir, x, z) {
        console.log("newDirection")
        game.direction = dir
        game.currentSentBlock.rotation.y += ((Math.PI / 2))
        game.currentBlock = game.currentSentBlock
        if (dir == 0) {
            game.currentSentBlock.position.x -= 50
            game.currentSentBlock.x = 0
        }
        if (dir == 1) {
            game.currentSentBlock.position.z += 50
            game.currentSentBlock.z = 50
        }
        if (dir == 2) {
            game.currentSentBlock.position.x += 50
            game.currentSentBlock.x = 50
        }
        if (dir == 3) {
            game.currentSentBlock.position.z -= 50
            game.currentSentBlock.z = 0
        }
    }
    removing() {
        game.socket.emit("removing", {})
    }
    rem() {
        console.log("remSent")
        game.scene.remove(game.currentSentBlock)
    }
    updateTab(tab) {
        game.socket.emit("updating", { blocks: tab })
    }
    upt(tab) {
        game.tabOfBlocks = tab
    }
}