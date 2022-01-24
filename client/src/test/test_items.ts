import Item from 'core/objects/item'
import { ItemType, ItemTier } from 'core/enums/enums'

export default class TestItems {
    public items: Item[] = this.generate_items()

    private generate_items() {
        return [
            new Item().test_item(100, ItemType.ZONE_CAPTURE_FLAG, ItemTier.GOLD_T3, 2),
            new Item().test_item(101, ItemType.ZONE_CAPTURE_CANCEL, ItemTier.STANDARD_T0, 2),
            new Item().test_item(102, ItemType.ZONE_CAPTURE_FLAG, ItemTier.SILVER_T2, 3),
            new Item().test_item(103, ItemType.ZONE_PROTECT_FLAG, ItemTier.BRONZE_T1, 2),
            new Item().test_item(104, ItemType.RP_BOOSTER, ItemTier.GOLD_T3, 5),
            new Item().test_item(105, ItemType.FOREIGN_CAPTURE_FLAG, ItemTier.SILVER_T2, 1),
            new Item().test_item(106, ItemType.FOREIGN_CAPTURE_CANCEL, ItemTier.STANDARD_T0, 2),
            new Item().test_item(107, ItemType.ZONE_CAPTURE_INCREASER, ItemTier.GOLD_T3, 10),
        ]
    }
}