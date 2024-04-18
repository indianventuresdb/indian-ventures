export const api = async (path, data) => {
  try {
    // Make a POST request to the specified API endpoint

    const response = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data }),
    });
    // If the response is not successful, throw an error

    if (!response.ok) {
      throw new Error("Request failed");
    }
    // Return true to indicate a successful request

    return true;
  } catch (error) {
    console.error(error);
    // Return false to indicate a failed request

    return false;
  }
};
