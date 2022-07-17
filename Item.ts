import { Comparable } from './Comparable';

let id = 0;
let counter = 0

export abstract class Item implements Comparable<Item> {
    static readonly numberOfItems = counter
    private id: number
    private value: number
    private name: String
    private weight: number

    constructor(name: string, value: number, weight: number) {
        this.id = id
        this.name = name
        this.value = value
        this.weight = weight
        id++
        counter++
    }

    compareTo(other: Item) {
        const isBigger = this.value > other.value || (this.value === other.value && this.compareName(other))
        return isBigger ? 1 : -1
    }
    
    toString= () => `${this.name} - Value: ${this.value}, Weight: ${this.weight.toFixed(2)}`
    
    static reset = ()  => {
        counter = 0
    }

    private compareName = (other: Item) => this.name.toLowerCase() >= other.name.toLowerCase()
    

    abstract use(): void

    getId = () => this.id
    getValue = () => this.value
    getName = () => this.name
    getWeight = () => this.weight
    setValue = (value: number) => {this.value = value}
    setName = (name: string) => {this.name = name}
    setWeight = (weight: number) => {this.weight = weight}

}
