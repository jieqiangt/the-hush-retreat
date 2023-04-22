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
          required: ["createdOn", "updatedOn", "email", "status", "active"],
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
            email: {
              bsonType: "string",
              maxLength: 50,
              description: "email of string datatype is required.",
            },
            status: {
              bsonType: "string",
              enum: ["Registered", "ConfirmationSent"],
              description: "status of string data type is required.",
            },
            active: {
              bsonType: "bool",
              description: "active of boolean data type is required.",
            },
          },
        },
      },
    ],
  },
};
