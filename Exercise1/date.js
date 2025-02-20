db.createCollection("date", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "date",
      "required": ["registration_date"],
      "properties": {
        "registration_date": {
          "bsonType": "date"
        },
        "update_date": {
          "bsonType": "date"
        }
      }  
    } 
  }
});
