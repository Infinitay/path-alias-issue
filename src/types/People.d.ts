export interface People {
	name: string;
	age: number;
	gender?: string | Gender;
}

export enum Gender {
	Male = 0,
	Female = 1
}
