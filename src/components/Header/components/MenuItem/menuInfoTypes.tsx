export interface menuInfoTypes {
  name: string;
  menuChildren: menuItemChildren[];
  url: string
}

interface menuItemChildren {
  label: string;
  url: string
}