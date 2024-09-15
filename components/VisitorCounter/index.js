import Script from "next/script";

const VisitorCounter = () => {
  return (
    <Script
      type="text/javascript"
      id="clustrmaps"
      src="//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=300&t=tt&d=7-6Z2QflWSzrnzTBXkq7kHRrZcp0JJ9PBU9OLOGzqi8"
    />
  );
};

export default VisitorCounter;
