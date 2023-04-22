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
            "email",
            "firstName",
            "lastName",
            "subject",
            "message",
            "status",
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
            firstName: {
              bsonType: "string",
              maxLength: 50,
              description: "firstName of string datatype is required.",
            },
            lastName: {
              bsonType: "string",
              maxLength: 50,
              description: "lastName of string datatype is required.",
            },
            email: {
              bsonType: "string",
              maxLength: 50,
              description: "email of string datatype is required.",
            },
            message: {
              bsonType: "string",
              maxLength: 500,
              description: "message of string data type is required.",
            },
            status: {
              bsonType: "string",
              enum: ["Registered", "ConfirmationSent"],
              description: "status of string data type is required.",
            },
          },
        },
      },
    ],
  },
};
