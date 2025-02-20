db.createCollection("order", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "order",
      "required": ["order_status", "order_type", "date"],
      "properties": {
        "order_status": {
          "enum": 
        },
        "order_type": {
          "enum": 
        },
        "date": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
