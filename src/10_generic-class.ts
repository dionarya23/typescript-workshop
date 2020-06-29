class List<T> {
    private data: T[];

    constructor(...elements: T[]) {
        this.data = elements
    }

    add(element: T): void {
        this.data.push(element)
    }

    addMultipleElement(...elements: T[]):void {
        this.data.push(...elements);
    }

    getAll(): T[] {
        return this.data
    }

}

let numbers = new List<number>(1,2,3,4,5);

numbers.add(1);
console.log(numbers.getAll())