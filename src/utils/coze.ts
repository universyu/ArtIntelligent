export async function sendRequestToCoze(userInput: string, workflowId: string) {
  const url = "https://api.coze.cn/v1/workflow/run";
  const apiToken =
    "pat_3bkcC8y0wUnUDgrJ6pjeRVAr8GQHLIRp2cDCSO4Mw3ALGFhlIaotC7fOoYSVYLNz";

  const requestData = {
    workflow_id: workflowId,
    parameters: {
      BOT_USER_INPUT: userInput,
    },
  };

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiToken}`,
      "Content-Type": "application/json",
      Host: "api.coze.cn",
      Connection: "keep-alive",
      Accept: "*/*",
    },
    body: JSON.stringify(requestData),
  };

  try {
    const response = await fetch(url, options);

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      const errorData = await response.json();
      throw new Error(JSON.stringify(errorData));
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
