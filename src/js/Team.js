export default class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(Character) {
      if (this.members.has(Character)) {
        throw new Error(`Ошибка. Объект ${Character} уже добавлен!`);
      }
  
      this.members.add(Character);
    }
  
    addAll(...args) {
      args.forEach((Character) => {
        if (this.members.has(Character)) {
          throw new Error(`Ошибка. Объект ${Character} уже добавлен!`);
        }
  
        this.members.add(Character);
      });
    }
  
    toArray() {
      return Array.from(this.members);
    }
  }