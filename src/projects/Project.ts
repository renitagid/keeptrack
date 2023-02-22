// This is a TypeScript class that represents a project.
export class Project {
  // This is a TypeScript property that is a number or undefined.
  id: number | undefined;
  name: string = "";
  description: string = "";
  imageUrl: string = "";
  contractTypeId: number | undefined;
  contractSignedOn: Date = new Date();
  budget: number = 0;
  isActive: boolean = false;
//get is a TypeScript accessor that returns a boolean value. It returns true if the id property is undefined. Otherwise, it returns false. This is a TypeScript shorthand for writing a function that returns a boolean value. It is equivalent to: 
  get isNew(): boolean {
    return this.id === undefined;
  }

  // This is a TypeScript constructor that takes an initializer object.
  constructor(initializer?: any) {
    if (!initializer) return;

    // This is a TypeScript conditional operator that checks if the initializer object has an id property. If it does, it assigns the value to the id property of the class. If it doesn't, it assigns undefined to the id property of the class.
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.description) this.description = initializer.description;
    if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
    if (initializer.contractTypeId)
      this.contractTypeId = initializer.contractTypeId;
    if (initializer.contractSignedOn)
      this.contractSignedOn = new Date(initializer.contractSignedOn);
    if (initializer.budget) this.budget = initializer.budget;
    if (initializer.isActive) this.isActive = initializer.isActive;
  }
}
