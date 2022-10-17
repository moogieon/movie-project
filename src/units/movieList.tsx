const MovieList = () => {
  return (
    <div w-p="x-5">
      <div w-grid="~ cols-4" w-gap="10" w-container="~">
        {new Array(10).fill(0).map((data) => (
          <div w-border="~" w-w="full" w-h="150px">
            {data}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
