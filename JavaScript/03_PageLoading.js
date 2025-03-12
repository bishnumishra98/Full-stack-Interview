// Q) How can page loading time be reduced ?

// A) Page loading time can be reduced by following these best practices:
//    1. Minimize HTTP Requests: Reduce the number of requests made by the browser to load the page. This can be done
//                               by combining multiple CSS and JavaScript files into a single file and reducing the
//                               number of external resources like fonts and scripts.
//    2. Minify and Compress Files: Minify CSS, JavaScript, and HTML files to reduce their file size. Use formats like
//                                  WebP, which offers smaller file sizes with good quality. Compress images using tools
//                                  like ImageOptim or TinyPNG to reduce their size without losing quality.
//    3. Enable Browser Caching: Allow browsers to store some elements of the page locally so they don't have to be
//                               downloaded again on subsequent visits. Set appropriate cache-control headers to control
//                               how long resources are cached.
//    4. Use Content Delivery Networks (CDNs): Use CDNs to deliver content from servers closer to the user, reducing
//                                             latency and speeding up page load times.
//    5. Lazy laoding: Load images, videos, and other resources only when they are needed, rather than loading everything
//                     at once. This can significantly reduce initial page load times.
//                     The simplest way to implement lazy loading for images is by using the built-in loading attribute
//                     in modern browsers.
//                     Example: <img src="image.jpg" loading="lazy" alt="Image">
