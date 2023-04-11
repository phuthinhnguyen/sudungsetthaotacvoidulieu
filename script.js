class Animal{
    constructor(list_animal=[]){
        this.list_animal=list_animal;
    }
    add(name){
        this.list_animal.push(name);
    }
    remove(name){
        this.list_animal.splice(this.list_animal.indexOf(name),1);
    }
    print(){
        console.log(this.list_animal);
    }
} 
let animal = new Animal();
animal.add("cat")
animal.remove("cat")
animal.print()