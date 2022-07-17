import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
    private items: Item[]

    constructor() {}

    addItem(item: Item) {
        this.items.push(item)
    }

    toString() {
        return this.items.join(', ')
    }

    sort(): void
    sort(comparator: ItemComparator): void
    sort(comparator?: ItemComparator) {
        if (!comparator) {
            this.items.sort((first, second) => first.getValue() - second.getValue())
        } else {
            this.items.sort(comparator.compare)
        }
    }
}