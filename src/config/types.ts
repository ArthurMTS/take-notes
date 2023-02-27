export interface NoteData {
	id: number;
	title: string;
	description?: string;
	startDate: Date;
	dueDate?: Date;
	priority: "baixa" | "normal" | "alta" | string;
	state: "novo" | "em andamento" | "pronto" | string;
	tags?: {
		id: number;
		value: string;
	}[];
}

export interface ProjectData {
	name: string;
	notes: NoteData[];
}