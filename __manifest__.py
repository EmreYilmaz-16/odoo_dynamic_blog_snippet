{
    "name": "Website Dynamic Blog Snippet",
    "version": "18.0.1.0.0",
    "summary": "Custom dynamic snippet for showing latest blog posts on the website",
    "category": "Website",
    "license": "LGPL-3",
    "author": "OpenAI",
    "depends": ["website", "website_blog"],
    "data": [
        "views/templates.xml",
        "views/snippets.xml"
    ],
    "assets": {
        "web.assets_frontend": [
            "odoo_dynamic_blog_snippet/static/src/js/dynamic_blog_snippet.js",
            "odoo_dynamic_blog_snippet/static/src/scss/dynamic_blog_snippet.scss"
        ]
    },
    "installable": True,
    "application": False
}
