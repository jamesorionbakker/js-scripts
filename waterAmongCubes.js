class CubeMap {
    constructor(array) {
        this.cubeMap = array;
        console.log('-----------Original Map-----------');
        console.table(array);
        //get max cube height
        this.max = null;
        this.cubeMap.forEach((row) => {
            row.forEach((cube) => {
                if (cube > this.max) {
                    this.max = cube;
                }
            })
        })
        //get min cube height
        this.min = this.max;
        this.cubeMap.forEach((row) => {
            row.forEach((cube) => {
                if (cube < this.min) {
                    this.min = cube;
                }
            })
        })
        this.depth = this.max - this.min;
        this.volume = 0;
        this.funStack = 0;
        this.width = this.cubeMap[0].length; //assumes a rectangular map
        this.height = this.cubeMap.length;
    }
    wasVisited(cube) {
        for (let i = 0; i < this.visited.length; i++) {
            this.visited[i];
            if (cube.x === this.visited[i].x && cube.y === this.visited[i].y) {
                return true;
            }
        }
        return false;
    }
    isEdgeCube(cube) {
        if (cube.y < 1 || cube.y >= this.height - 1) {
            return true;
        }
        if (cube.x < 1 || cube.x >= this.width - 1) {
            return true;
        }
        return false;
    }
    getInnerCubes() {
        let cubeMap = this.cubeMap;
        let landlocked = [];
        cubeMap.forEach((row, y) => {
            if (y > 0 && y < this.height - 1) {
                row.forEach((cube, x) => {
                    if (x > 0 && x < this.width - 1) {
                        landlocked.push({
                            x,
                            y,
                            height: cubeMap[y][x]
                        })
                    }
                })
            }
        })
        return landlocked;
    }
    getCubeObject(x, y) {
        return {
            x,
            y,
            height: this.cubeMap[y][x]
        }
    }
    canPool(current) {
        if (this.wasVisited(current)) {
            return true;
        }
        if (this.isEdgeCube(current)) {
            return false;
        }
        this.visited.push(current);
        let W = this.getCubeObject(current.x - 1, current.y);
        let E = this.getCubeObject(current.x + 1, current.y);
        let N = this.getCubeObject(current.x, current.y - 1);
        let S = this.getCubeObject(current.x, current.y + 1);

        if (current.height > N.height ||
            current.height > E.height ||
            current.height > S.height ||
            current.height > W.height) {
            return false;
        }
        if (current.height === N.height) {
            if (!this.canPool(N)) {
                return false;
            }
        }
        if (current.height === E.height) {

            if (!this.canPool(E)) {
                return false;
            }
        }
        if (current.height === S.height) {

            if (!this.canPool(S)) {
                return false;
            }
        }
        if (current.height === W.height) {

            if (!this.canPool(W)) {
                return false;
            }
        }
        return true;
    }
    getVolume() {
        for (let i = 0; i < this.depth; i++) {
            let anyFilled = false;
            this.getInnerCubes().forEach((cube) => {
                this.visited = []
                let x = cube.x;
                let y = cube.y;
                if (this.canPool(cube)) {
                    console.log('filling ' + cube.x + ',' + cube.y);
                    anyFilled = true;;
                    this.cubeMap[y][x]++;
                    this.volume++;
                } else {
                }
            })
            if(!anyFilled){
                break;
            }
        }
        console.log('-----------Filled Map-----------');
        console.table(this.cubeMap);
        return this.volume;
    }
}

let testWidth = 5;
let testHeight = 5;
let testArray = [];
for(let i=0; i<testHeight; i++){
    let currentRow = [];
    for(let j=0; j<testWidth; j++){
        currentRow.push(Math.floor(Math.random()*10));
    }
    testArray.push(currentRow);
}
let map = new CubeMap(testArray);
console.log('total volume: ' + map.getVolume() + ' units');


// let map = new CubeMap([
//     [3, 3, 4, 4, 4, 2],
//     [3, 1, 3, 2, 1, 4],
//     [7, 3, 1, 6, 4, 1]
// ]);
//console.log('total volume: ' + map.getVolume() + ' units');
