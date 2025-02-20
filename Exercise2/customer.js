db.createCollection("customer", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "customer",
      "required": ["name", "address", "date"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "referral": {
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
