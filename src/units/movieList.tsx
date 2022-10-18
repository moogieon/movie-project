const MovieList = () => {
  return (
    <div>
      <div w-grid="~ cols-4" w-gap="10" w-container="~">
        {new Array(10).fill(0).map((data, i) => (
          <div
            key={i}
            w-border="~ black dark:white"
            w-w="full"
            w-h="150px"
            w-text="dark:white"
          >
            {data}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
