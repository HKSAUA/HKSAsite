/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xuicxvvcs03jqwr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i88buffl",
    "name": "HKSAAttendees",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xuicxvvcs03jqwr")

  // remove
  collection.schema.removeField("i88buffl")

  return dao.saveCollection(collection)
})
