import pb from '@/lib/pocketbase/client'
import { ResultRecord } from '@/types/landing'

export async function getResults(): Promise<ResultRecord[]> {
  try {
    const records = await pb.collection('results').getFullList<ResultRecord>({
      sort: 'order',
    })
    return records
  } catch (error) {
    console.error('Erro ao buscar resultados do PocketBase:', error)
    return []
  }
}
