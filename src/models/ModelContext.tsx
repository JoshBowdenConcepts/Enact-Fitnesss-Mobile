import { createRealmContext } from '@realm/react'
import { Profile } from './ProfileModel'

// Create a configuration object
const realmConfig: Realm.Configuration = {
	schema: [Profile],
}
// Create a realm context
export const { RealmProvider } = createRealmContext(realmConfig)
