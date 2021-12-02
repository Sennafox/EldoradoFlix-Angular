export interface Filme {
    id: number;
    postDate: Date;
    url: string;
    allowComments: boolean;
    likes: number;
    userId: number;
}

export type Filmes = Array<Filme>;