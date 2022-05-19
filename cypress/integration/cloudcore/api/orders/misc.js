const HARDCODED_ORDER_REFERENCE = "qa60850";
export const INVALID_ORDER_COUNT = 1001;

export const orderRequestBody = {
  apikey: Cypress.env("apikey"),
  reference: " ",
  email: "c8@cloudprinter.com",
  addresses: [
    {
      type: "delivery",
      company: "порпоп",
      firstname: "орорлор",
      lastname: "рпорпроп",
      street1: "плплпл",
      zip: "656757",
      city: "рапора",
      country: "DE",
      email: "emailexample.com",
      phone: "656575757",
    },
  ],
  items: [
    {
      reference: "464646",
      product: "businesscard_ds_int_bc_fc",
      shipping_level: "cp_saver",

      count: "100",
      files: [
        {
          type: "product",
          url: "https://s3-eu-west-1.amazonaws.com/quickorder.cloudprinter.com/c8@cloudprinter.com/1630919365074-product-0.pdf",
          md5sum: "_____________NO_MD5_____________",
        },
      ],
      options: [
        {
          type: "paper_300off",
          count: "1",
        },

        {
          type: "product_finish_none",
          count: "1",
        },
      ],
    },
  ],
};

export const orderQuoteRequest = {
  apikey: Cypress.env("apikey"),
  country: "DE",
  items: [
    {
      reference: "1",
      product: "businesscard_ds_int_bc_fc",
      count: "100",
      options: [
        {
          type: "paper_250ecb",
          count: "100",
        },
      ],
    },
  ],
};

orderRequestBody.reference = "qa-" + Math.floor(Math.random() * 99999);
export const orderReference = orderRequestBody.reference;

export const orderRequestReference = {
  apikey: Cypress.env("apikey"),
  reference: orderReference,
};

export const hardcodedOrderReferenceRequest = {
  apikey: Cypress.env("apikey"),
  reference: HARDCODED_ORDER_REFERENCE,
};
