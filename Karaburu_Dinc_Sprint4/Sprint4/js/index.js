$(document).ready(function () {
    // We load posts from local storage
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    // We populate the slider with posts that have images, titles, and content
    posts.forEach(function (post) {
        if (post.image && post.title && post.content) {
            // We create an excerpt for the slider item
            const excerpt = post.content.length > 100 ? post.content.substring(0, 100) + "..." : post.content;

            // We create the HTML for the slider item
            const sliderItem = `
                <div>
                    <a href="${post.image}" data-fancybox="gallery" data-caption="${post.title} - ${excerpt}">
                        <img src="${post.image}" alt="${post.title}">
                    </a>
                    <h3>${post.title}</h3>
                    <p>${excerpt}</p>
                </div>
            `;

            // We append the slider item to the slider container
            $("#slider").append(sliderItem);
        }
    });

    // We initialize the Slick slider if the element exists
    if ($('#slider').length) {
        $('#slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true
        });
    }

    // We populate the blog posts section
    posts.forEach(function (post) {
        // We create an excerpt if the content is long
        const excerpt = post.content.length > 100 ? post.content.substring(0, 100) + "..." : post.content;

        // We create the HTML for each post
        const postHtml = `
        <article class="post">
            <h2>${post.title}</h2>
            <p class="post-meta">
                <span class="author">Author: Unknown</span> |
                <span class="date">Date: ${post.date || "undefined"}</span>
            </p>
            <div class="content-excerpt">
                <p>${excerpt} <a href="#" class="read-more">Read More</a></p>
            </div>
            <div class="content-full" style="display: none;">
                ${post.image ? `<img src="${post.image}" alt="Post Image" style="max-width:100%; margin-bottom:10px;">` : ""}
                <p>${post.content}</p>
                <a href="#" class="read-less" style="display: block; margin-top: 10px; font-weight: bold;">Read Less</a>
            </div>
        </article>
        `;

        // We append the post HTML to the blog posts container
        $("#blog-posts").append(postHtml);
    });

    // We added 'Read More' functionality
    $('#blog-posts').on('click', '.read-more', function (event) {
        event.preventDefault();
        const $post = $(this).closest('.post');
        $post.find('.content-excerpt').hide();
        $post.find('.content-full').slideDown();
    });

    // We added 'Read Less' functionality
    $('#blog-posts').on('click', '.read-less', function (event) {
        event.preventDefault();
        const $post = $(this).closest('.post');
        $post.find('.content-full').slideUp(function () {
            $post.find('.content-excerpt').show();
        });
    });
});
