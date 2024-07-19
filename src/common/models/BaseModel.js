import { CREATE, UPDATE, DELETE } from '@constants/modelStateCode'
/// Modelo que representa un modelo base

export default class BaseModel {
  constructor() {
    this.modelState = CREATE
  }

  setCreateState() {
    this.modelState = CREATE
  }

  setUpdateState() {
    this.modelState = UPDATE
  }

  setDeleteState() {
    this.modelState = DELETE
  }
}
