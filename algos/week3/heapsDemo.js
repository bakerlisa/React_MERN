class MinHeap{
    constructor(){
        this.heap=[null];
    }

    add(val){
        this.heap.push(val)
        this.shiftup();
    }
    
    shiftup(){
        let currentIndex = this.heap.length - 1
        let parentIndex = Math.floor(currentIndex/2);

        while(this.heap[parentIndex] > this.heap[currentIndex] && currentIndex != 1){
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[currentIndex]
            this.heap[currentIndex] = temp;
            
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex/2);
        }
    }

    min(){
        return this.heap.length < 2 ? null : this.heap[1];
    }

    remove(){
        //empty
        if(this.heap.length < 2) return null;
        
        //one value
        const min = this.heap[1];

        if(this.heap.length === 2){
            this.heap.pop();
            return min;
        }
        // multiple values left


        // always returning min
        this.heap[1] = this.heap.pop();
        this.shiftDown();
        return min;
    }

    shiftDown(){
        let indToShiftDown  = 1;
        let leftIndx = indToShiftDown * 2;

        while(leftIndx < this.heap.length){
            let rightIndx = leftIndx + 1;
            let indxOfSmallest =  leftIndx;

            if(rightInx < this.heap.length && this.heap[rightIndx] < this.heap[leftIndx]){
                let indxOfSmallest =  rightIndx;
            }

            if(this.heap[indToShiftDown] <= this.heap[indxOfSmallest]){
                console.log("value has found its home")
                break;
            }else{
                var temp = this.heap[indToShiftDown]
                this.heap[indToShiftDown] = this.heap.indxOfSmallest;
                this.heap.indxOfSmallest = temp;
                indToShiftDown = indxOfSmallest;
                leftIndx = indToShiftDown *2;
            }

        }
    }
}

const myHeap = new MinHeap();

myHeap.add(4)
myHeap.add(18)
myHeap.add(1)
myHeap.add(2000)
myHeap.add(3)
myHeap.add(2)
myHeap.add(17)
myHeap.add(16)
myHeap.add(18)
myHeap.add(0.1)
myHeap.add(2)
myHeap.add(4.9)
myHeap.add(0)

console.log(myHeap.min())