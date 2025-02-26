db.createCollection("customer", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "customer",
      "required": ["name", "address", "phone", "email", "dateOfRegistration", "prescription", "order_id"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "address": {
          "bsonType": "string"
        },
        "referral": {
          "bsonType": "string"
        },
        "phone": {
          "bsonType": "string"
        },
        "email": {
          "bsonType": "string"
        },
        "dateOfRegistration": {
          "bsonType": "date"
        },
        "prescription": {
          "bsonType": "object",
          "title": "object",
          "required": ["left_eye", "right_eye"],
          "properties": {
            "left_eye": {
              "bsonType": "decimal"
            },
            "right_eye": {
              "bsonType": "decimal"
            }
          }  
        },
        "order_id": {
          "bsonType": "array",
          "items": {
            "bsonType": "objectId"
          }
        }
      }  
    } 
  }
});
