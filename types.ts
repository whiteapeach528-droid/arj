export enum SectionType {
  INTRO = 'INTRO',
  GEOGRAPHY = 'GEOGRAPHY',
  WORLD = 'WORLD',
  MANSION = 'MANSION',
  CHARACTER = 'CHARACTER',
  FAMILY = 'FAMILY'
}

export interface CharacterStats {
  label: string;
  value: string;
}

export interface NavItem {
  id: SectionType;
  label: string;
}