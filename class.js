class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    ageComparison(otherPerson) {
        if (this.age > otherPerson.age) {
            return `${this.name} è più vecchio di ${otherPerson.name}.`;
        } else if (this.age < otherPerson.age) {
            return `${this.name} è più giovane di ${otherPerson.name}.`;
        } else {
            return `${this.name} e ${otherPerson.name} hanno la stessa età.`;
        }
    }
}

let p1 = new Person("John", 30);
let p2 = new Person("Mary", 25);
let p3 = new Person("Mike", 30);

console.log(p1.ageComparison(p2)); 
console.log(p2.ageComparison(p1)); 
console.log(p1.ageComparison(p3)); 




class Pagination {
    constructor(items = [], pageSize = 10) {
      this.items = items;
      this.pageSize = pageSize;
      this.currentPage = 1;
    }
  
    get pages() {
      return Math.ceil(this.items.length / this.pageSize);
    }
  
    setPage(page) {
      this.currentPage = page;
    }
  
    nextPage() {
      if (this.currentPage < this.pages) {
        this.currentPage++;
      }
    }
  
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  
    get pageItems() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.items.slice(start, start + this.pageSize);
    }
  }
  const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10', 'item11', 'item12'];
  const pagination = new Pagination(items, 4);
  console.log(pagination.pages) 
  console.log(pagination.pageItems) 
  pagination.nextPage()
  console.log(pagination.pageItems) 
    
