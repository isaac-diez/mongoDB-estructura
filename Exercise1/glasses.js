db.createCollection("glasses", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "glasses",
      "required": ["brand", "prescription", "frame_type", "frame_color", "glass_color", "price", "date"],
      "properties": {
        "brand": {
          "bsonType": "string"
        },
        "prescription": {
          "bsonType": "array",
          "items": {
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
          }  
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
        }
      }  
    } 
  },
  "validationLevel":"strict",
  "validationAction":"error"
});
