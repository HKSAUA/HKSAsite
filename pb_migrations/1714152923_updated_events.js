/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xuicxvvcs03jqwr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "16rtpxsw",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xuicxvvcs03jqwr")

  // remove
  collection.schema.removeField("16rtpxsw")

  return dao.saveCollection(collection)
})
