db.createCollection("order_item", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "order_item",
      "required": ["quantity", "unit_price", "glasses", "order"],
      "properties": {
        "quantity": {
          "bsonType": "int"
        },
        "unit_price": {
          "bsonType": "decimal"
        },
        "glasses": {
          "bsonType": "objectId"
        },
        "order": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
