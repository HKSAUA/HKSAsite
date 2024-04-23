/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5ghfnp5wqww83xn")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_06baknQ` ON `users` (`email`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5ghfnp5wqww83xn")

  collection.indexes = []

  return dao.saveCollection(collection)
})
