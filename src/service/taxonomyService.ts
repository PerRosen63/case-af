import axios from "axios";
import { IOccupation } from "../models/IOccupation";

// Cache to store fetched data
let occupationsCache: IOccupation[] = [];

export const getOccupation = async (): Promise<IOccupation[]> => {
  if (occupationsCache.length > 0) {
    return occupationsCache;
  }

  try {
    const response = await axios.get(
      "https://taxonomy.api.jobtechdev.se/v1/taxonomy/graphql?query=query%20OccupationFieldsAndOccupationGroups%20%7B%20%20%20concepts%28type%3A%20%22occupation-field%22%29%20%7B%20%20%20%20%20preferred_label%20%20%20%20%20id%20%20%20%20%20narrower%28type%3A%20%22ssyk-level-4%22%29%20%7B%20%20%20%20%20%20%20id%20%20%20%20%20%20%20preferred_label%20%20%20%20%20%7D%20%20%20%7D%20%7D"
    );

    occupationsCache = response.data.data.concepts;
    return occupationsCache;
  } catch (error) {
    console.error("Error fetching occupations:", error);
    return [];
  }
};
