export enum Tortilla {
  Flour ='flour',
  Spinach = 'spinach',
  Corn = 'corn',
  None = 'none'
}

export enum Beans {
  Black = 'black',
  Pinto = 'pinto'
}

export enum Rice {
  White = 'white',
  Spanish = 'Spanish',
  Brown = 'brown'
}

export enum Cheese {
  Cheddar = 'cheddar',
  Jack = 'jack',
  MildCheddar = 'mild-cheddar',
  Provolone = 'provolone',
  Gouda = 'gouda',
}

export interface Burrito {
  rice?: string;
  cheese?: string;
  beans?: string;
  tortilla: Tortilla;
  hasSourCream: false;
  hasGuac: boolean;
}

export enum LactoseIntolerantCheese {
  Muenster = 'muenster',
  Camembert = 'camembert',
  Brie = 'brie',
  MildCheddar = 'mild-cheddar',
  SharpCheddar = 'sharp-cheddar',
  Provolone = 'provolone',
  Gouda = 'gouda',
  Blue = 'blue',
  Parmesan = 'parmesan',
  Swiss = 'swiss',
}

export type JeffBurrito = Burrito & {
  tortilla: Tortilla.Corn | Tortilla.None;
  cheese: LactoseIntolerantCheese;
}
