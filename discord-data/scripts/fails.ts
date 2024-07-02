import { Gender, People } from "~/types/People";
import data from "~discord-data/data/people.json" assert { type: "json" };

const typedData: People[] = data;
console.log(`Found ${typedData.length} people`);
const males = typedData.filter((person) => person.gender && person.gender == Gender.Female);
console.log(`Found ${males.length} males`);
