async function getReviews() {
//   const apiKey = process.env.GOOGLE_PLACES_API_KEY;

//   const place = new Place({ id: "ChIJpyiwa4Zw44kRBQSGWKv4wgA", apiKey });

//   await place.fetchFields({
//     fields: ["displayName", "formattedAddress", "location", "reviews"],
//   });

//   return place.reviews;
}

export async function GET() {
  const reviews = await getReviews();
  return Response.json(reviews);
}
