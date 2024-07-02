import { People } from "~/types/People.js";
import data from "~discord-data/data/people.json" assert { type: "json" };

const typedData: People[] = data;
console.log(typedData);
