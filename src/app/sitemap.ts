import { MetadataRoute } from 'next'

const url = process.env.NEXT_PUBLIC_CENTRAL_URL as string

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
	]
}
