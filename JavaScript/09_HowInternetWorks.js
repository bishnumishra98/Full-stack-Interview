// Q) How internet works ? Explain the whole cycle from typing a URL in the browser to getting the response.
// A) The process of how the internet works can be broken down into the following steps:

//    1. Typing a URL: When you type a URL (Uniform Resource Locator) into the browser's address bar and
//                     press Enter, the browser sends an HTTP request to the server hosting the website.
//                     The URL specifies the protocol (HTTP or HTTPS), the domain name (e.g., google.com),
//                     and the path to the resource (e.g., /search).
//
//    2. Domain Name Resolution: The browser checks its cache to see if it has the IP address corresponding to
//                               the domain name. If the IP address is not found in the cache, the browser sends a
//                               DNS (Domain Name System) request to a DNS server to resolve the domain name to an
//                               IP address. The DNS server then returns the IP address to the browser.
//
//    3. Establishing a TCP Connection: Once the browser has the IP address of the server, it establishes a TCP
//                                     (Transmission Control Protocol) connection with the server. TCP is a
//                                      connection-oriented protocol that ensures reliable data transmission between
//                                      the client and server.
//
//    4. Sending an HTTP Request: After establishing a TCP connection, the browser sends an HTTP (Hypertext Transfer
//                                Protocol) request to the server. The request includes the HTTP method (e.g., GET,
//                                POST), headers, and any data (e.g., form data) required by the server to process
//                                the request.
//
//    5. Processing the Request: The server receives the HTTP request and processes it based on the requested resource
//                               (e.g., HTML file, image, API endpoint). The server may interact with a database, run
//                               server-side code, or perform other tasks to generate the response.
//
//    6. Sending an HTTP Response: After processing the request, the server sends an HTTP response back to the browser.
//                                 The response includes an HTTP status code (e.g., 200 for success, 404 for not found),
//                                 headers, and the response data (e.g., HTML content, image data).
//
//    7. Rendering the Web Page: The browser receives the HTTP response and begins rendering the web page. It parses the
//                               HTML content, fetches additional resources like CSS and JavaScript files, and renders
//                               the web page on the screen.
//
//    8. Closing the TCP Connection: Once the web page is fully loaded, the browser closes the TCP connection with the
//                                   server. This helps free up network resources and allows the server to handle other
//                                   client requests.
