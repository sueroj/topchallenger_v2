import Item from 'core/objects/item'
import { ItemCategory, ItemTier } from 'core/enums/enums'

export default class TestItems {
    public items: Item[] = this.generate_items()

    private generate_items() {
        return [
            new Item().test_item(100, ItemCategory.ZONE_CAPTURE_FLAG, ItemTier.GOLD_T3),
            new Item().test_item(101, ItemCategory.ZONE_CAPTURE_CANCEL, ItemTier.STANDARD_T0),
            new Item().test_item(102, ItemCategory.ZONE_CAPTURE_FLAG, ItemTier.SILVER_T2),
            new Item().test_item(103, ItemCategory.ZONE_PROTECT_FLAG, ItemTier.BRONZE_T1),
            new Item().test_item(104, ItemCategory.RP_BOOSTER, ItemTier.GOLD_T3),
            new Item().test_item(105, ItemCategory.FOREIGN_CAPTURE_FLAG, ItemTier.SILVER_T2),
            new Item().test_item(106, ItemCategory.FOREIGN_CAPTURE_CANCEL, ItemTier.STANDARD_T0),
            new Item().test_item(107, ItemCategory.ZONE_CAPTURE_INCREASER, ItemTier.GOLD_T3),
        ]
    }
}