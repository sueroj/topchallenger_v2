import { ItemType, ItemTier, AssetType } from "core/enums/enums"

export default class Item {
    public id: number = 0
    public name: string = ''
    public quantity: number = 0
    public item_type: ItemType | null = null
    public tier: ItemTier | null = null
    public img: string = ''

    // public constructor(category: ItemCategory, tier: ItemTier) {
    //     this.category = category
    //     this.tier = tier
    // }

    public test_item(id: number, item_type: ItemType, tier: ItemTier , quantity: number) {
        this.id = id
        this.item_type = item_type
        this.name = item_type
        this.tier = tier
        this.quantity = quantity
        this.img = this.import_asset(AssetType.ITEM, this.item_type)
        return this
    }

    public import_asset(asset_type: AssetType, item_type: ItemType) {
        let asset: any
        try {
            // asset = require('assets/icons/items/zcf.png')
            asset = require(`assets/${asset_type}/${item_type}.png`)
        } catch {
            asset = require('assets/items/default.png')
        }
        return asset.default
    }
}