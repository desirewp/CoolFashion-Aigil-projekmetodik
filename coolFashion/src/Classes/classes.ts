export class Product {
constructor( public category: string, public description: string, public imageUrl: string, public title: string){
    this.category = category;
    this.description = description;
    this.imageUrl = imageUrl;
    this.title = title;
}
}