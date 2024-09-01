export async function POST(request: Request): Promise<Response> {
  try {
    const url = "https://api.coze.cn/v1/workflow/run";
    const apiToken =
      "pat_3bkcC8y0wUnUDgrJ6pjeRVAr8GQHLIRp2cDCSO4Mw3ALGFhlIaotC7fOoYSVYLNz";

    const content = await request.text();

    const requestData = {
      workflow_id: "7407627249333862450",
      parameters: {
        BOT_USER_INPUT: content,
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

    const response = await fetch(url, options);

    if (response.ok) {
      const responseData = await response.json();

      return new Response(JSON.stringify(responseData), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      const errorData = await response.json();

      return new Response(JSON.stringify(errorData), {
        status: response.status,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    return new Response("Invalid request or failed to fetch data", {
      status: 400,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
