/// Servicio de un carrito de venta
export default {
  constructor() {
    this.items = []
  },

  /**
   * Metodo para agregar un nuevo elemento al carrito de compra
   * @param {ShoppingCartItem} item
   */
  addItem(item) {
    this.items.push(item)
  },

  /**
   * Metodo para eliminar un elemento del carrito de compra
   * @param {ShoppingCartItem} item
   */
  removeItem(item) {
    const index = this.items.indexOf(item)
    if (index != -1) {
      this.items.splice(index, 1)
    }
  },

  /**
   * Metodo para limpiar el carrito de compras
   */
  clearCart() {
    this.items = []
  },

  /**
   * Metodo para obtener los elementos del carrito de compras
   * @returns {Array}
   */
  getItems() {
    return this.items
  },

  /**
   * Metodo para obtener el total de carrito de compras
   * @returns {Number}
   */
  getTotal() {
    return this.items.reduce((total, item) => total + item.getSubtotal(), 0)
  }
}
