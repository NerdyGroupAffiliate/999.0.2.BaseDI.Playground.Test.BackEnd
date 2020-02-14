const BackgroundImageHandler = backgroundImage =>
  backgroundImage && backgroundImage.url
    ? {
        style: {
          backgroundImage: `url(${backgroundImage.url})`,
          backgroundPosition: "center center",
          backgroundSize: "cover"
        }
      }
    : {};

export default BackgroundImageHandler;
