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
              bsonType: "timestamp",
              description:
                "createdOn of timestamp type is required. Defaults to booking date.",
            },
            updatedOn: {
              bsonType: "timestamp",
              description:
                "updatedOn of timestamp type is required. Must be greater than or equals to createdOn.",
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
              bsonType: "bool",
              description: "lastName of string datatype is required.",
            },
            phone: {
              bsonType: "string",
              maxLength: 50,
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
