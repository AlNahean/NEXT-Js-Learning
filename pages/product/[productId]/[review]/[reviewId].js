import { useRouter } from "next/router";
import React from "react";

const ReviewId = () => {
  const Router = useRouter().query;
  console.log(Router);
  return (
    <div>
      Review No:{Router.reviewId} for {Router.review}
    </div>
  );
};

export default ReviewId;
