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
            "retreatName",
            "email",
            "firstName",
            "lastName",
            "phone",
            "vaccinated",
            "numRetreatees",
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
            firstName: {
              bsonType: "string",
              description: "firstName of string datatype is required.",
            },
            lastName: {
              bsonType: "string",
              description: "lastName of string datatype is required.",
            },
            email: {
              bsonType: "string",
              maxLength: 50,
              description: "email of string datatype is required.",
            },
            phone: {
              bsonType: "string",
              maxLength: 15,
              description: "phone of string datatype is required.",
            },
            vaccinated: {
              bsonType: "bool",
              description: "vaccinated of boolean data type is required.",
            },
            numRetreatees: {
              bsonType: "int",
              minimum: 1,
              maximum: 8,
              description:
                "numRetreatees of int type is required and must be between 1 & 8.",
            },
            message: {
              bsonType: "string",
              description: "message of string data type is optional.",
            },
          },
        },
      },
    ],
  },
};
