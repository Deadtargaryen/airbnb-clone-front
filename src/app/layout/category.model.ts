import { IconName } from "@fortawesome/free-solid-svg-icons"

export type CategoryName = "ALL" | "AMAZING_VIEWS" | "OMG" | "TREEHOUSE" | "BEACH" | "FARMS" | "TINY_HOMES"
| "LAKES" | "CONTAINERS" | "CAMPING" | "CASTLE" | "SKIING" | "CAMPERS" | "ARTIC" | "BOAT" | "BED_AND_BREAKFASTS"
| "ROOMS" | "EARTH_HOMES" | "TOWER" | "CAVES" | "LUXES" | "CHEFS_KITCHEN"

export interface Category {
    icon: IconName,
    displayName: string,
    technicalName: CategoryName,
    activated: boolean
}