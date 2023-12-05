export const Videos = () => {
    return (
      <div className="p-4 bg-white text-black rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Window Cleaning Ninja in Action</h2>
        <div className="video-container" style={{ position: 'relative', paddingBottom: '40%', height: 0, overflow: 'hidden', maxWidth: '100%', maxHeight: '300px' }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            src="https://www.youtube.com/embed/9_4sLiebJJQ"
            title="Window Cleaning Ninja in Action"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Add more iframes here for other videos */}
      </div>
    );
  };
