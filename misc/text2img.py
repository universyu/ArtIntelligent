"""
参考: https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/API
API 参数详见: http://10.249.8.149:7860/docs
"""
import requests
import base64
import time
import threading

URL = "http://10.249.8.149:7860"
OUTPUT = "output.png"

def txt2img():
    """
    文本生成图片
    """

    payload = {
        "prompt": "girl with white hair and red eyes, stars in eyes, anime style",
        "steps": 20,
        "override_settings": {
            "sd_model_checkpoint": "AnythingXL_xl"
        },
        "width": 512,
        "height": 512,
    }

    # Send said payload to said URL through the API.
    response = requests.post(url=f'{URL}/sdapi/v1/txt2img', json=payload)
    r = response.json()

    # Decode and save the image.
    with open(OUTPUT, 'wb') as f:
        f.write(base64.b64decode(r['images'][0]))


def pending_tasks():
    """
    获取任务队列（当前任务不会出现在队列中）
    respose 示例：
    {
        "size": 0,
        "tasks": []
    }
    """
    response = requests.get(url=f'{URL}/internal/pending-tasks')
    print(response.json())


def progress():
    """
    获取任务进度。
    response 示例：
    {
        "progress": 0,
        "eta_relative": 0,
        "state": {},
        "current_image": "string",
        "textinfo": "string"
    }
    """
    response = requests.get(url=f'{URL}/sdapi/v1/progress?skip_current_image=false')
    r = response.json()
    if r['current_image']:
        with open(OUTPUT, 'wb') as f:
            f.write(base64.b64decode(r['current_image']))
    
        print(f"progress: {r['progress']}")

if __name__ == "__main__":
    thread = threading.Thread(target=txt2img)
    thread.start()
    while thread.is_alive():
        progress()
        time.sleep(0.1)
    print(f"done, saved in {OUTPUT}")