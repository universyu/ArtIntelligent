export const maxDuration = 60
export async function POST(request: Request): Promise<Response> {
  try {
    const promptInput = await request.text();
    const payload = {
      prompt: promptInput,
      steps: 25,
      override_settings: {
        sd_model_checkpoint: "AnythingXL_xl",
      },
      width: 512,
      height: 512,
    };
    const response = await fetch("https://sd.oldkingok.cc/sdapi/v1/txt2img", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: "GOD DAMN 2080",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from target endpoint");
    }

    const responseData = await response.json();
    const base64Image: string = responseData.images[0];

    return new Response(base64Image, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  } catch (error) {
    return new Response("Invalid request or failed to fetch data", {
      status: 400,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
