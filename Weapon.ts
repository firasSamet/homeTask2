import {Item} from './Item';

export abstract class Weapon extends Item {
    static readonly MODIFIER_CHANGE_RATE = 0.05
    private baseDamage: number
    private damageModifier: number
    private baseDurability: number
    private durabilityModifier: number

    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight)
        this.baseDamage = baseDamage
        this.baseDurability = baseDurability
        this.damageModifier = 0
        this.durabilityModifier = 0
    }

    toString = () => `${super.toString()}, Damage: ${this.getDamage().toFixed(2)}, Durability: ${(this.getDurability() * 100).toFixed(2)}%`

    getDamage() {
        return this.baseDamage + this.damageModifier
    }

    getDurability() {
        const effectiveDurability = this.baseDurability + this.durabilityModifier
        if (effectiveDurability < 0) {
            this.durabilityModifier += effectiveDurability
            return 0
        }

        return effectiveDurability
    }

    use() {
        if (this.getDurability() > 0) {
            let result = `You use the ${this.getName()}, dealing ${this.getDamage().toFixed(2)} points of damage.`
            this.durabilityModifier -= Weapon.MODIFIER_CHANGE_RATE
            if (this.getDurability() === 0) {
                result += ` The ${this.getName()} breaks.`
            }
            return result
        }

        return `You can't use the ${this.getName()}, it's broken.`
    }

    abstract polish(): void

    
    getBaseDurability = () => this.baseDurability
    getBaseDamage = () => this.baseDamage
    getDamageModifier = () => this.damageModifier
    getDurabilityModifier = () => this.durabilityModifier

    setBaseDurability = (baseDurability: number) => {this.baseDurability = baseDurability}
    setBaseDamage = (baseDamage: number) => {this.baseDamage = baseDamage}
    setDamageModifier = (damageModifier: number) => {this.damageModifier = damageModifier}
    setDurabilityModifier = (durabilityModifier: number) => {this.durabilityModifier = durabilityModifier}
}
