import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    // `<title>` field in output xml
    title: 'falsefox\'s blog',
    // `<description>` field in output xml
    description: 'falsefox\'s humble website about tech, privacy, programming, and links to falsefox\'s blog and projects.',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: await pagesGlobToRssItems(
        import.meta.glob('./blog/posts/*/*.md'),
    ),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}