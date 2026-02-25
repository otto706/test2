from DrissionPage import ChromiumPage
import json


# 1. 启动浏览器（默认端口 9222）
def pager():
    page = ChromiumPage()  # 或指定端口：ChromiumPage(addr_driver_opts=9222)

    # 2. 访问目标页面（需确保页面已加载所需 JS 环境）
    target_url = "https://www.xiaohongshu.com/"  # 替换为实际页面
    page.get(target_url)
    # data = "/api/sns/web/v2/comment/page?note_id=684c59fb00000000220264ed&cursor=&top_comment_id=&image_formats=jpg,webp,avif&xsec_token=ABD9rWHoZn7RT_fng91TK-4m2W83KTbXqWOLxL9HII1LY%3D"
    # js_code = f"""
    #     res = window._webmsxyw("/api/sns/web/v1/feed", {data})
    #     return res
    # """

    js_code = f"""
        res = window._webmsxyw("/api/sns/web/v2/comment/page?note_id=685562e90000000017033067&cursor=&top_comment_id=&image_formats=jpg,webp,avif&xsec_token=ABC8q1xbKanhFuY-jF4v7RwLlvtPl7q6hK8zzN1YlwJOQ%3D")
        return res
    """
    result = page.run_js(js_code)
    return result
    # print(result)
