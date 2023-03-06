export interface Tag {
	id: number;
	text: string;
}

export interface NoteData {
	id: number;
	title: string;
	description?: string;
	startDate: string;
	dueDate?: string;
	priority: "baixa" | "normal" | "alta" | string;
	state: "novo" | "em andamento" | "pronto" | string;
	tags?: Tag[];
}

export interface ProjectData {
	id: number;
	title: string;
	tasks: NoteData[];
	deletable: boolean;
}
