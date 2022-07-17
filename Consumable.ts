import { Item } from './Item'

export class Consumable extends Item {
    private consumed: boolean
    private spoiled: boolean

    constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(name, value, weight)
        this.spoiled = spoiled
        this.consumed = false
    }

    use() {
        const res = this.consumed ? `There is nothing left of the ${this.getName()} to consume.` : this.eat()
        return this.spoiled ? res + '\n' + 'You get sick.' : res
    }

    eat() {
        return `You eat the ${this.getName()}.`
    }

    isConsumed = () => this.consumed

    isSpoiled = () => this.spoiled

    setConsumed = (consumed: boolean) => {this.consumed = consumed}

}
