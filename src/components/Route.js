import useNavi from "../hooks/use-navi";

function Route({ path, children }) {
  // Retrieve the current path from the NaviContext
  const { currentPath } = useNavi();

  // Check if the given path matches the current path
  if (path === currentPath) {
    return children; // Render the children if the paths match
  }

  return null; // Return null if the paths don't match
}

export default Route;
