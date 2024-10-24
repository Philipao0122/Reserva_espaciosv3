export interface Space {
  id: number;
  name: string;
  type: string;
  capacity: number;
  building: string;
  image: string;
  description: string;
  features: string[];
}

export interface Filter {
  capacity: string;
  type: string;
  building: string;
  date: string;
}