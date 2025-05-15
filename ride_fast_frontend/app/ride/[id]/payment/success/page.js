import Layout from "@/components/Layout/Layout";
import Success from "@/components/Payment/Success";
import React from "react";

const page = ({ params }) => { // Removed type annotation
  return <Layout children={<Success rideId={params.id} />} />;
};

export default page;