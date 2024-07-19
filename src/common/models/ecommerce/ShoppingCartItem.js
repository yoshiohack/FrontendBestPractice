import BaseModel from '../BaseModel'

/// Modelo que representa un producto
export default class ShoppingCartItem extends BaseModel {
  constructor() {
    super()
  }

  getSubtotal() {
    return this.product?.price * this.quantity || 0
  }

  getDescription() {
    return this.product?.name
  }

  setProduct(product) {
    this.product = product
  }

  setQuantity(quantity) {
    this.quantity = quantity
  }
}
