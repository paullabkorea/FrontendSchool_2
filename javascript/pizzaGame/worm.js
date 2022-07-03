class Worm {
    constructor() {
        this.wormBody = [new Tile(13, 10), new Tile(13, 11), new Tile(13, 12)];
        this.dir = 'ArrowUp';
        this.dirNext = 'ArrowUp';
    }

    renderWorm() {
        this.wormBody.forEach((item) => {
            item.renderTile();
        })
    }

    collisionCheck(wormHead) {
        const leftEdge = (wormHead.col === 0);
        const topEdge = (wormHead.row === 0);
        const rightEdge = (wormHead.col === tileWidth - 1);
        const downEdge = (wormHead.row === tileHeight - 1);
        const collisionEdge = leftEdge || topEdge || rightEdge || downEdge;

        let collisionBody;
        this.wormBody.forEach((item) => {
            if (wormHead.collisionCheck(item)) {
                collisionBody = true;
            }
        })

        return collisionEdge || collisionBody;
    }


    // 저렁이 이동 함수
    moveWorm() {
        const head = this.wormBody[0];

        // 이동에 따른 벌래의 새로운 머리
        let newHead;

        this.dir = this.dirNext;

        if (this.dir === "ArrowRight") {
            newHead = new Tile(head.col + 1, head.row);
        } else if (this.dir === "ArrowDown") {
            newHead = new Tile(head.col, head.row + 1);
        } else if (this.dir === "ArrowLeft") {
            newHead = new Tile(head.col - 1, head.row);
        } else if (this.dir === "ArrowUp") {
            newHead = new Tile(head.col, head.row - 1);
        }

        // 머리가 충돌하며 게임 오버
        if (this.collisionCheck(newHead)) {
            renderGameOver();
        }

        this.wormBody.unshift(newHead);

        // 피자를 먹는 로직
        if (newHead.collisionCheck(pizza.pos)) {
            ctxBg.clearRect(0, 0, cWidth, cHeight);
            score++;
            pizza.movePizza();
        } else {
            this.wormBody.pop();
        }
    }

    checkDirection(dirKey) {
        if (this.dir === "ArrowRight" && dirKey === "ArrowLeft") {
            return;
        } else if (this.dir === "ArrowDown" && dirKey === "ArrowUp") {
            return;
        } else if (this.dir === "ArrowLeft" && dirKey === "ArrowRight") {
            return;
        } else if (this.dir === "ArrowUp" && dirKey === "ArrowDown") {
            return;
        }

        this.dirNext = dirKey;
    }
}