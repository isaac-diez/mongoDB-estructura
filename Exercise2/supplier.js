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
          "bsonType": "object",
          "title": "object",
          "required": ["street", "streetNo", "city", "zipcode", "country"],
          "properties": {
            "street": {
              "bsonType": "string"
            },
            "streetNo": {
              "bsonType": "string"
            },
            "floor": {
              "bsonType": "int"
            },
            "apartment": {
              "bsonType": "string"
            },
            "city": {
              "bsonType": "string"
            },
            "zipcode": {
              "bsonType": "string"
            },
            "country": {
              "bsonType": "string"
            }
          }  
        },
        "date": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
