module.exports = {
  validator: {
    $and: [
      {
        $expr: {
          $gte: ["$updatedOn", "$createdOn"],
        },
      },
      {
        $jsonSchema: {
          bsonType: "object",
          required: [
            "createdOn",
            "updatedOn",
            "retreatName",
            "startDt",
            "price",
            "location",
          ],
          additionalProperties: false,
          properties: {
            _id: { bsonType: "objectId" },
            createdOn: {
              bsonType: "date",
              description:
                "createdOn of iso date type is required. Defaults to booking date.",
            },
            updatedOn: {
              bsonType: "date",
              description:
                "updatedOn of iso date type is required. Must be greater than or equals to createdOn.",
            },
            retreatName: {
              bsonType: "string",
              description: "retreatName of string datatype is required.",
            },
            startDt: {
              bsonType: "string",
              description:
                "startDt of string datatype is required. This is in the human readable format to be shown in website.",
            },
            endDt: {
              bsonType: "string",
              description:
                "startDt of string datatype is optional. This is in the human readable format to be shown in website.",
            },
            price: {
              bsonType: "string",
              description: "price of string datatype without $ is required.",
            },
            location: {
              bsonType: "string",
              description: "location of string datatype is required.",
            },
            active: {
              bsonType: "bool",
              description: "active of boolean datatype is required.",
            }
          },
        },
      },
    ],
  },
};
