import Firecrawl from "@mendable/firecrawl-js";

const firecrawl = new Firecrawl({ apiKey: process.env.NEXT_FIRECRAWL_KEY });

export async function scrapeProduct(url: any) {
  try {
    const result = await firecrawl.scrape(url, {
      formats: [
        {
          type: "json",
          schema: {
            type: "object",
            required: ["productName", "currentPrice"],
            properties: {
              productName: {
                type: "string",
              },
              currentPrice: {
                type: "string",
              },
              currentCode: {
                type: "string",
              },
              productImageUrl: {
                type: "string",
              },
            },
          },
          prompt:
            "Extract the product name as 'productName', current price as a number as 'currentPrice', currency code (USD,EUR,etc) as 'currencyCode', and product url as 'productImageUrl' if available ",
        },
      ],
    });

    const extractedData: any = result.json;
    if (!extractedData || !extractedData.productName) {
      throw new Error("No data extracted from URL");
    }

    return extractedData;
  } catch (error) {
    console.error("FireCrawl error", error);
    throw new Error("No data extracted from URL");
  }
}
