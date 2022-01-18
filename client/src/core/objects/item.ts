import { ItemCategory, ItemTier } from "core/enums/enums"

export default class Item {
    public id: number = 0
    public name: string = ''
    public category: ItemCategory | null = null
    public tier: ItemTier | null = null

    // public constructor(category: ItemCategory, tier: ItemTier) {
    //     this.category = category
    //     this.tier = tier
    // }

    public test_item(id: number, category: ItemCategory, tier: ItemTier) {
        this.id = id
        this.category = category
        this.tier = tier
        return this
    }
}