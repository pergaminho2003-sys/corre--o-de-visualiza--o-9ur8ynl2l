import pb from '@/lib/pocketbase/client'
import { LeadPayload, LeadRecord } from '@/types/landing'

export async function createLead(payload: LeadPayload): Promise<LeadRecord> {
  const record = await pb.collection('leads').create<LeadRecord>(payload)
  return record
}
