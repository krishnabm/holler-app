export interface CardProps {
  // Display Name
  name: string;
  // Url of Github Profile Image
  avatar_url: string;
  // User Company field
  company: string;
  // Key field
  id: string;
}

export interface CardListProps {
  // Profiles Array
  profiles: CardProps[];
}

export interface AddUserProps {
  // Fn Handler for OnNewCard
  onNewCard: Function;
}
