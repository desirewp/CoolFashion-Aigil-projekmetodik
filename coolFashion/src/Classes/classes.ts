export class Product {
  constructor(
    public category: string,
    public description: string,
    public imageUrl: string,
    public title: string
  ) {
    this.category = category;
    this.description = description;
    this.imageUrl = imageUrl;
    this.title = title;
  }
}

export class ProductDB {
  constructor(
    public id: string,
    public category: string,
    public description: string,
    public imageUrl: string,
    public title: string
  ) {
    this.id = id;
    this.category = category;
    this.description = description;
    this.imageUrl = imageUrl;
    this.title = title;
  }
}


export class ShoppingCart {
  constructor(
    public id: string,
    public category: string,
    public description: string,
    public imageUrl: string,
    public title: string,
    public quantity : number,
  ) {
    this.id = id;
    this.category = category;
    this.description = description;
    this.imageUrl = imageUrl;
    this.title = title;
    this.quantity = quantity;
  }
}