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
            "retreatId",
            "mainRetreatee",
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
            retreatId: {
              bsonType: "objectId",
              description: "references objectId of restaurants in the list.",
            },
            mainRetreatee: {
              bsonType: "object",
              properties: {
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
                retreateeId: {
                  bsonType: "string",
                  description:
                    "retreateeId of string datatype is required. Must be main for main retreatee",
                },
              },
            },
            additionalRetreatees: {
              bsonType: "array",
              uniqueItems: true,
              additionalProperties: false,
              items: {
                bsonType: "object",
                properties: {
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
                  retreateeId: {
                    bsonType: "string",
                    description:
                      "retreateeId of string datatype is required. Must be main for main retreatee",
                  },
                },
              },
            },
            message: {
              bsonType: "string",
              maxLength: 500,
              description: "message of string data type is optional.",
            },
            status: {
              bsonType: "string",
              enum: [
                "bookingRegistered",
                "bookingConfirmationSent",
                "depositReceived",
                "depositConfirmationSent",
                "fullPaymentReminderSent",
                "fullPaymentReceived",
                "paymentConfirmationSent",
                "preRetreatPrepEmailSent",
              ],
              description: "status of string data type is required.",
            },
          },
        },
      },
    ],
  },
};
