const menuItemController = (name, description, price, image) => {
    let item = new MenuItem(name,description,price,image)
    return item;
}