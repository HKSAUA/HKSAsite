/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("glphwkqknok65t2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lm6uq89d",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("glphwkqknok65t2")

  // remove
  collection.schema.removeField("lm6uq89d")

  return dao.saveCollection(collection)
})
