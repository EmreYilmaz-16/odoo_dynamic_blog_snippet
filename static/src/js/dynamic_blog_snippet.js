/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";
import { rpc } from "@web/core/network/rpc";

publicWidget.registry.DynamicBlogPostsSnippet = publicWidget.Widget.extend({
    selector: ".s_dynamic_blog_posts",

    async start() {
        await this._super(...arguments);

        const row = this.el.querySelector(".js_dynamic_blog_posts_row");
        if (!row) {
            return;
        }

        let posts = [];
        try {
            posts = await rpc("/odoo_dynamic_blog_snippet/latest_posts", {
                limit: 6,
            });
        } catch (error) {
            console.error("Dynamic blog snippet RPC error:", error);
            row.innerHTML = `
                <div class="col-12">
                    <div class="alert alert-danger mb-0">
                        Blog verileri alınırken hata oluştu.
                    </div>
                </div>
            `;
            return;
        }

        if (!posts.length) {
            row.innerHTML = `
                <div class="col-12">
                    <div class="alert alert-warning mb-0">
                        Gösterilecek yayınlanmış blog yazısı bulunamadı.
                    </div>
                </div>
            `;
            return;
        }

        const escapeHtml = (value) => {
            const div = document.createElement("div");
            div.textContent = value || "";
            return div.innerHTML;
        };

        row.innerHTML = posts.map((post) => `
            <div class="col-12 col-md-6 col-xl-4 mb-4">
                <div class="card h-100 shadow-sm o_dynamic_blog_card">
                    <a href="${escapeHtml(post.url)}" class="o_dynamic_blog_image_wrap">
                        <img
                            src="${escapeHtml(post.image_url)}"
                            alt="${escapeHtml(post.name)}"
                            class="card-img-top o_dynamic_blog_image"
                            loading="lazy"
                        />
                    </a>
                    <div class="card-body d-flex flex-column">
                        <div class="small text-muted mb-2">
                            ${escapeHtml(post.blog_name)}${post.post_date ? " • " + escapeHtml(post.post_date) : ""}
                        </div>
                        <h5 class="card-title">${escapeHtml(post.name)}</h5>
                        <p class="card-text text-muted flex-grow-1">${escapeHtml(post.subtitle)}</p>
                        <div>
                            <a href="${escapeHtml(post.url)}" class="btn btn-primary">
                                Devamını Oku
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `).join("");
    },
});
