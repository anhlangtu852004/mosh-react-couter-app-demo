import React from "react";
import { useParams } from "react-router-dom";

const VideoDetail = () => {
  const param = useParams();
  const { id } = param;
  return <div>VideoDetail id - {id}</div>;
};

export default VideoDetail;
