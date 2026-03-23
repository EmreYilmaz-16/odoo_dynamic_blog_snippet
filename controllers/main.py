from odoo import http
from odoo.http import request


class DynamicBlogSnippetController(http.Controller):

    @http.route(
        '/odoo_dynamic_blog_snippet/latest_posts',
        type='json',
        auth='public',
        website=True
    )
    def latest_posts(self, limit=6):
        try:
            limit = int(limit)
        except Exception:
            limit = 6

        limit = max(1, min(limit, 24))

        domain = [('website_published', '=', True)]
        posts = request.env['blog.post'].sudo().search(
            domain,
            order='post_date desc, id desc',
            limit=limit
        )

        result = []
        for post in posts:
            image_url = f"/web/image/blog.post/{post.id}/image_1920" if getattr(post, 'image_1920', False) else "/web/static/img/placeholder.png"
            result.append({
                'id': post.id,
                'name': post.name or '',
                'subtitle': post.subtitle or '',
                'url': post.website_url or '#',
                'image_url': image_url,
                'blog_name': post.blog_id.name or '',
                'post_date': post.post_date.strftime('%Y-%m-%d') if post.post_date else ''
            })

        return result
