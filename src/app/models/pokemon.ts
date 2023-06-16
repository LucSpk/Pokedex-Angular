
export interface Pokemon {
    name: string;
    status: Status;
    url: string;
}

export interface Status {
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    game_indices: GameIndex[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    order: number;
    past_abilities: any[];
    past_types: any[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}

interface Ability {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

interface Form {
    name: string;
    url: string;
}
  
interface GameIndex {
    game_index: number;
    version: {
        name: string;
        url: string;
    };
}

interface Move {
    move: {
        name: string;
        url: string;
    };
    version_group_details: VersionGroupDetail[];
}
  
interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: {
        name: string;
        url: string;
    };

    version_group: {
        name: string;
        url: string;
    };
}

interface Species {
    name: string;
    url: string;
}

interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}