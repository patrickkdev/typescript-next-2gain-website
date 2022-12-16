export default class ShoppingCart {
  products: any[];

  constructor(){
    if (typeof window !== 'undefined') {
      this.products = JSON.parse(localStorage.getItem("cartItems") || "[]");
    }
    else this.products = [];
  }

  getItemCount (){
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem("cartItems") || "[]").length;
    }
    return 0;
  }
  
  getItems (){
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem("cartItems") || "[]");
    }
    return [];
  }

  removeAll (product:any, setState: Function) {
    if (typeof window !== 'undefined') {
      var products = JSON.parse(localStorage.getItem("cartItems") || "[]"); 
      products.splice(products.indexOf(products.find((element:any) => element.id == product.id)), 1);
      localStorage.clear();
      localStorage.setItem("cartItems", JSON.stringify(products));
      setState(products);
    }
  }

  remove (product:any, setState: Function) {
    if (typeof window !== 'undefined') {
      var products = JSON.parse(localStorage.getItem("cartItems") || "[]"); 
      try{
        products.find((element: any) => (element.id == product.id && element?.quantity > 1)).quantity -= 1;
      } catch {
        products.splice(products.indexOf(products.find((element:any) => element.id == product.id)), 1);
      }
      localStorage.clear();
      localStorage.setItem("cartItems", JSON.stringify(products));
      setState(products);
    }
  }
  
  add (product:any, setState: Function) {
    if (typeof window !== 'undefined') {
      var products = JSON.parse(localStorage.getItem("cartItems") || "[]"); 
      if (products.find((element: any) => element.id == product.id)) {
        products.find((element: any) => element.id == product.id).quantity += 1;
      }
      else{
        products.push(product);
        products.find((element: any) => element.id == product.id).quantity = 1;
      }
      localStorage.clear();
      localStorage.setItem("cartItems", JSON.stringify(products));
      setState(products)
    }
  }

}

export var shoppingCart: ShoppingCart = new ShoppingCart();