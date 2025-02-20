db.createCollection("supplier", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "supplier",
      "required": ["NIF", "address", "date"],
      "properties": {
        "NIF": {
          "bsonType": "string"
        },
        "address": {
          "bsonType": "string"
        },
        "date": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
