db.createCollection("address", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "address",
      "required": ["street", "street_no", "city", "zipcode", "country", "date"],
      "properties": {
        "street": {
          "bsonType": "string"
        },
        "street_no": {
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
        },
        "date": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
