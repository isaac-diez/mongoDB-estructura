db.createCollection("order", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "order",
      "required": ["order_status", "order_type", "date", "customer_id", "items"],
      "properties": {
        "order_status": {
          "enum": 
        },
        "order_type": {
          "enum": 
        },
        "date": {
          "bsonType": "objectId"
        },
        "customer_id": {
          "bsonType": "objectId"
        },
        "items": {
          "bsonType": "object",
          "title": "object",
          "required": ["glass_id"],
          "properties": {
            "glass_id": {
              "bsonType": "objectId"
            }
          }  
        }
      }  
    } 
  }
});
