module.exports = {
    siteMetadata: {
        title: `Olive Baptist`,
        author: `@olivebaptist`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/src/images`,
        },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
        resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                `great vibes`,
                `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
                ],
                display: 'swap'
            }
        },
        {
        resolve: `gatsby-source-wordpress-experimental`,
            options: {
                url:
                // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
                process.env.WPGRAPHQL_URL ||
                `https://backend.olivebaptist.org/wp/graphql`,
                schema: {
                //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
                typePrefix: `Wp`,
                },
                develop: {
                //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
                hardCacheMediaFiles: true,
                },
                 html: {
                    createStaticFiles: false,
                    useGatsbyImage: false,
                },
                type: {
                    Post: {
                        exclude: true,
                    },
                    Page: {
                        exclude: true,
                    },
                    schema: {
                        timeout: 500000,
                    },
                    MediaItem: { lazyNodes: true },
                },
            },
        },
    ]
}