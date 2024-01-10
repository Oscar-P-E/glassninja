export const Videos = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">
        Window Cleaning Ninja in Action
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="video-container mx-auto">
          <iframe
            src="https://www.youtube.com/embed/9_4sLiebJJQ"
            title="What's In Your Window Tracks?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          di
        </div>
        <div className="video-container mx-auto ">
          <iframe
            src="https://www.youtube.com/embed/s9YbO3MPHnY"
            title="Purified Water Window Cleaning Is Better Than Squeegee"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
