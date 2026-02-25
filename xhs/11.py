import json
import time
import requests
from eee import pager
import execjs
xs = pager()['X-s']
xt = str(pager()['X-t'])
with open('rrr.js', 'r', encoding='utf-8') as f:
    js_code1 = f.read()
ctx = execjs.compile(js_code1)
result = ctx.call("ee")
headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "content-type": "application/json;charset=UTF-8",
    "origin": "https://www.xiaohongshu.com",
    "priority": "u=1, i",
    "referer": "https://www.xiaohongshu.com/",
    "sec-ch-ua": "\"Microsoft Edge\";v=\"137\", \"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36 Edg/137.0.0.0",
    "x-b3-traceid": "4aa4d2074d540314",
    "x-mns": "unload",
    "x-s": xs,
    "x-s-common": result,
    "x-t": xt,
    "x-xray-traceid": "cbc1f8ef10564d82e5112acaee832e7d"
}
cookies = {
    "abRequestId": "92dd7f7f-3c5b-5914-9bd5-d38e8d57f131",
    "xsecappid": "xhs-pc-web",
    "a1": "1945d5404f9l0qhk1uh5sx95u1l5r04nchro8mq9450000271566",
    "webId": "01ea4ef2bf6621dd1cfc8eb870c2ac70",
    "gid": "yj42f24y42SJyj42f2484x6Aij18AxTy7x2MFj4Cj27y1l282F84IY888JWy2KK8KdYi42iY",
    "webBuild": "4.68.0",
    "web_session": "040069b787daaf7d429b46a67f3a4bd877ec17",
    "acw_tc": "0a4ad0d317502616352627951e749a1c07533458080dbe8a26e53e27095185",
    "websectiga": "cffd9dcea65962b05ab048ac76962acee933d26157113bb213105a116241fa6c",
    "sec_poison_id": "31c58701-f42c-4f84-a887-64cadbf84dcc",
    "loadts": "1750261667875",
    "unread": "{%22ub%22:%226841a4b6000000001101e47c%22%2C%22ue%22:%22684fdba800000000220248eb%22%2C%22uc%22:9}"
}
url = "https://edith.xiaohongshu.com/api/sns/web/v2/comment/page"
params = {
    "note_id": "685562e90000000017033067",
    "cursor": "",
    "top_comment_id": "",
    "image_formats": "jpg,webp,avif",
    "xsec_token": "ABC8q1xbKanhFuY-jF4v7RwLlvtPl7q6hK8zzN1YlwJOQ="
}
data = json.dumps(params, separators=(',', ':'))
response = requests.get(url, headers=headers, cookies=cookies, params=params)
print(pager())
print(response.text)
print(response)
# print(response.headers)
