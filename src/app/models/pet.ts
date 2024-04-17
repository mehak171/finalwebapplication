export class Pet {
  id!: string;
  name!: string;
  petKind!: string;
  breed!: string;
  owner!: {
    firstName: string;
    lastName: string;
  };
  picture!: string;
}
