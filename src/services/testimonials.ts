import pb from '@/lib/pocketbase/client'
import { TestimonialRecord } from '@/types/landing'

export async function getTestimonials(): Promise<TestimonialRecord[]> {
  try {
    const records = await pb.collection('testimonials').getFullList<TestimonialRecord>({
      sort: '-featured,order',
    })
    return records
  } catch (error) {
    console.error('Erro ao buscar depoimentos do PocketBase:', error)
    return []
  }
}
