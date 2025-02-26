db.createCollection("glasses", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "glasses",
      "required": ["brand", "frame_type", "frame_color", "glass_color", "price", "date", "supplier_id", "order_id"],
      "properties": {
        "brand": {
          "bsonType": "string"
        },
        "frame_type": {
          "enum": ['metallic','horn','floating']
        },
        "frame_color": {
          "bsonType": "string"
        },
        "glass_color": {
          "bsonType": "object",
          "title": "object",
          "required": ["left_glass", "right_glass"],
          "properties": {
            "left_glass": {
              "bsonType": "string"
            },
            "right_glass": {
              "bsonType": "string"
            }
          }  
        },
        "price": {
          "bsonType": "decimal"
        },
        "date": {
          "bsonType": "objectId"
        },
        "supplier_id": {
          "bsonType": "objectId"
        },
        "order_id": {
          "bsonType": "array",
          "items": {
            "bsonType": "objectId"
          }
        }
      }  
    } 
  },
  "validationLevel":"strict",
  "validationAction":"error"
});
