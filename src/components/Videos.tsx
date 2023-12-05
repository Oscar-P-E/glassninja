export const Videos = () => {
  return (
    <div className="p-4 bg-white text-black rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        Window Cleaning Ninja in Action
      </h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9_4sLiebJJQ"
        title="Window Cleaning Ninja in Action"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* Add more iframes here for other videos */}
    </div>
  );
};
